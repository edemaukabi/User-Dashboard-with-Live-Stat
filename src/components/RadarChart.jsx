import React from "react";
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis } from "recharts";
import { productSales } from "../resources/data";



const RadarChartTemplate = () => {
  return (
    <div className="flex flex-col w-fit ml-0 bg-white mt-6 pl-0 rounded-lg">
     <p className="ml-4 mt-4 text-xl text-gray-500">Top Selling Categories</p>
      <RadarChart outerRadius={90} width={500} height={250} data={productSales} cx={200} axisLine={false}>
        <PolarGrid />
        <PolarAngleAxis dataKey="name" style={{
              fontSize: "1rem",
              fontFamily: "Times New Roman",
            }} />
        <PolarRadiusAxis angle={30} domain={[0, 150]} style={{
              fontSize: "1rem",
              fontFamily: "Times New Roman",
            }}/>
        <Radar
          name="Sold"
          dataKey="sales"
          stroke="#8884d8"
          fill="#adadf04d"
          fillOpacity={0.6}
        />
        <Radar
          name="Cost"
          dataKey="cost"
          stroke="#e46639cc"
          fill="#e7c3dd66"
          fillOpacity={0.6}
        />
        margin="0 0 0 0"
      </RadarChart>
    </div>
  );
};

export default RadarChartTemplate;
