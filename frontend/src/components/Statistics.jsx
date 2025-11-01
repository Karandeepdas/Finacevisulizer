import Statisticscard from "./StatisticsCard"
import ComboChartHero from "./Charts/Combochats"
import DonutChart from "./Charts/Donutcharts";
import Loader from "./Loading";
import { useContext } from "react";
import { Listcontext } from "../Layout";


const months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
export default function Statistics(){

const {data,loading}=useContext(Listcontext);
const chartData=Object.values(data.reduce((acc,item)=>{
     const daystr=new Date(item.date);
     const month=months[daystr.getMonth()];
      if(!acc[month]){
        acc[month]={month:month,expenses:0};
      }
      acc[month].expenses+=item.price;
      if(!acc[month][item.title]){
        acc[month][item.title]=0;
      }
      acc[month][item.title]+=1;
      return acc;
},{})).map((obj)=>{
  const newObj={
      "month":obj.month,
      "expenses":obj.expenses,
      "items":Object.keys(obj).length-2
  }
  return newObj;
})

const totalExpenses =data.reduce((acc,item)=>acc+item.price,0);
const spentExpenses = totalExpenses/3;
const alitems=new Set(data.map((item)=>item.title)).size;
const totalitems=data.length;
const upiitems=totalitems/4;
 
    return (
       (loading?<Loader/>:
        <div className="grid grid-cols-6  gap-8 p-4 ">
        <Statisticscard className="col-span-2" title="Expanses" total={totalExpenses} subfirst="900" subsecond="15"/>
        <Statisticscard className="col-span-2" title="Items" total={alitems} subfirst="28" subsecond="42"/>
        <Statisticscard className="col-span-2" title="Transactions" total={totalitems} subfirst="70" subsecond="50"/>
        <ComboChartHero className="col-span-3" chartData={chartData}/>
        <div className="bg-[rgb(0,0,0)] shadow-lg rounded-xl flex justify-center col-span-3 grid grid-cols-2 p-4 gap-8">
        {/* <h1 className="text-white text-xl">Donut charts of Expanses and items</h1> */}
        <DonutChart className="col-span-1"  value={spentExpenses} total={totalExpenses} label="Expanse" title="Expanses"/>
        <DonutChart className="col-span-1"  value={upiitems} total={totalitems} label="Expanse" title="Items"/>
       </div>
        </div>
       )
    )
}