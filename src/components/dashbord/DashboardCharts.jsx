import { Grid } from '@mui/material'
import React from 'react'
import InventoryMovementChart from './InventoryMovementChart'
import WarehouseDistribution from './WarehouseDistribution'

const DashboardCharts = () => {
  return (
   <Grid container spacing={3}>
      <Grid size={{ xs: 12, lg: 8 }}>
        <InventoryMovementChart />
      </Grid>

      <Grid size={{ xs: 12, lg: 4 }}>
        <WarehouseDistribution />
      </Grid>
    </Grid>
  )
}

export default DashboardCharts