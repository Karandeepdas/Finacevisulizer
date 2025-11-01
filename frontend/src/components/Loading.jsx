export default function Loader(){
    const rows=10;
    return (
        <div  className="relative h-[calc(100vh-3.5rem)] overflow-x-auto p-2 ">
           <div className="flex bg-[rgb(0,0,0)] p-4 justify-between text-xs text-gray-900 uppercase dark:text-gray-400 ">
               <div role="status" className="w-24 h-[20px] bg-gray-400 rounded-md animate-pulse"></div>
               <div role="status" className="w-24 h-[20px] bg-gray-400 rounded-md animate-pulse"></div>
               <div role="status" className="w-24 h-[20px] bg-gray-400 rounded-md animate-pulse"></div>
               <div role="status" className="w-24 h-[20px] bg-gray-400 rounded-md animate-pulse"></div>
               <div role="status" className="w-24 h-[20px] bg-gray-400 rounded-md animate-pulse"></div>
           </div>
           {
            Array.from({ length:rows }).map((_,idx)=>(
            <div key={idx} className="flex bg-gray-800 py-5 px-4 justify-between border-t-2">
              <div role="status" className="w-24 h-[15px] bg-white animate-pulse"></div>
               <div role="status" className="w-24 h-[15px] bg-white animate-pulse"></div>
               <div role="status" className="w-24 h-[15px] bg-white animate-pulse"></div>
               <div role="status" className="w-24 h-[15px] bg-white animate-pulse"></div>
              
                <div role="status" className="flex w-24 justify-between animate-pulse">
                    <div className="h-[15px] w-[30px] bg-yellow-500 rounded-xl"></div>
                    <div className="h-[15px] w-[30px] bg-red-500 rounded-xl"></div>
               </div>
           </div>
            ))
           }
        </div>
    )
}