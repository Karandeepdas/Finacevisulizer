import  { useContext } from 'react';
import { Listcontext } from '../Layout';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const data = [
  { month: 'Jan', value: 12 },
  { month: 'Feb', value: 19 },
  { month: 'Mar', value: 14 },
  { month: 'Apr', value: 17 },
  { month: 'May', value: 22 },
  { month: 'Jun', value: 20 },
];



export default function Barchart() {
  const {monthly}=useContext(Listcontext);
  
  const yeardata=Object.values(monthly.reduce((acc,item)=>{
    const dstr=new Date(item.date);
    const dateno=dstr.getDate();
    const week=Math.ceil(dateno/7);
    acc[`week${week}`].value+=item.price;
    return acc;
  },{
    week1:{week:"First",value:0},
    week2:{week:"Second",value:0},
    week3:{week:"Third",value:0},
    week4:{week:"Fourth",value:0},
    week5:{week:"Five",value:0}
  }))

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-lg font-semibold mb-4 text-white">Week wise Expanses</h2>
      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={yeardata}>
            <defs>
           
              <linearGradient id="fadeGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity={0.6} />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid stroke="#4B5563" vertical={false} />
            <XAxis dataKey="week" tick={{ fill: '#6c6d6fff' }} />
            <YAxis tick={{ fill: '#6c6d6fff' }} />
            <Tooltip />

            <Area
              type="monotone"
              dataKey="value"
              stroke="#3B82F6"       
              strokeWidth={2}
              fill="url(#fadeGradient)" 
              dot={{ r: 4, fill: '#3B82F6' }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
