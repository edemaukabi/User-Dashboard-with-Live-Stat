import { graphData } from "../resources/data";
import Tracker from "./Tracker";
import {
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
    ResponsiveContainer,
    AreaChart,
    Area,
} from "recharts";

export const AreaChartTemplate = () => {

  return (
    <div className="mb-8 rounded-lg bg-white  pt-2 pb-12 px-7 w-full h-[40vh]">
        <Tracker />
      <ResponsiveContainer width="100%" height="80%">
        <AreaChart
          width={"100%"}
          height={"100%"}
          data={graphData}
          margin={{ top: 0, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#fff" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#3767C7" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#fff" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#896570" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="month"
            allowDataOverflow={true}
            axisLine={false}
            style={{
              fontSize: "1rem",
              fontFamily: "Times New Roman",
            }}
          />
          <CartesianGrid strokeDasharray="5 5" />
          <Tooltip
            style={{
              fontSize: "1rem",
              fontFamily: "Times New Roman",
            }}
            allowEscapeViewBox = {{ x: true, y: true }}
          />
          <Area
            type="monotone"
            dataKey="income"
            stroke="#2116D4"
            fillOpacity={0.8}
            fill="url(#colorUv)"
          />
          <Area
            type="monotone"
            dataKey="expense"
            stroke="#EE4376"
            fillOpacity={0.8}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
