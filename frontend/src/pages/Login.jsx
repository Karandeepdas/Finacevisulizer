import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {toast} from "react-hot-toast"
export default function Login(){
	const [email,setEmail]=useState("");
	const [password,setPassword]=useState("");
    const navigate=useNavigate()
	const handleLogin=async(e)=>{
	   e.preventDefault();
	   const url=import.meta.env.VITE_AUTH;
       const response=await fetch(`${url}/login`,{
		 method:"POST",
		 headers: { "Content-Type": "application/json" },
		 body:JSON.stringify({email:email,password:password})
	   })
	   const res=await response.json();
	   if(response.ok){
		 
		  localStorage.setItem("token",res.bearertoken)
          if(res.isNewUser){
			navigate("/setup");
		  }
		  else{
			navigate("/dashboard");
			toast.success("Logged in sucesfully")
		  }
	   }
	   else{
		toast.error(`${res.message} !`);
	   }
	}
 return (

 
<div className="flex justify-center items-center w-screen h-screen bg-gradient-to-br from-blue-600 to-indigo-600">
	<div
		className="px-10 py-8 rounded-xl w-screen shadow-md max-w-sm  border border-gray-200  w-80 rounded-lg  p-4 xl:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
		<form className="space-y-10" action="#" onSubmit={handleLogin}>
			<h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
			<div>
				<label htmlFor="email" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your email</label>
				<input type="email" name="email" id="email" onChange={(e)=>{setEmail(e.target.value)}} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required/>
            </div>
				<div>
					<label htmlFor="password" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your password</label>
					<input type="password" name="password" id="password" placeholder="••••••••" onChange={(e)=>{setPassword(e.target.value)}} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
                </div>
					<div className="flex items-start">
						<div className="flex items-start">
							<div className="flex items-center h-5">
								<input id="remember" aria-describedby="remember" type="checkbox" className="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required/>
                            </div>
								<div className="text-sm ml-3">
									<label htmlFor="remember" className="font-medium text-gray-900 dark:text-gray-300">Remember me</label>
								</div>
							</div>
							<a href="#" className="text-sm text-blue-700 hover:underline ml-auto dark:text-blue-500">Lost
								Password?</a>
						</div>
						<button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Login to your account</button>
						<div className="text-sm font-medium text-gray-500 dark:text-gray-300">
							Not registered? <Link to="/register" className="text-blue-700 hover:underline dark:text-blue-500">Create
								account</Link>
						</div>
		</form>
	</div>
</div>
 )
}