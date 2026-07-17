import React from "react";
import { Box, Typography } from "@mui/material";

const ProductCell = ({
  icon: Icon,
  iconColor = "#EF4444",
  name,
  sku,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        minWidth: 260,
      }}
    >
      {/* Product Icon */}
      <Box
        sx={{
          width: 44,
          height: 44,
          borderRadius: "12px",
          backgroundColor: `${iconColor}15`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexShrink: 0,

          "& svg": {
            fontSize: 22,
            color: iconColor,
          },
        }}
      >
        {Icon && <Icon />}
      </Box>

      {/* Product Details */}
      <Box
        sx={{
          overflow: "hidden",
        }}
      >
        <Typography
          sx={{
            fontSize: 14,
            fontWeight: 600,
            color: "#111827",
            lineHeight: 1.3,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {name}
        </Typography>

        <Typography
          sx={{
            mt: 0.5,
            fontSize: 12,
            fontWeight: 500,
            color: "#94A3B8",
            whiteSpace: "nowrap",
          }}
        >
          {sku}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProductCell;