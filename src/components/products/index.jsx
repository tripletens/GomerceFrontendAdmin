import "./index.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
// import TableCell, { tableCellClasses } from "@mui/material/TableCell";
// import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Button,
  ButtonGroup,
  TableFooter,
  TextField,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box, Stack } from "@mui/system";
import { useState } from "react";
import useTable from "./useTable";
import styled from "@emotion/styled";
import { TableCell, tableCellClasses, TableRow } from "@mui/material";
// import { StyledTableCell, StyledTableRow } from "./tableStyle";

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": { backgroundColor: theme.palette.action.hover },
  // hide last border
  "&:last-child td, &:last-child th": { border: 0 },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const rows = [
  {
    id: "1143155",
    name: "Acer Nitro 5",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    customer: "John Smith",
    date: "1 March",
    amount: "785",
    method: "Cash on Delivery",
    status: "Approved",
  },
  {
    id: "2235235",
    name: "Playstation 5",
    img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
    customer: "Michael Doe",
    date: "1 March",
    amount: "900",
    method: "Online Payment",
    status: "Delivered",
  },
  {
    id: "2342353",
    name: "Redragon S101",
    img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
    customer: "John Smith",
    date: "1 March",
    amount: "35",
    method: "Cash on Delivery",
    status: "Pending",
  },
  {
    id: "2357741",
    name: "Razer Blade 15",
    img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
    customer: "Jane Smith",
    date: "1 March",
    amount: "920",
    method: "Online",
    status: "Approved",
  },
  {
    id: "2342355",
    name: "ASUS ROG Strix",
    img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
    customer: "Harold Carol",
    date: "1 March",
    amount: "2000",
    method: "Online",
    status: "Delivered",
  },
  {
    id: "2342359",
    name: "ASUS ROG Strix",
    img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
    customer: "Harold Carol",
    date: "1 March",
    amount: "2000",
    method: "Online",
    status: "Pending",
  },
];

const headCells = [
  { id: "id", label: "ID" },
  { id: "item", label: "Item" },
  { id: "name", label: "Name" },
  { id: "customer", label: "Customer" },
  { id: "itemCount", label: "No. of Items" },
  { id: "amount", label: "Price" },
  { id: "method", label: "Payment Method" },
  { id: "status", label: "Status" },
  { id: "date", label: "Date" },
  { id: "action", label: "Action", disableSorting: true },
];

export const AllProducts = () => {
  // const [page, setPage] = useState(0);
  // const [rowsPerPage, setRowsPerPage] = useState(5);
  // const [lastPage, setLastPage] = useState(0);
  const [records, setRecords] = useState(rows);
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });
  const {
    TblContainer,
    TblHead,
    TblPagination,
    recordsAfterPagingAndSorting,
    page,
    rowsPerPage,
  } = useTable(records, headCells, filterFn);

  const emptyRows =
    page > 0
      ? Math.max(
          0,
          (1 + page) * rowsPerPage - recordsAfterPagingAndSorting().length
        )
      : 0;

  const handleSearch = (event) => {
    let target = event.target;
    setFilterFn({
      fn: (items) => {
        if (target.value === "") return items;
        else
          return items.filter(
            (item) =>
              item.id.includes(target.value) ||
              item.name.toLowerCase().includes(target.value) ||
              item.customer.toLowerCase().includes(target.value) ||
              item.amount.includes(target.value) ||
              item.status.toLowerCase().includes(target.value)
          );
      },
    });
  };

  return (
    <>
      <Box
        component={Paper}
        sx={{
          padding: 2,
          margin: 5,
        }}
      >
        <Box>
          <Stack
            direction="row"
            justifyContent="end"
            spacing={0.5}
            sx={{
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <Typography>Search</Typography>
            <TextField
              placeholder="Search"
              size="small"
              onChange={handleSearch}
            />
          </Stack>
        </Box>
        <TblContainer>
          <Table aria-label="simple table">
            <TblHead />
            <TableBody>
              {recordsAfterPagingAndSorting().map((item) => (
                <StyledTableRow key={item.id}>
                  <StyledTableCell>{item.id}</StyledTableCell>
                  <StyledTableCell>
                    <div className="cellWrapper">
                      <img src={item.img} alt="" className="image" />
                    </div>
                  </StyledTableCell>
                  <StyledTableCell className="tableCell">
                    {item.name}
                  </StyledTableCell>
                  <StyledTableCell className="tableCell">
                    {item.customer}
                  </StyledTableCell>
                  <StyledTableCell className="tableCell"></StyledTableCell>
                  <StyledTableCell className="tableCell">
                    ${item.amount}
                  </StyledTableCell>
                  <StyledTableCell className="tableCell">
                    {item.method}
                  </StyledTableCell>
                  <StyledTableCell className="tableCell">
                    <span className={`status ${item.status.toLowerCase()}`}>
                      {item.status}
                    </span>
                  </StyledTableCell>
                  <StyledTableCell className="tableCell">
                    {item.date}
                  </StyledTableCell>
                  <StyledTableCell className="tableCell">
                    <ButtonGroup
                      size="small"
                      variant="outlined"
                      aria-label="outlined button group"
                    >
                      <Button sx={{ borderRadius: 15 }}>Info</Button>
                      <Button sx={{ borderRadius: 15 }}>
                        <KeyboardArrowDownIcon />
                      </Button>
                    </ButtonGroup>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
              {emptyRows > 0 && (
                <StyledTableRow style={{ height: 35 * emptyRows }}>
                  <StyledTableCell colSpan={12} />
                </StyledTableRow>
              )}
            </TableBody>
            <TableFooter>
              <StyledTableRow>
                <StyledTableCell colSpan={6} />
                <TblPagination />
              </StyledTableRow>
            </TableFooter>
          </Table>
        </TblContainer>
      </Box>
    </>
  );
};
