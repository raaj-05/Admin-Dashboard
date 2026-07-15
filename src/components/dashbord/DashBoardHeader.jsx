import {Box, Typography } from '@mui/material'
import React from 'react'

const DashBoardHeader = () => {
  return (
     <Box
      sx={{
        mb: 3,
      }}
    >
      <Typography
        sx={{
          color: "#EF4444",
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: 1,
          textTransform: "uppercase",
          mb: 0.5,
        }}
      >
        — Command Center
      </Typography>

      <Typography
        sx={{
          fontSize: 28,
          fontWeight: 700,
          color: "#111827",
          lineHeight: 1.2,
        }}
      >
        Good afternoon, Avinash — here's today's safety operations summary
      </Typography>

      <Typography
        sx={{
          mt: 0.5,
          fontSize: 14,
          color: "#6B7280",
        }}
      >
        Consolidated view across Lucknow, Kanpur, Noida & Varanasi facilities
      </Typography>
    </Box>
  )
}

export default DashBoardHeader