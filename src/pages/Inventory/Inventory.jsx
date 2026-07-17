import React from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import InventoryHeader from "../../components/inventory/InventoryHeader";
import InventoryStats from "../../components/inventory/InventoryStats";
import InventoryFilter from "../../components/inventory/InventoryFilter";
import ProductTable from "../../components/inventory/ProductTable";

function Inventory() {
  return (
    <DashboardLayout>
      <InventoryHeader/>
      <InventoryStats/>
      <InventoryFilter/>
      <ProductTable/>
    </DashboardLayout>
  );
}

export default Inventory;
