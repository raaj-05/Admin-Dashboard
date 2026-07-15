import React from "react";
import { Box } from "@mui/material";
import Sidebar from "./Sidebar";
import Header from "./Header";

const DashboardLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1 }}>
        <Header />
        <Box
          sx={{
            pt: "72px",
            
            backgroundColor: "#F8FAFC",
            minHeight: "100vh",
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
