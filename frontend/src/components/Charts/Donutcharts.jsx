import {
  PieChart,
  Pie,
  Cell,
} from "recharts";

const COLORS = ["#f6703bff", "#535c6eff"]; 

export default function DonutChart({ title, value, total, label}) {
  const data = [
    { name: label, value },
    { name: "Remaining", value: Math.max(total - value, 0) },
  ];
  const percentage = total > 0 ? Math.round((value / total) * 100) : 0;
  return (
    <div className={`relative  flex flex-col items-center justify-center m-2 bg-[rgb(0,0,0)]`}>
      <h1 className="text-white text-lg mt-4 mb-12">{title}</h1>
        <PieChart width={200} height={200}>
         <Pie
        data={data}
        cx="50%"
        cy="50%"
        startAngle={180}
        endAngle={0}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        stroke="none"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${entry.name}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      </PieChart>
      <div className="mt-0 absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="text-white text-xl font-bold">{percentage}%</h1>
      </div>
    </div>
  );
}
