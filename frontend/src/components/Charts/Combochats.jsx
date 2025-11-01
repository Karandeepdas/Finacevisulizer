
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function ComboChartHero({ chartData,className }) {
 
  const dataLength = chartData.length;
  const maxBarSize = 40;
  const minBarSize = 15;
  const barSize = Math.max(
    minBarSize,
    Math.min(maxBarSize, Math.floor(400 / dataLength))
  );
  const maxGap = "20%";
  const minGap = "1%";
  const barCategoryGap =
    dataLength <= 1
      ? maxGap
      : `${Math.max(1, Math.floor(100 / dataLength))}%`;

  return (
   
      <div className={`${className} bg-[rgb(0,0,0)] shadow-lg rounded-xl p-4`}>
        <h2 className="text-lg font-semibold mb-2 text-white">Monthly Expenses & Items</h2>
        <div className="w-full h-72">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              data={chartData}
              barSize={barSize}
              barCategoryGap={barCategoryGap}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis
                yAxisId="left"
                label={{ value: "Expenses ($)", angle: -90, position: "insideLeft" }}
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                label={{ value: "Items", angle: 90, position: "insideRight" }}
              />
              <Tooltip />
              <Legend />
              <Bar yAxisId="left" dataKey="expenses" fill="#3b82f6" />
              <Line yAxisId="right" type="monotone" dataKey="items" stroke="#f59e0b" strokeWidth={2.5} />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
  );
}
