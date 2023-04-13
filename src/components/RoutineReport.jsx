import React from "react";
import { graphDataReport } from "../resources/data";
import {
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  Cell,
} from "recharts";

const calcEarning = (data) => {
  let weeklyIncome = 0;
  let weeklyExpense = 0;
  let dailyIncome = 0;
  let dailyExpense = 0;
  data.forEach((item) => {
    weeklyIncome += item.income;
    weeklyExpense += item.expense;
  });
  dailyIncome = Math.round(weeklyIncome / 7);
  dailyExpense = Math.round(weeklyExpense / 7);
  return {
    dailyIncome,
    dailyExpense,
    weeklyIncome,
    weeklyExpense,
  };
};

export const weeklyReport = calcEarning(graphDataReport);

console.log(weeklyReport);

export const RoutineReport = ({
  style,
  graphType,
  title,
  amount,
  data = graphDataReport,
}) => {

  const { themeColor = "blue", strokeColor, textColor, fillColor } = style; 
  const backgroundColor =
    themeColor === "blue"
      ? "bg-gradient-to-r from-cyan-600 to-blue-700"
      : "bg-white";

  return (
    <div
      className={`flex justify-around text-${textColor} w-64 h-80, ${backgroundColor} rounded-lg`}
    >
      <div className="ml-4 mt-2">
        <p className="text-sm">{title}</p>
        <p className="text-Bold text-2xl">${amount}</p>
      </div>
      <div className="w-1/2 overflow-auto min-h-24">
        {graphType === "bar" ? (
        <AreaChart
          width={150}
          height={50}
          data={data}
          margin={{
            top: 10,
            right: 0,
            left: 0,
            bottom: 10,
          }}
        >
          <XAxis dataKey="day" hide />
          <Area type="monotone" dataKey="income" stroke={strokeColor} fill={fillColor} />
        </AreaChart>
        ) : (

        <BarChart width={150} height={50} data={data}>
          <XAxis dataKey="day" hide/>
          <YAxis />
          <Bar dataKey="income" fill={fillColor} />
        </BarChart>
        )}
      </div>
    </div>
  );
};

RoutineReport.defaultProps = {
    style: {
        themeColor: "blue",
        strokeColor: "#fff",
        textColor: "white",
        fillColor: "#8884d8",
    },
};
