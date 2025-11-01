import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {toast} from "react-hot-toast"
import { Link } from "react-router-dom";
export default function Register(){
  const [username,setUsername]=useState("");
  const [useremail,setEmail]=useState("");
  const [passone,setPassone]=useState("");
  const [passtwo,setPasstwo]=useState("");
  const navigate=useNavigate();
  const registration=async(e)=>{
   e.preventDefault();
   if(passone!=passtwo){
      toast.error("Both password should be same !")
      return ;
   }
   try{
     const url=import.meta.env.VITE_AUTH;
     console.log(username+" "+passone+" "+useremail)
     const response=await fetch(`${url}/register`,{
       method:"POST",
       headers: { "Content-Type": "application/json" },
       body:JSON.stringify({name:username,email:useremail,password:passone})
     })
     if(response.ok){
        navigate('/login');
        toast.success("Registerd succesfully, Now Login")
     }
     else{
       const res=await response.json();
       toast.error(res.message)
       console.log(res);
       console.log(response);
     }
   }
   catch{
      toast.error("Something went wrong. Try again later!");
   }
  }
  return(
  <div className="h-screen bg-gradient-to-br from-blue-600 to-indigo-600 flex justify-center items-center w-full flex-col">
  <form onSubmit={registration}>
    <div className="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
      <div className="space-y-4">
        <h1 className="text-center text-2xl font-semibold text-gray-600">Register</h1>
        <div>
          <label for="email" className="block mb-1 text-gray-600 font-semibold">Username</label>
          <input onChange={(e)=>{setUsername(e.target.value)}} type="text" className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" required/>
        </div>
        <div>
          <label for="email" className="block mb-1 text-gray-600 font-semibold">Email</label>
          <input onChange={(e)=>{setEmail(e.target.value)}} type="email" className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" required/>
        </div>
        <div>
          <label for="email" className="block mb-1 text-gray-600 font-semibold">Password</label>
          <input type="password" onChange={(e)=>{setPassone(e.target.value)}}  className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" required/>
        </div>
        <div>
          <label for="email" className="block mb-1 text-gray-600 font-semibold">confirm Password</label>
          <input onChange={(e)=>{setPasstwo(e.target.value)}} type="password" className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" required/>
        </div>
      </div>
      <button type="submit" className="mt-4 w-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide">Register</button>
    </div>
  </form>
  <h1 className="text-xl text-white">
    Already has a account ?<Link to='/login' className="text-black">Login Here</Link>
  </h1>
  
</div>
   )
}
