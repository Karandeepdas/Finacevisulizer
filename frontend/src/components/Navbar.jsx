import { useState } from "react"
import Profile from "./Popups/Profile"
export default function Navbar(){
   const [popcard,setPop]=useState(false)
    return (
        <nav className=" h-14 bg-[rgb(0,0,0)] flex items-center p-2">
          <div className="w-64 flex bg-[rgba(84,84,84,1)] rounded-lg border border-2 border-black h-10">
            <input type="Search" placeholder=" Search the item" className="m-1 bg-[rgba(84,84,84,1)]"></input>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 fill-white">
              <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
             </svg>
            </button>
          </div>
          <button onClick={()=>setPop(true)} className="ml-auto">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8 fill-white">
            <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
            </svg>
          </button>
          {popcard &&(
            <Profile setProfile={setPop}/>
          )}
        </nav>
    )
}