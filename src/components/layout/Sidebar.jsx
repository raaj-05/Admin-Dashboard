import React, { useState } from "react";
import {
  Drawer,
  Toolbar,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import GroupsIcon from "@mui/icons-material/Groups";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SettingsIcon from "@mui/icons-material/Settings";
import FolderSpecialIcon from "@mui/icons-material/FolderSpecial";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import logo from "../../assets/AvinashLogo.png";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [selectedMenu, setSelectedMenu] = useState("Dashboard");
  const navigate = useNavigate();
  const location = useLocation();
  const operationMenus = [
    {
      id: 1,
      title: "Dashboard",
      path: "/dashboard",
      icon: <DashboardIcon />,
    },
    {
      id: 2,
      title: "Inventory",
      path: "/inventory",
      icon: <Inventory2Icon />,
    },
    {
      id: 3,
      title: "Warehouses",
      path: "/warehouses",
      icon: <WarehouseIcon />,
    },
    {
      id: 4,
      title: "Projects",
      path: "/projects",
      icon: <FolderSpecialIcon />,
    },
    {
      id: 5,
      title: "Employees",
      path: "/employees",
      icon: <GroupsIcon />,
    },
    {
      id: 6,
      title: "Dispatch",
      path: "/dispatch",
      icon: <LocalShippingIcon />,
    },
    {
      id: 7,
      title: "Purchase Orders",
      path: "/purchase-orders",
      icon: <ReceiptLongIcon />,
    },
  ];

  const insightMenus = [
    {
      id: 1,
      title: "Reports",
      path: "/reports",
      icon: <AssessmentIcon />,
    },
    {
      id: 2,
      title: "Settings",
      path: "/settings",
      icon: <SettingsIcon />,
    },
  ];
  const menuStyle = (path) => ({
    position: "relative",
    mx: 1,
    my: 0.5,
    px: 2,
    height: 50,
    borderRadius: "12px",

    "& .MuiListItemIcon-root": {
      minWidth: 38,
      color: location.pathname === path ? "#FFFFFF" : "#AEB8C5",
    },

    "& .MuiTypography-root": {
      color: location.pathname === path ? "#FFFFFF" : "#AEB8C5",
      fontWeight: location.pathname === path ? 600 : 500,
      fontSize: "16px",
    },

    ...(location.pathname === path && {
      "&::before": {
        content: '""',
        position: "absolute",
        left: -16,
        top: 4,
        bottom: 4,
        width: 4,
        borderRadius: "0 4px 4px 0",
        background: "#FF4D4F",
      },

      background: `linear-gradient(
      90deg,
      rgba(58,44,56,1) 0%,
      rgba(58,44,56,0.95) 70%,
      rgba(58,44,56,0.3) 90%,
      rgba(58,44,56,0) 100%
    )`,
    }),
  });
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 260,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 260,
          boxSizing: "border-box",
          backgroundColor: "#1F2937",
          color: "#fff",
          border: "none",
        },
      }}
    >
      <Toolbar
        sx={{
          minHeight: "90px !important",
          px: 2,
          borderBottom: "1px solid #313C4E",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={logo}
            alt="Avinash Fire Logo"
            style={{
              width: "48px",
              height: "48px",
              objectFit: "contain",
              marginRight: "12px",
            }}
          />

          <div>
            <Typography
              sx={{
                color: "#fff",
                fontWeight: 700,
                fontSize: 12,
                lineHeight: 1.1,
              }}
            >
              Avinash Fire
            </Typography>

            <Typography
              sx={{
                color: "#fff",
                fontWeight: 700,
                fontSize: 12,
                lineHeight: 1.1,
              }}
            >
              Protection Systems
            </Typography>

            <Typography
              sx={{
                color: "#F59E0B",
                fontWeight: 700,
                fontSize: 10,
                letterSpacing: 1,
                textTransform: "uppercase",
              }}
            >
              Enterprise Safety ERP
            </Typography>
          </div>
        </div>
      </Toolbar>
      <Divider
        sx={{
          borderColor: "#313C4E",
        }}
      />
      <Typography
        sx={{
          px: 3,
          pt: 2,
          pb: 1,
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: 1,
          color: "#7C8797",
        }}
      >
        OPERATIONS
      </Typography>
      <List
        sx={{
          px: 1,
        }}
      >
        {operationMenus.map((item) => (
          <ListItemButton
            key={item.id}
            onClick={() => navigate(item.path)}
            sx={menuStyle(item.path)}
          >
            <ListItemIcon sx={{ color: "#AEB8C5", minWidth: 40 }}>
              {item.icon}
            </ListItemIcon>

            <ListItemText primary={item.title} />
          </ListItemButton>
        ))}
        <Divider />
        <Typography
          sx={{
            px: 3,
            pt: 2,
            pb: 1,
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: 1,
            color: "#7C8797",
          }}
        >
          INSIGHTS
        </Typography>
        <List>
          {insightMenus.map((item) => (
            <ListItemButton
              key={item.id}
              onClick={() => navigate(item.path)}
              sx={menuStyle(item.path)}
            >
              <ListItemIcon sx={{ color: "#AEB8C5", minWidth: 40 }}>
                {item.icon}
              </ListItemIcon>

              <ListItemText primary={item.title} />
            </ListItemButton>
          ))}
        </List>
      </List>
    </Drawer>
  );
};

export default Sidebar;
