import { Box, Grid } from '@mui/material'
import React from 'react'
import InventoryMovementChart from './InventoryMovementChart'
import StockChart from './StockChart'
import WarehouseDistribution from './WarehouseDistribution'
import RecentActivities from './RecentActivities'

const DashboardContent = () => {
  return (
   <Grid container spacing={3}>
  <Grid size={{ xs: 12, lg: 8 }}>
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      <InventoryMovementChart />
      <StockChart />
    </Box>
  </Grid>

  <Grid size={{ xs: 12, lg: 4 }}>
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      <WarehouseDistribution />
      <RecentActivities />
    </Box>
  </Grid>
</Grid>
  )
}

export default DashboardContent