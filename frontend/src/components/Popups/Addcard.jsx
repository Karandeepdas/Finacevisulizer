import { useContext, useState } from "react";
import { Listcontext } from "../../Layout";

import { toast } from "react-hot-toast";

 export default function Addcard({setOpen}){
    const {fetchdata,setLoading}=useContext(Listcontext)
    const [list,setList]=useState({
        title:"",
        price:0,

    })
    const Addreq=async ()=>{
        setLoading(true);
        const url=import.meta.env.VITE_ALLLIST;
        try{
           const response=await fetch(url,{
            method:"POST",
            headers:{
              "Authorization":`Bearer ${localStorage.getItem("token")}`,
              "Content-Type":"application/json"
            },
            body:JSON.stringify(list)
            
            })
           if(response.ok){
             await fetchdata();
             toast.success('Item added succesfully')
           }
           else{
             const res=await response.json();
             toast.error(res.message)
           }
        }
        catch(err){
           console.log("something went wrong")
           console.log(err)
        }
       
        
    }
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          ></div>
          <div className="relative bg-white p-6 rounded-xl shadow-xl w-96 z-10">
            <h2 className="text-lg font-semibold mb-4">Add New Item</h2>
            <form
            className="space-y-3"
            onSubmit={async (e) => {
                e.preventDefault(); 
                await Addreq()  ;
                setOpen(false);     
            }}
            >
            <input
                type="text"
                placeholder="Name"
                className="w-full border rounded p-2"
                onChange={(e)=>setList({...list,title:e.target.value})}
                required
            />
            <input
                type="number"
                placeholder="Price"
                className="w-full border rounded p-2"
                onChange={(e)=>setList({...list,price:e.target.value})}
                required
            />
            <input
                type="date"
                className="w-full border rounded p-2"
                onChange={(e)=>setList({...list,date:new Date(e.target.value).toISOString()})}
            />
            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded"
               
            >
                Save
            </button>
            </form>

        </div>
       </div>
    )
 }
 
 