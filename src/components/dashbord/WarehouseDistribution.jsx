import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const WarehouseDistribution = () => {
  const data = [
    { name: "Lucknow Central", value: 34, color: "#EF4444" },
    { name: "Kanpur Hub", value: 26, color: "#F97316" },
    { name: "Noida Depot", value: 22, color: "#2563EB" },
    { name: "Varanasi Store", value: 18, color: "#22C55E" },
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
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: 18,
          }}
        >
          Warehouse Distribution
        </Typography>

        <Typography
          sx={{
            color: "#94A3B8",
            fontSize: 12,
            mb: 3,
          }}
        >
          Share of total stock held
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <ResponsiveContainer width={170} height={170}>
            <PieChart>
              <Pie
                data={data}
                innerRadius={45}
                outerRadius={65}
                dataKey="value"
              >
                {data.map((item) => (
                  <Cell key={item.name} fill={item.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          <Box>
            {data.map((item) => (
              <Box
                key={item.name}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 1,
                }}
              >
                <Box
                  sx={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    bgcolor: item.color,
                    mr: 1,
                  }}
                />

                <Typography
                  sx={{
                    flex: 1,
                    fontSize: 13,
                  }}
                >
                  {item.name}
                </Typography>

                <Typography
                  sx={{
                    fontWeight: 700,
                  }}
                >
                  {item.value}%
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default WarehouseDistribution;
