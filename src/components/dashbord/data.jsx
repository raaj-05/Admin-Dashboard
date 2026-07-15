import Inventory2Icon from "@mui/icons-material/Inventory2";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import FolderSpecialIcon from "@mui/icons-material/FolderSpecial";
import GroupsIcon from "@mui/icons-material/Groups";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";

export const statsData = [
  {
    id: 1,
    title: "TOTAL INVENTORY ITEMS",
    value: "12,480",
    subtitle: "+4.2% vs last month",
    subtitleColor: "#16A34A",
    icon: <Inventory2Icon />,
    iconColor: "#2563EB",
    iconBg: "#EEF4FF",
    topColor: "#2563EB",
  },

  {
    id: 2,
    title: "WAREHOUSES",
    value: "08",
    subtitle: "Across 4 cities",
    subtitleColor: "#6B7280",
    icon: <WarehouseIcon />,
    iconColor: "#EA580C",
    iconBg: "#FFF4E5",
    topColor: "#EA580C",
  },

  {
    id: 3,
    title: "ACTIVE PROJECTS",
    value: "246",
    subtitle: "+18 this week",
    subtitleColor: "#16A34A",
    icon: <FolderSpecialIcon />,
    iconColor: "#7C3AED",
    iconBg: "#F5F3FF",
    topColor: "#7C3AED",
  },

  {
    id: 4,
    title: "EMPLOYEES",
    value: "186",
    subtitle: "98% attendance",
    subtitleColor: "#16A34A",
    icon: <GroupsIcon />,
    iconColor: "#0891B2",
    iconBg: "#ECFEFF",
    topColor: "#0891B2",
  },

  {
    id: 5,
    title: "TODAY'S DISPATCH",
    value: "38",
    subtitle: "12 pending",
    subtitleColor: "#D97706",
    icon: <LocalShippingIcon />,
    iconColor: "#DC2626",
    iconBg: "#FEF2F2",
    topColor: "#DC2626",
  },

  {
    id: 6,
    title: "PURCHASE ORDERS",
    value: "54",
    subtitle: "08 awaiting approval",
    subtitleColor: "#DC2626",
    icon: <ReceiptLongIcon />,
    iconColor: "#059669",
    iconBg: "#ECFDF5",
    topColor: "#059669",
  },
];