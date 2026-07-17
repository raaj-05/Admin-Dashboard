import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  InputAdornment,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import UploadOutlinedIcon from "@mui/icons-material/UploadOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

const InventoryHeader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mb: 3,
      }}
    >
      <Box>
        <Typography
          sx={{
            fontSize: 30,
            fontWeight: 700,
            color: "#111827",
            lineHeight: 1.2,
          }}
        >
          Inventory Management
        </Typography>

        <Typography
          sx={{
            mt: 0.5,
            fontSize: 12,
            color: "#94A3B8",
            fontWeight: 500,
          }}
        >
          Manage fire safety products, warehouse stock and inventory
          availability.
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <TextField
          placeholder="Search products..."
          size="small"
          sx={{
            width: 250,

            "& .MuiOutlinedInput-root": {
              height: 40,
              borderRadius: "14px",
              backgroundColor: "#FFFFFF",

              "& fieldset": {
                borderColor: "#E5E7EB",
              },

              "&:hover fieldset": {
                borderColor: "#D1D5DB",
              },

              "&.Mui-focused fieldset": {
                borderColor: "#EF4444",
              },
            },

            "& input": {
              fontSize: 15,
            },
          }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "#9CA3AF" }} />
                </InputAdornment>
              ),
            },
          }}
        />

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{
            height: 40,
            px: 3,
            borderRadius: "14px",
            textTransform: "none",
            backgroundColor: "#EF4444",
            fontWeight: 600,
            fontSize: 15,
            boxShadow: "none",

            "&:hover": {
              backgroundColor: "#DC2626",
              boxShadow: "none",
            },
          }}
        >
          Add Product
        </Button>

        <Button
          variant="outlined"
          startIcon={<UploadOutlinedIcon />}
          sx={{
            height: 40,
            px: 3,
            borderRadius: "14px",
            textTransform: "none",
            fontWeight: 600,
            fontSize: 15,
            color: "#475569",
            borderColor: "#E5E7EB",

            "&:hover": {
              borderColor: "#CBD5E1",
              backgroundColor: "#F8FAFC",
            },
          }}
        >
          Import CSV
        </Button>
        <Button
          variant="outlined"
          startIcon={<FileDownloadOutlinedIcon />}
          sx={{
            height: 40,
            px: 3,
            borderRadius: "14px",
            textTransform: "none",
            fontWeight: 600,
            fontSize: 15,
            color: "#475569",
            borderColor: "#E5E7EB",

            "&:hover": {
              borderColor: "#CBD5E1",
              backgroundColor: "#F8FAFC",
            },
          }}
        >
          Export Inventory
        </Button>
      </Box>
    </Box>
  );
};

export default InventoryHeader;
