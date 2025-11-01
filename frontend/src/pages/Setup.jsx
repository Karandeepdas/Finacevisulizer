import { useState } from "react";
import {toast} from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Setupcard(){
   
   const navigate=useNavigate();
    const  handleSubmit=async(e)=>{
       e.preventDefault();
           const items = [
      {
        title: document.getElementById("item-one").value,
        price: document.getElementById("price-one").value,
        date: document.getElementById("date-one").value,
      },
      {
        title: document.getElementById("item-two").value,
        price: document.getElementById("price-two").value,
        date: document.getElementById("date-two").value,
      },
      {
        title: document.getElementById("item-three").value,
        price: document.getElementById("price-three").value,
        date: document.getElementById("date-three").value,
      },
    ];
    const cleanedItems = items.map((obj) => {
      const newObj = { ...obj };
      if (!newObj.date) delete newObj.date;
      else{

        newObj.date=new Date(newObj.date).toISOString();
      }
      return newObj;
    });

    for(const obj of cleanedItems){
      const url=import.meta.env.VITE_ALLLIST;
      const response=await fetch(url,{
        method:"POST",
        headers:{
          "Content-Type":"Application/json",
          "Authorization":`Bearer ${localStorage.getItem("token")}`
        },
       body:JSON.stringify(obj)
      })
      if(!response.ok){
        const res=await response.json();
        toast.error(res);
        return;
      }
    }
    
    toast.success("Routing to dashboard")
    navigate('/dashboard')
    
    }
    return (
        <div className="w-full h-screen flex justify-center items-center">
          <form className="w-1/3 bg-gray-900 h-[550px] " onSubmit={handleSubmit}>
           <div className="flex flex-col items-center mt-4">
            <h1 className="text-xl text-white">Select first item</h1>
            <div className="flex justify-evenly w-full">
            <div className="flex flex-col">
              <label htmlFor="item-one" className="text-white">Item Name</label>
              <input type="text" placeholder="Name" id="item-one" className="w-48 bg-gray-500 text-white placeholder-gray-200 rounded-full outline-none px-2" required></input>
            </div>
            <div className="flex flex-col">
              <label htmlFor="price-one" className="text-white">Item Price</label>
              <input type="number" placeholder="Price" id="price-one" className="w-48 bg-gray-500 text-white placeholder-gray-200 rounded-full outline-none px-2" required></input>
            </div>
            </div>
             <div className="flex w-full justify-evenly">
              <div className="flex flex-col">
              <label htmlFor="mode-one" className="text-white">Mode of Transaction</label>
              <select id="mode-one" required className="w-48 bg-gray-500 text-white placeholder-gray-200 rounded-full outline-none px-2">
                <option value="">--Please Select one--</option>
                <option value="UPI">UPI</option>
                <option value="Cash">Cash</option>
              </select>
              </div>
              <div className="flex flex-col">
              <label id="date-one" className="text-white">Date</label>
              <input type="date" placeholder="date" id="date-one" className="w-48 bg-gray-500 text-white placeholder-gray-200 rounded-full outline-none px-2"></input>
              </div>
            </div>
            </div>

          <div className="flex flex-col items-center mt-4">
            <h1 className="text-xl text-white">Select second item</h1>

            <div className="flex justify-evenly w-full">
            <div className="flex flex-col">
              <label htmlFor="item-two" className="text-white">Item Name</label>
              <input type="text" placeholder="Name" id="item-two" className="w-48 bg-gray-500 text-white placeholder-gray-200 rounded-full outline-none px-2" required></input>
             </div>
             <div className="flex flex-col">
              <label htmlFor="price-two" className="text-white">Item Price</label>
              <input type="number" placeholder="Price" id="price-two" className="w-48 bg-gray-500 text-white placeholder-gray-200 rounded-full outline-none px-2" required></input>
             </div>
            </div>
             <div className="flex justify-evenly w-full">
              <div className="flex flex-col">
              <label htmlFor="mode-two" className="text-white">Mode of Transaction</label>
              <select id="mode-two" required className="w-48 bg-gray-500 text-white placeholder-gray-200 rounded-full outline-none px-2">
                <option value="">--Please Select one--</option>
                <option value="UPI">UPI</option>
                <option value="Cash">Cash</option>
              </select>
              </div>
              <div className="flex flex-col">
              
              <label htmlFor="date-two" className="text-white">Date</label>
              <input type="date" placeholder="date" id="date-two" className="w-48 bg-gray-500 text-white placeholder-gray-200 rounded-full outline-none px-2"></input>
              </div>
            </div>
            </div>
          <div className="flex flex-col items-center mt-4">
            <h1 className="text-xl text-white">Select Third item</h1>
            <div className="flex justify-evenly w-full">
              <div className="flex flex-col">
              <label htmlFor="item-three" className="text-white">Item Name</label>
              <input type="text" placeholder="Name" id="item-three" className="w-48 bg-gray-500 text-white placeholder-gray-200 rounded-full outline-none px-2" required></input>
              </div>
              <div className="flex flex-col">
              <label htmlFor="price-three" className="text-white">Item Price</label>
              <input type="number" placeholder="Price" id="price-three" className="w-48 bg-gray-500 text-white placeholder-gray-200 rounded-full outline-none px-2" required></input>
              </div>
            </div>
             <div className="flex justify-evenly w-full">
              <div className="flex flex-col">
              <label htmlFor="mode-three" className="text-white">Mode of Transaction</label>
              <select id="mode-three" className="w-48 bg-gray-500 text-white placeholder-gray-200 rounded-full outline-none px-2" required>
                <option value="">--Please Select one--</option>
                <option value="UPI">UPI</option>
                <option value="Cash">Cash</option>
              </select>
              </div>
              <div className="flex flex-col">
              <label htmlFor="date-three" className="text-white">Date</label>
              <input type="date" placeholder="date" id="date-three" className="w-48 bg-gray-500 text-white placeholder-gray-200 rounded-full outline-none px-2"></input>
              </div>
            </div>
            </div>
            <button type="submit" className="block bg-blue-700 hover:bg-blue-800 border-2 px-4 py-2 mx-auto rounded-full mt-3 border-none text-white">Submit</button>
            </form>
        </div>
    )
}