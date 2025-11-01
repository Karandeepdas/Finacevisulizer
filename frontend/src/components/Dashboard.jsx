import Infocard from "./Infocard"
import Barchart from "./Barchart"
import Minicard from "./Minicard"
import { useContext} from "react"
import {Listcontext} from './../Layout'
import Loader from "./Loading"
export  default function Dashboard(){

const {data,monthly,loading}=useContext(Listcontext);

const totalexpanse=monthly.reduce((acc,item)=>acc+item.price,0);
const totalitems=monthly.length;
const avgexpanse=Number((totalitems>0?(totalexpanse/totalitems):0).toFixed(2));

const topitems=Object.values(monthly.reduce((acc,item)=>{
    if(!acc[item.title]){
        acc[item.title]={title:item.title,totalprice:0,totalcount:0};
    }
   acc[item.title].totalprice+=item.price;
   acc[item.title].totalcount+=1;

   return acc;
},{}))
   
    return (
   (loading?<Loader/>:
    <div className="p-4 grid grid-cols-3 gap-4">
       <div className="col-span-3 grid grid-cols-4 gap-4">
          <Infocard Title={"Total expenses"} itemno={totalexpanse}/>
          <Infocard Title={"Total items"} itemno={totalitems}/>
          <Infocard Title={"Avg expanses"} itemno={avgexpanse}/>
          <Infocard Title={"Increase"} itemno={avgexpanse}/>
       </div>

       <div className="col-span-2 bg-[rgb(0,0,0)] rounded-2xl shadow">
         <Barchart/>
       </div>
       <div className="col-span-1 bg-[rgb(0,0,0)] rounded-2xl shadow">
         <Minicard data={topitems}/>
       </div>

    </div>)

    )
}