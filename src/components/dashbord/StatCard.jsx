import React from "react";
import { Card, CardContent, Box, Typography } from "@mui/material";

const StatCard = ({
  title,
  value,
  subtitle,
  subtitleColor,
  icon,
  iconColor,
  iconBg,
  topColor,
}) => {
  return (
    <Card
      elevation={0}
      sx={{
        height: "100%",
        minHeight: 220,
        borderRadius: "18px",
        border: "1px solid #ECEFF4",
        borderTop: `4px solid ${topColor}`,
      }}
    >
      <CardContent sx={{ p: 2,height: "100%", }}>
        <Box
          sx={{
            width: 44,
            height: 44,
            borderRadius: "14px",
            backgroundColor: iconBg,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mb:1.2,

            "& svg": {
              color: iconColor,
              fontSize: 28,
            },
          }}
        >
          {icon}
        </Box>

        <Typography
          sx={{
            fontSize: 12,
            fontWeight: 700,
            color: "#94A3B8",
            textTransform: "uppercase",
            letterSpacing: 1,
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            mt: 1,
            fontSize: 34,
            fontWeight: 700,
            color: "#111827",
          }}
        >
          {value}
        </Typography>

        <Typography
          sx={{
            mt: "auto",
            fontSize: 13,
            fontWeight: 600,
            color: subtitleColor,
          }}
        >
          {subtitle}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default StatCard;
