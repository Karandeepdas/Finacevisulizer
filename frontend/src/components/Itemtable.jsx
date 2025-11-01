import { useState } from "react";
import ReactPaginate from "react-paginate";
import Addcard from "./Popups/Addcard";
import Deletecard from "./Popups/Deletecard";
import { useContext } from "react";
import { Listcontext } from "../Layout";
import Update from "./Popups/Updatecard";
import Loader from "./Loading";
import { Toaster } from 'react-hot-toast';
export default function Itemtable(){
  
  const {data,loading}=useContext(Listcontext);
  const [edt,setEdt]=useState(false);
  const [del,setDel]=useState(false);
  const [edit,setEdit]=useState(false);
  const [delid,setDelid]=useState(0);
  const [obj,setObj]=useState({})
  const [currentpage,setCurrentpage]=useState(1);
  const tablesize=data.length;
  const itemperpage=10;
  const pagesize=Math.ceil(tablesize/itemperpage);
  const indexLast=currentpage*itemperpage;
  const indexfirst=indexLast-itemperpage;
  const currentdata=data.slice(indexfirst,indexLast);

return(
(loading?<Loader/>:
<div className="relative h-[calc(100vh-3.5rem)] overflow-x-auto p-2">
 
    <table className="mt-1  w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-900 uppercase dark:text-gray-400 ">
            <tr className="bg-[rgb(0,0,0)]">
                <th scope="col" className="px-6 py-3">
                    Item Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
                <th scope="col" className="px-6 py-3">
                    Date
                </th>
                <th scope="col" className="px-6 py-3">
                    Mode
                </th>
                <th scope="col" className="px-6 py-3">
                   Action
                </th>
            </tr>
        </thead>
        <tbody>
            {currentdata.map((prd,idx)=>{
              const day=new Date(prd.date).toISOString().split("T")[0];
             
              return(
              <tr  key={idx} className="bg-red dark:bg-gray-800 border-t border-white">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {prd.title}
                </th>
                <td className="whitespace-nowrap px-6 py-4">
                   {prd.price} ₹
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                   {day}
                </td>
                <td className="px-6 py-4">
                    UPI
                </td>
                <td className="flex">
                  <button className="m-2"
                     onClick={()=>{
                        setEdit(true);
                        setObj({
                          title:prd.title,
                          price:prd.price,
                          date:day,
                          _id:prd._id
                        })
                     }}
                  >
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 fill-yellow-700 hover:fill-yellow-900 stroke-none">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                      </svg>
                  </button>
                  <button className="m-2" onClick={()=>{
                         setDel(true);
                         setDelid(prd._id);
                  }
                  }>
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 fill-red-500 stroke-none hover:fill-red-700">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                  </svg>
                  </button>
                </td>
            </tr>
              )
             }
            )}
        </tbody>
    </table>
    <button className="mt-1 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={()=>setEdt(true)}>Add item</button>
    <div className="absolute flex justify-center bottom-2 left-0 right-0 ">
       <ReactPaginate
          previousLabel={'<'}
          nextLabel={'>'}
          breakLabel={'...'}
          pageCount={pagesize}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={(e)=>setCurrentpage(e.selected+1)}
          containerClassName="flex justify-center gap-2 mt-4"

          pageClassName="border rounded"
          pageLinkClassName="block px-3 py-1 text-white hover:bg-gray-500"
 
          previousClassName="border rounded"
          previousLinkClassName="block px-3 py-1 text-white hover:bg-gray-500"
          nextClassName="border rounded"
          nextLinkClassName="block px-3 py-1 text-white hover:bg-gray-500"
          breakClassName="border rounded"
          breakLinkClassName="block px-3 py-1 text-white-700"
          activeClassName="bg-blue-500 text-white"
      />
    </div>
    {del && (
        <Deletecard setvar={setDel} _id={delid}/>
      )}
    {edt && (
        <Addcard setOpen={setEdt}/>
    )}
    {edit &&(
       <Update setEdit={setEdit} Obj={obj}/>
    )}
</div>
  ))
}