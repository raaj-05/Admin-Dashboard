import React from 'react'
import StockChart from './StockChart';
import RecentActivities from './RecentActivities';
import { Grid } from '@mui/material';

const DashboardBottom = () => {
  return (
     <Grid container spacing={3}>
      <Grid size={{ xs: 12, lg: 8 }}>
        <StockChart />
      </Grid>

      <Grid size={{ xs: 12, lg: 4 }}>
        <RecentActivities />
      </Grid>
    </Grid>
  )
}

export default DashboardBottom