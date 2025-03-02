import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "فروردین", بازدید: 4000, کاربران: 2400 },
  { name: "اردیبهشت", بازدید: 3000, کاربران: 2210 },
  { name: "خرداد", بازدید: 2000, کاربران: 2290 },
  { name: "تیر", بازدید: 2780, کاربران: 2000 },
  { name: "مرداد", بازدید: 1890, کاربران: 2181 },
  { name: "شهریور", بازدید: 2390, کاربران: 2500 },
];

const pieData = [
  { name: "فعال", value: 400 },
  { name: "غیرفعال", value: 300 },
  { name: "معلق", value: 300 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

const Charts = () => {
  return (
    <div className="grid md:grid-cols-1 gap-6 mt-6">
      {/* نمودار خطی */}
      <div className="bg-white p-6 shadow rounded-lg">
        <h3 className="text-xl font-semibold mb-4">بازدید کاربران</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="بازدید" stroke="#8884d8" strokeWidth={2} />
            <Line type="monotone" dataKey="کاربران" stroke="#82ca9d" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* نمودار دایره‌ای */}
      <div className="bg-white p-6 shadow rounded-lg flex flex-col items-center">
        <h3 className="text-xl font-semibold mb-4">وضعیت کاربران</h3>
        <ResponsiveContainer width="100%" height={300}>
            <PieChart>
                <Pie data={pieData} dataKey="value" cx="50%" cy="50%" outerRadius={80} label>
                    {pieData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Charts;
