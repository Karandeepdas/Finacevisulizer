import { useContext } from "react";
import { Listcontext } from "../../Layout";
import { toast } from "react-hot-toast";

export default function Deletecard({setvar,_id}){
    const {fetchdata,setLoading}=useContext(Listcontext)
    
    const func=async(e)=>{
        setLoading(true);
       e.preventDefault();
       try{
          const url=import.meta.env.VITE_ALLLIST;
          console.log(`this is my full url ${url}/:${_id}`);
          const response=await fetch(`${url}/${_id}`,{
              method:"DELETE",
              headers:{
                "Authorization":`Bearer ${localStorage.getItem("token")}`,
                "Content-Type":"Application/json"
              }
          })
          console.log(response);
          if(response.ok){
           toast.success('Item deleted succesfully')
           await fetchdata();
          }
       
       }
       catch(err){
          console.log("error while deleting");
          console.log(err);
       }
       finally{
        setvar(false)
       }     
    }
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setvar(false)}
          ></div>
       <div className="w-64 h-64 relative bg-white flex flex-col items-center pt-6">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 fill-red-500 stroke-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
        </svg>
       <h1 className="text-grey-500 text-xl font-semibold">Are you sure ?</h1>
       <p className="text-sm text-grey-700 p-2">This action will delete all you information of the item and you won't be able to revert it</p>
       <div className="flex">
        <button onClick={func} className="bg-red-500 text-white m-1 p-2 hover:bg-red-700">Yes,delete it</button>
        <button onClick={(e)=>{
            e.preventDefault() 
            setvar(false)
        } }className="border border-red-500 text-red-500 m-1 p-2 hover:bg-gray-200 hover:text-white">Cancel</button>
       </div>
       </div>
       </div>
    )
}