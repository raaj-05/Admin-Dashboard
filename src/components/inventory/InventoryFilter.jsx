import React from "react";
import {
  Box,
  TextField,
  MenuItem,
  Button,
  InputAdornment,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import WarehouseOutlinedIcon from "@mui/icons-material/WarehouseOutlined";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import SortOutlinedIcon from "@mui/icons-material/SortOutlined";
import RestartAltRoundedIcon from "@mui/icons-material/RestartAltRounded";

const InventoryFilter = () => {
  const selectStyle = {
    width: 215,

    "& .MuiOutlinedInput-root": {
      height: 48,
      borderRadius: "14px",
      backgroundColor: "#fff",

      "& fieldset": {
        borderColor: "#E5E7EB",
      },

      "&:hover fieldset": {
        borderColor: "#CBD5E1",
      },

      "&.Mui-focused fieldset": {
        borderColor: "#EF4444",
      },
    },

    "& .MuiSelect-select": {
      fontWeight: 500,
      color: "#475569",
    },
  };
  return (
    <Box
      sx={{
        mt: 4,
        p: 3,
        borderRadius: "22px",
        backgroundColor: "#fff",
        border: "1px solid #ECEFF4",
        display: "flex",
        flexWrap: "wrap",
        gap: 2,
      }}
    >
      {/* Search */}

      <TextField
        placeholder="Search by Product Name, SKU, Category..."
        sx={{
          width: 430,

          "& .MuiOutlinedInput-root": {
            height: 48,
            borderRadius: "14px",

            "& fieldset": {
              borderColor: "#E5E7EB",
            },

            "&:hover fieldset": {
              borderColor: "#CBD5E1",
            },

            "&.Mui-focused fieldset": {
              borderColor: "#EF4444",
            },
          },
        }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "#94A3B8" }} />
              </InputAdornment>
            ),
          },
        }}
      />

      {/* Category */}

      <TextField select defaultValue="All" sx={selectStyle}>
        <MenuItem value="All">Category: All</MenuItem>
      </TextField>

      {/* Warehouse */}

      <TextField select defaultValue="All" sx={selectStyle}>
        <MenuItem value="All">Warehouse: All</MenuItem>
      </TextField>

      {/* Stock */}

      <TextField select defaultValue="All" sx={selectStyle}>
        <MenuItem value="All">Stock Status: All</MenuItem>
      </TextField>

      {/* Brand */}

      <TextField select defaultValue="All" sx={selectStyle}>
        <MenuItem value="All">Brand: All</MenuItem>
      </TextField>

      {/* Sort */}

      <TextField
        select
        defaultValue="Recent"
        sx={{
          ...selectStyle,
          width: 260,
        }}
      >
        <MenuItem value="Recent">Sort: Recently Updated</MenuItem>
      </TextField>

      {/* Reset */}

      <Button
        variant="outlined"
        startIcon={<RestartAltRoundedIcon />}
        sx={{
          height: 48,
          px: 3,
          borderRadius: "14px",
          textTransform: "none",
          fontWeight: 600,
          fontSize: 15,
          borderColor: "#FCA5A5",
          color: "#EF4444",

          "&:hover": {
            borderColor: "#EF4444",
            backgroundColor: "#FEF2F2",
          },
        }}
      >
        Reset Filters
      </Button>
    </Box>
  );
};

export default InventoryFilter;
