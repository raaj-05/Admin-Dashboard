import React from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import DashBoardHeader from "./../../components/dashbord/DashBoardHeader";
import StatsCards from "./../../components/dashbord/StatsCards";
import DashboardCharts from "../../components/dashbord/DashboardCharts";
import { Box } from "@mui/material";
import DashboardBottom from "../../components/dashbord/DashboardBottom";
import LowStockTable from "../../components/dashbord/LowStockTable";
import DashboardContent from "../../components/dashbord/DashboardContent";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <DashBoardHeader />
      <StatsCards />
      <Box sx={{ mt: 3 }}>
        <DashboardContent />
      </Box>

      <Box mt={3}>
        <LowStockTable />
      </Box>
    </DashboardLayout>
  );
};
export default Dashboard;
