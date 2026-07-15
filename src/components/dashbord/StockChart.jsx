import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { month: "Dec", stockIn: 42, stockOut: 30 },
  { month: "Jan", stockIn: 48, stockOut: 34 },
  { month: "Feb", stockIn: 44, stockOut: 38 },
  { month: "Mar", stockIn: 56, stockOut: 42 },
  { month: "Apr", stockIn: 52, stockOut: 45 },
  { month: "May", stockIn: 60, stockOut: 50 },
  { month: "Jun", stockIn: 58, stockOut: 47 },
  { month: "Jul", stockIn: 65, stockOut: 53 },
];

const StockChart = () => {
  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: "18px",
        border: "1px solid #E5E7EB",
      }}
    >
      <CardContent>
        <Typography
          sx={{
            fontSize: 18,
            fontWeight: 700,
            color: "#111827",
          }}
        >
          Stock In vs Stock Out
        </Typography>

        <Typography
          sx={{
            fontSize: 12,
            color: "#94A3B8",
            mb: 3,
          }}
        >
          Comparison over last 8 months
        </Typography>

        <ResponsiveContainer width="100%" height={280}>
          <LineChart data={data}>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#EEF2F7"
            />

            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#64748B",
                fontSize: 12,
              }}
            />

            <YAxis hide />

            <Tooltip />

            <Legend
              iconType="circle"
              wrapperStyle={{
                fontSize: "12px",
              }}
            />

            <Line
              type="monotone"
              dataKey="stockIn"
              stroke="#F97316"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
              name="Stock In"
            />

            <Line
              type="monotone"
              dataKey="stockOut"
              stroke="#3B82F6"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
              name="Stock Out"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default StockChart;
