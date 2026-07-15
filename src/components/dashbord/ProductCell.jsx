import React from 'react'
import { Avatar, Box, Typography } from "@mui/material";

const ProductCell = ({ icon, name, sku }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Avatar
        sx={{
          width: 34,
          height: 34,
          bgcolor: "#FFF1F2",
          color: "#EF4444",
          fontSize: 18,
          mr: 2,
        }}
      >
        {icon}
      </Avatar>

      <Box>
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: 14,
            color: "#111827",
          }}
        >
          {name}
        </Typography>

        <Typography
          sx={{
            fontSize: 11,
            color: "#94A3B8",
          }}
        >
          SKU : {sku}
        </Typography>
      </Box>
    </Box>
  )
}

export default ProductCell