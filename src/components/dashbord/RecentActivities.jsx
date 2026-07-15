import React from "react";
import { Card, CardContent, Typography, Box, Avatar } from "@mui/material";

const activities = [
  {
    id: 1,
    title: "Inventory Updated",
    subtitle: "200 ABC Fire Extinguishers added",
    time: "5 min ago",
    color: "#3B82F6",
    initials: "IN",
  },
  {
    id: 2,
    title: "Purchase Order Approved",
    subtitle: "PO #2458 approved by Manager",
    time: "18 min ago",
    color: "#22C55E",
    initials: "PO",
  },
  {
    id: 3,
    title: "Dispatch Completed",
    subtitle: "Order #1042 delivered",
    time: "45 min ago",
    color: "#F97316",
    initials: "DP",
  },
  {
    id: 4,
    title: "New Employee Added",
    subtitle: "Rahul Sharma joined Warehouse",
    time: "1 hr ago",
    color: "#8B5CF6",
    initials: "EM",
  },
  {
    id: 5,
    title: "Low Stock Alert",
    subtitle: "CO₂ Extinguisher below threshold",
    time: "2 hr ago",
    color: "#EF4444",
    initials: "LS",
  },
];

const RecentActivities = () => {
  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: "18px",
        border: "1px solid #E5E7EB",
        height: "100%",
        display: "flex",
      }}
    >
      <CardContent  sx={{
    flex: 1,
  }}>
        <Typography
          sx={{
            fontSize: 18,
            fontWeight: 700,
            color: "#111827",
            mb: 3,
          }}
        >
          Recent Activities
        </Typography>

        {activities.map((item) => (
          <Box
            key={item.id}
            sx={{
              display: "flex",
              alignItems: "center",
              mb: 2.5,
            }}
          >
            <Avatar
              sx={{
                bgcolor: item.color,
                width: 42,
                height: 42,
                fontSize: 14,
                fontWeight: 700,
                mr: 2,
              }}
            >
              {item.initials}
            </Avatar>

            <Box sx={{ flex: 1 }}>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: 14,
                  color: "#111827",
                }}
              >
                {item.title}
              </Typography>

              <Typography
                sx={{
                  fontSize: 12,
                  color: "#64748B",
                }}
              >
                {item.subtitle}
              </Typography>
            </Box>

            <Typography
              sx={{
                fontSize: 11,
                color: "#94A3B8",
                whiteSpace: "nowrap",
              }}
            >
              {item.time}
            </Typography>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
};

export default RecentActivities;
