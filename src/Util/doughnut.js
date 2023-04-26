// import "./styles.css";
import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Nigeria", value: 50 },
  { name: "USA", value: 24 },
  { name: "Netherlands", value: 24 },
  { name: "Andorra", value: 24 },
  { name: "Others", value: 24 }

];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

 function D() {
  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={120}
        cy={200}
        innerRadius={50}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      
    </PieChart>
  );
}

export default D;
