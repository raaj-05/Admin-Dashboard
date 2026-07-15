import React from 'react'
import { Chip } from "@mui/material";

const colors = {
  "In Stock": {
    bg: "#DCFCE7",
    color: "#16A34A",
  },

  "Low Stock": {
    bg: "#FEF3C7",
    color: "#D97706",
  },

  "Out of Stock": {
    bg: "#FEE2E2",
    color: "#DC2626",
  },
};

const StatusChip = ({status}) => {
  return (
     <Chip
      label={status}
      size="small"
      sx={{
        bgcolor: colors[status].bg,
        color: colors[status].color,
        fontWeight: 600,
        borderRadius: "20px",
      }}
    />
  )
}

export default StatusChip