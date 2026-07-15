import {
  AppBar,
  Toolbar,
  Box,
  InputBase,
  Typography,
  IconButton,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { Avatar } from "@mui/material";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { Button } from "@mui/material";

const Header = () => {
  const drawerWidth = 260;
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        width: `calc(100% - ${drawerWidth}px)`,
        ml: `${drawerWidth}px`,
        backgroundColor: "#fff",
        color: "#111827",
        borderBottom: "1px solid #E5E7EB",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar
        sx={{
          height: 72,
          display: "flex",
          alignItems: "center",
          px: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: 235,
            height: 46,
            background: "#F3F6FB",
            borderRadius: "12px",
            px: 2,
          }}
        >
          <SearchIcon
            sx={{
              color: "#A0A8B8",
              fontSize: 20,
            }}
          />

          <InputBase
            placeholder="Search products, warehouses, projects, POs..."
            sx={{
              ml: 1,
              flex: 1,
              fontSize: 14,

              "& input::placeholder": {
                opacity: 1,
                color: "#9AA3B2",
              },
            }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            height: 30,
            px: 2,
            ml: 2,
            border: "1px solid #FFD2B5",
            borderRadius: "999px",
            backgroundColor: "#FFF8F4",
            gap: 1,
          }}
        >
          <FiberManualRecordIcon
            sx={{
              fontSize: 10,
              color: "#FF7A00",
            }}
          />

          <Typography
            sx={{
              color: "#E85D04",
              fontSize: 12,
              fontWeight: 600,
            }}
          >
            Live • Real-time Safety Monitoring
          </Typography>
        </Box>

        <Box sx={{ flexGrow: 1 }} />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            mr: 2,
          }}
        >
          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 700,
              color: "#111827",
              lineHeight: 1.2,
            }}
          >
            Tuesday, 14 July 2026
          </Typography>

          <Typography
            sx={{
              fontSize: 12,
              color: "#9CA3AF",
              lineHeight: 1.2,
            }}
          >
            Financial Year 2026/27 · Q2
          </Typography>
        </Box>

        <IconButton
          sx={{
            width: 42,
            height: 42,
            border: "1px solid #E5E7EB",
            borderRadius: "12px",
            mr: 2,
          }}
        >
          <NotificationsNoneOutlinedIcon
            sx={{
              color: "#6B7280",
              fontSize: 22,
            }}
          />
        </IconButton>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mr: 2,
          }}
        >
          <Avatar
            sx={{
              bgcolor: "#F97316",
              width: 38,
              height: 38,
              fontSize: 15,
              fontWeight: 700,
              mr: 1,
            }}
          >
            AK
          </Avatar>

          <Box>
            <Typography
              sx={{
                fontSize: 14,
                fontWeight: 600,
                color: "#111827",
                lineHeight: 1.1,
              }}
            >
              Avinash Kumar
            </Typography>

            <Typography
              sx={{
                fontSize: 12,
                color: "#9CA3AF",
                lineHeight: 1.1,
              }}
            >
              Operations Head
            </Typography>
          </Box>
        </Box>

        <Button
          variant="contained"
          startIcon={<FileDownloadOutlinedIcon />}
          sx={{
            backgroundColor: "#EF4444",
            textTransform: "none",
            borderRadius: "12px",
            px: 2.5,
            height: 40,
            fontWeight: 600,

            "&:hover": {
              backgroundColor: "#DC2626",
            },
          }}
        >
          Export Report
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
