import { useContext } from "react";
import { useState } from "react";
import { Listcontext } from "../../Layout";
import { toast } from "react-hot-toast";


export default function Update({Obj,setEdit}){
    const [list,setList]=useState({
        title:Obj.title,
        price:Obj.price,
        date:Obj.date
    })
    const {fetchdata,setLoading}=useContext(Listcontext)
    const func=async()=>{
        setLoading(true);
        try{
          const url=import.meta.env.VITE_ALLLIST;
          const newlist={
            ...list,
            date:new Date(list.date).toISOString()
          }
          
          const resposne=await fetch(`${url}/${Obj._id}`,{
              method:"PUT",
              headers:{
                "Authorization":`Bearer ${localStorage.getItem("token")}`,
                "Content-Type":"Application/json"
              },
              body:JSON.stringify(newlist)
          })
          const res=await resposne.json();
          if(!resposne.ok){
             toast.error('Error!, ',res)
          }
          else{
            await fetchdata();
            toast.success('Edited succesfully')
          }
        }
        catch(err){
           console.log(err);
        }
        finally{
            setEdit(false);
        }
    }
    return (
         <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setEdit(false)}
          ></div>
          <div className="relative bg-white p-6 rounded-xl shadow-xl w-96 z-10">
            <h2 className="text-lg font-semibold mb-4">Add New Item</h2>
            <form
            className="space-y-3"
            onSubmit={(e) => {
                e.preventDefault();   
               
                setEdit(false);     
            }}
            >
            <input
                type="text"
                placeholder="Name"
                className="w-full border rounded p-2"
                value={list.title}
                onChange={(e)=>setList({...list,title:e.target.value})}
                required
            />
            <input
                type="number"
                placeholder="Price"
                className="w-full border rounded p-2"
                value={list.price}
                onChange={(e)=>setList({...list,price:e.target.value})}
                required
            />
            <input
                type="date"
                className="w-full border rounded p-2"
                value={list.date}
                placeholder="date"
                onChange={(e)=>setList({...list,date:e.target.value})}
            />
            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded"
                onClick={func}
            >
                Save
            </button>
            </form>

        </div>
       </div>
    )
}