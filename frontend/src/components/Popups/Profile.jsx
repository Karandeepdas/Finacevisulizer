import { useNavigate } from "react-router-dom";

export default function Profile({setProfile}){
     const navigate=useNavigate();
    return (
       
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div  
            className="absolute inset-0 bg-black/40 backdrop-blur-sm" 
            onClick={()=>setProfile(false)}
            ></div>
            <div className="relative bg-gray-400 p-6 rounded-xl shadow-xl w-80 z-10 h-65 flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-12 ">
            <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
             </svg>
            <h1 className="text-xl font-serif mt-2">John Doe</h1>
            <h1 className="text-sm mt-2">karandeepdas6@gmail.com</h1>
            <div className="flex w-full justify-center mt-2">
                <button className="text-white bg-red-500 p-2 border-none m-1" onClick={()=>setProfile(false)}>Cancel</button>
                <button className="text-white bg-blue-700 p-2 border-none m-1" onClick={()=>{
                   setProfile(false);
                   localStorage.removeItem("token");
                   navigate('/login')
                }
                }>Log out</button>
            </div>
            </div>
        </div>
    )
}