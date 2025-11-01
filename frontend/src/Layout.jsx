import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/sidebar";
import { createContext, useEffect, useState } from "react";

export const Listcontext=createContext(null);

export default function Layout(){
   const [loading,setLoading]=useState(true)
   const [data,setData]=useState([]);
  const [monthly,setmonthly]=useState([]);
   const url=import.meta.env.VITE_ALLLIST;

const fetchdata=async()=>{
      try{
      const response=await fetch(url,{
         method:"GET",
         headers:{
         "Authorization":`Bearer ${localStorage.getItem("token")}`,
         "Content-Type":"application/json"
         }
      })
      const res=await response.json();
      //console.log(res.items);
     
      setData(res.items);
      }
      catch(err){
         console.log("this is the problem",err);
      }
      finally{
         setLoading(false);
      }
   
   }

   useEffect(()=>{
      fetchdata();
   },[])
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();
    useEffect(()=>{
      
      setmonthly(data.filter((obj)=>{
      const d=new Date(obj.date);
      
      return  d.getMonth()===currentMonth && d.getFullYear()===currentYear;
   }))
    },[data])
  
     return(
       <Listcontext.Provider value={{data,monthly,loading,setLoading,fetchdata}}>
        <div className='flex h-screen bg-[rgba(36,36,36,1)]'>
              <div className='w-1/6'>
              <Sidebar/>
              </div>
              <div className='flex-1'>
              <Navbar/>
              <Outlet />
              </div>
        </div>
      </Listcontext.Provider>
     )
}