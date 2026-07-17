import React from "react";
import Grid from "@mui/material/Grid";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import CurrencyRupeeRoundedIcon from "@mui/icons-material/CurrencyRupeeRounded";

import StatCard from "../dashbord/StatCard";

const InventoryStats = () => {
  const stats = [
    {
      title: "Total Products",
      value: "1,248",
      subtitle: "+12 new products this week",
      subtitleColor: "#16A34A",
      icon: <Inventory2OutlinedIcon />,
      iconColor: "#2563EB",
      iconBg: "#DBEAFE",
      topColor: "#2563EB",
    },
    {
      title: "Low Stock Items",
      value: "42",
      subtitle: "Below minimum threshold",
      subtitleColor: "#F59E0B",
      icon: <WarningAmberRoundedIcon />,
      iconColor: "#F59E0B",
      iconBg: "#FEF3C7",
      topColor: "#F59E0B",
    },
    {
      title: "Out of Stock",
      value: "8",
      subtitle: "Requires immediate reorder",
      subtitleColor: "#EF4444",
      icon: <CancelOutlinedIcon />,
      iconColor: "#EF4444",
      iconBg: "#FEE2E2",
      topColor: "#EF4444",
    },
    {
      title: "Inventory Value",
      value: "₹1.85 Cr",
      subtitle: "+₹3.2L this month",
      subtitleColor: "#16A34A",
      icon: <CurrencyRupeeRoundedIcon />,
      iconColor: "#10B981",
      iconBg: "#D1FAE5",
      topColor: "#10B981",
    },
  ];
  return (
    <Grid
      container
      spacing={3}
      sx={{
        mt: 1,
        mb: 4,
      }}
    >
      {stats.map((item) => (
        <Grid
          key={item.title}
          size={{
            xs: 12,
            sm: 6,
            lg: 3,
          }}
        >
          <StatCard
            title={item.title}
            value={item.value}
            subtitle={item.subtitle}
            subtitleColor={item.subtitleColor}
            icon={item.icon}
            iconColor={item.iconColor}
            iconBg={item.iconBg}
            topColor={item.topColor}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default InventoryStats;
