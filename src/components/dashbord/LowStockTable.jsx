import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Button,
} from "@mui/material";

import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

import FireExtinguisherIcon from "@mui/icons-material/FireExtinguisher";

import ProductCell from "./ProductCell";
import StatusChip from "./StatusChip";

const rows = [
  {
    id: 1,
    name: "ABC Fire Extinguisher 4Kg",
    sku: "AFP-ABC-001",
    warehouse: "Lucknow Central",
    available: 42,
    minimum: 50,
    status: "Low Stock",
  },

  {
    id: 2,
    name: "CO₂ Fire Extinguisher",
    sku: "AFP-CO2-001",
    warehouse: "Kanpur Hub",
    available: 6,
    minimum: 20,
    status: "Low Stock",
  },

  {
    id: 3,
    name: "Fire Hose Reel",
    sku: "AFP-HOSE-001",
    warehouse: "Noida Depot",
    available: 0,
    minimum: 15,
    status: "Out of Stock",
  },

  {
    id: 4,
    name: "Smoke Detector",
    sku: "AFP-SMOKE-001",
    warehouse: "Varanasi Store",
    available: 34,
    minimum: 30,
    status: "In Stock",
  },

  {
    id: 5,
    name: "Fire Alarm Panel",
    sku: "AFP-PANEL-001",
    warehouse: "Lucknow Central",
    available: 2,
    minimum: 10,
    status: "Out of Stock",
  },

  {
    id: 6,
    name: "Hydrant Valve",
    sku: "AFP-HV-001",
    warehouse: "Kanpur Hub",
    available: 15,
    minimum: 25,
    status: "Low Stock",
  },
];

const LowStockTable = () => {
  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: "18px",
        border: "1px solid #E5E7EB",
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: 3,
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: 18,
                fontWeight: 700,
              }}
            >
              Low Stock Alerts
            </Typography>

            <Typography
              sx={{
                fontSize: 12,
                color: "#94A3B8",
              }}
            >
              Items requiring replenishment across all warehouses
            </Typography>
          </Box>

          <Chip
            label="18 Items Flagged"
            size="small"
            sx={{
              bgcolor: "#EEF2FF",
              color: "#475569",
            }}
          />
        </Box>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>PRODUCT</TableCell>

                <TableCell>WAREHOUSE</TableCell>

                <TableCell>AVAILABLE QTY</TableCell>

                <TableCell>MINIMUM QTY</TableCell>

                <TableCell>STATUS</TableCell>

                <TableCell align="center">ACTION</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {rows.map((item) => (
                <TableRow hover key={item.id}>
                  <TableCell>
                    <ProductCell
                      icon={<FireExtinguisherIcon fontSize="small" />}
                      name={item.name}
                      sku={item.sku}
                    />
                  </TableCell>

                  <TableCell>{item.warehouse}</TableCell>

                  <TableCell>{item.available} units</TableCell>

                  <TableCell>{item.minimum} units</TableCell>

                  <TableCell>
                    <StatusChip status={item.status} />
                  </TableCell>

                  <TableCell align="center">
                    <Button
                      startIcon={<VisibilityOutlinedIcon />}
                      variant="outlined"
                      size="small"
                      sx={{
                        borderRadius: "10px",
                        textTransform: "none",
                      }}
                    >
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default LowStockTable;
