import { Grid } from '@mui/material'
import React from 'react'
import StatCard from './StatCard';
import { statsData } from './data.jsx';

const StatsCards = () => {
  return (
    <Grid container spacing={3} >
      {
        statsData.map((item)=>(
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2 }} key={item.id}>
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
        ))
      }
    </Grid>
  )
}

export default StatsCards