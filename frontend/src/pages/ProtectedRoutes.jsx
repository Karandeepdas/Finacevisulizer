import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
export default function Protectedroutes({children}){
    const [isvalid,setIsvalid]=useState(null);
    const navigate=useNavigate();
    useEffect(()=>{
      
       const func=async ()=>{
       const url=import.meta.env.VITE_ALLLIST;
       const token=localStorage.getItem("token");
       if(!token){
          setIsvalid(false);
           navigate('/login');
          return 
       }
       try{
         const response=await fetch(url,{
         method:"GET",
         headers:{
            "Content-Type": "application/json",
            Authorization:`Bearer ${token}`}
       })
       const res= await response.json()
         if(!response.ok){
            setIsvalid(false);
            localStorage.removeItem("token");
            navigate('/login',{replace:true}); 
         }
         console.log("making "+res.length);
         console.log(res);
         if(res.items.length<3){
            console.log("mistaken")
            navigate('/setup',{replace:true})
         }
        setIsvalid(true);
       }
       catch(err){
          console.log("failed the request")
          console.log(url);
          console.log(err);
          setIsvalid(false);
          navigate('/login',{replace:true});
       }
    }
    
    func();

    },[])
    if(isvalid==null){
      return <div>Loading..</div>
    }
    
     return children
     
}