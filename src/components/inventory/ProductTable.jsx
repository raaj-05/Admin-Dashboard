import React, { useState } from "react";
import {
  Paper,
  Box,
  Typography,
  IconButton,
  Tooltip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Divider,
  TablePagination,
} from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import ProductCell from "./ProductCell";
import StatusChip from "../dashbord/StatusChip";
import data from "./data";

const headStyle = {
  bgcolor: "#F8FAFC",
  color: "#64748B",
  fontWeight: 700,
  fontSize: 12,
  whiteSpace: "nowrap",
  py: 1.8,
};

export default function ProductTable() {
  const [page, setPage] = useState(0);
  const rowsPerPage = 6;
  const rows = data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <Paper
      elevation={0}
      sx={{
        mt: 3,
        border: "1px solid #E5E7EB",
        borderRadius: 3,
        overflow: "hidden",
        width: "100%",
      }}
    >
      <Box
        sx={{
          px: 3,
          py: 2,
          ml: 2, // Left margin (16px)
        }}
      >
        <Typography
          sx={{
            fontSize: 28,
            fontWeight: 800,
            color: "#111827",
          }}
        >
          Product Catalog
        </Typography>

        <Typography
          sx={{
            fontSize: 14,
            color: "#6B7280",
            mt: 0.5,
          }}
        >
          {data.length} Products Available
        </Typography>
      </Box>

      <Divider />

      <TableContainer sx={{ overflowX: "auto" }}>
        <Table sx={{ minWidth: 1180 }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ ...headStyle, minWidth: 280 }}>
                PRODUCT
              </TableCell>
              <TableCell sx={{ ...headStyle, minWidth: 120 }}>
                CATEGORY
              </TableCell>
              <TableCell sx={{ ...headStyle, minWidth: 130 }}>
                WAREHOUSE
              </TableCell>
              <TableCell align="center" sx={{ ...headStyle, minWidth: 90 }}>
                AVAILABLE
              </TableCell>
              <TableCell align="center" sx={{ ...headStyle, minWidth: 90 }}>
                RESERVED
              </TableCell>
              <TableCell align="right" sx={{ ...headStyle, minWidth: 110 }}>
                UNIT PRICE
              </TableCell>
              <TableCell align="right" sx={{ ...headStyle, minWidth: 120 }}>
                STOCK VALUE
              </TableCell>
              <TableCell align="center" sx={{ ...headStyle, minWidth: 120 }}>
                STATUS
              </TableCell>
              <TableCell sx={{ ...headStyle, minWidth: 110 }}>
                UPDATED
              </TableCell>
              <TableCell align="center" sx={{ ...headStyle, minWidth: 150 }}>
                ACTIONS
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((item) => (
              <TableRow
                key={item.id}
                hover
                sx={{
                  "&:hover": { bgcolor: "#F9FAFB" },
                  "& td": { py: 2, borderBottom: "1px solid #F1F5F9" },
                }}
              >
                <TableCell>
                  <ProductCell
                    icon={item.icon}
                    iconColor={item.iconColor}
                    name={item.name}
                    sku={item.sku}
                  />
                </TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>{item.warehouse}</TableCell>
                <TableCell align="center">{item.available}</TableCell>
                <TableCell align="center">{item.reserved}</TableCell>
                <TableCell align="right">
                  ₹{item.unitPrice.toLocaleString()}
                </TableCell>
                <TableCell align="right">
                  ₹{item.stockValue.toLocaleString()}
                </TableCell>
                <TableCell align="center">
                  <StatusChip status={item.status} />
                </TableCell>
                <TableCell>{item.updated}</TableCell>
                <TableCell align="center">
                  <Tooltip title="View">
                    <IconButton size="small">
                      <VisibilityOutlinedIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Edit">
                    <IconButton size="small">
                      <EditOutlinedIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete">
                    <IconButton size="small" color="error">
                      <DeleteOutlineOutlinedIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="More">
                    <IconButton size="small">
                      <MoreVertOutlinedIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box
        px={3}
        py={2}
        display="flex"
        flexWrap="wrap"
        gap={2}
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography fontSize={14} color="#6B7280">
          Showing {page * rowsPerPage + 1}-
          {Math.min((page + 1) * rowsPerPage, data.length)} of {data.length}{" "}
          products
        </Typography>
        <TablePagination
          component="div"
          count={data.length}
          page={page}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[]}
          onPageChange={(_, p) => setPage(p)}
          sx={{ ".MuiTablePagination-toolbar": { px: 0, minHeight: 40 } }}
        />
      </Box>
    </Paper>
  );
}
