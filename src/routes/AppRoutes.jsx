import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./../pages/DashBoard/Dashboard";
import Inventory from "./../pages/Inventory/Inventory";
import Projects from "./../pages/Projects/Projects";
import Employees from "./../pages/Employees/Employees";
import Dispatch from "./../pages/Dispatch/Dispatch";
import PurchaseOrder from "./../pages/PurchanseOrder/PurchaseOrder";
import Report from "./../pages/Reports/Report";
import Setting from "./../pages/Settings/Setting";
import Warehouses from './../pages/Warehouese/Warehouses';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/inventory" element={<Inventory />} />
      <Route path="/warehouses" element={<Warehouses />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/employees" element={<Employees />} />
      <Route path="/dispatch" element={<Dispatch />} />
      <Route path="//purchase-orders" element={<PurchaseOrder />} />
      <Route path="/reports" element={<Report />} />
      <Route path="/settings" element={<Setting />} />
    </Routes>
  );
}

export default AppRoutes;
