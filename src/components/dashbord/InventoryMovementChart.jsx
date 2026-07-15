import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const InventoryMovementChart = () => {
  const data = [
    { month: "Dec", stockIn: 45, stockOut: 34 },
    { month: "Jan", stockIn: 48, stockOut: 38 },
    { month: "Feb", stockIn: 40, stockOut: 42 },
    { month: "Mar", stockIn: 52, stockOut: 45 },
    { month: "Apr", stockIn: 49, stockOut: 48 },
    { month: "May", stockIn: 56, stockOut: 48 },
    { month: "Jun", stockIn: 53, stockOut: 50 },
    { month: "Jul", stockIn: 63, stockOut: 49 },
  ];
  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: "18px",
        border: "1px solid #E5E7EB",
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: 18,
                fontWeight: 700,
                color: "#111827",
              }}
            >
              Monthly Inventory Movement
            </Typography>

            <Typography
              sx={{
                fontSize: 12,
                color: "#94A3B8",
              }}
            >
              Units moved across all warehouses · last 8 months
            </Typography>
          </Box>
        </Box>

        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data} barGap={6}>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#F1F5F9"
            />

            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
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

            <Bar
              dataKey="stockIn"
              name="Stock In"
              fill="#F97316"
              radius={[4, 4, 0, 0]}
              barSize={10}
            />

            <Bar
              dataKey="stockOut"
              name="Stock Out"
              fill="#CBD5E1"
              radius={[4, 4, 0, 0]}
              barSize={10}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default InventoryMovementChart;
