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
import { StyledTableCell, StyledTableRow } from "./tableStyle";

import SelectComponent from "../select";

const rows = [
  {
    id: "23426",
    product_name: "Home Appliances",
    product_img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
    user: "John Doe",
    vendor: "Udacity",
    rating: 5,
    date: "3 June 2022",
  },
  {
    id: "23427",
    product_name: "Home Appliances",
    product_img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
    user: "John Doe",
    vendor: "Udacity",
    rating: 4,
    date: "3 June 2022",
  },
  {
    id: "23428",
    product_name: "Home Appliances",
    product_img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
    user: "John Doe",
    vendor: "Udacity",
    rating: 4,
    date: "3 June 2022",
  },
  {
    id: "23429",
    product_name: "Home Appliances",
    product_img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
    user: "John Doe",
    vendor: "Udacity",
    rating: 3,
    date: "3 June 2022",
  },
  {
    id: "23430",
    product_name: "Home Appliances",
    product_img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
    user: "John Doe",
    vendor: "Udacity",
    rating: 5,
    date: "3 June 2022",
  },
];

const headCells = [
  { id: "id", label: "ID" },
  { id: "product_img", label: "Product Image" },
  { id: "product_name", label: "Product Name" },
  { id: "user", label: "User" },
  { id: "vendor", label: "Vendor" },
  { id: "rating", label: "Rating" },
  { id: "date", label: "Date Created" },
  { id: "action", label: "Action", disableSorting: true },
];

export const AllReviewsTable = () => {
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
      : 5;

  const handleSearch = (event) => {
    let target = event.target;
    setFilterFn({
      fn: (items) => {
        if (target.value === "") return items;
        else
          return items.filter(
    
            (item) =>
              item.id.includes(target.value) ||
              item.product_name.toLowerCase().includes(target.value) ||
              item.user.toLowerCase().includes(target.value) ||
              item.vendor.includes(target.value) ||
              item.rating.toLowerCase().includes(target.value)||
              item.date.toLowerCase().includes(target.value)
          );
      },
    });
  };

  const CategoryDropdownData = {
    title : "Info",
    label : "Info",
    data : [{
        title : "Edit",
        value : "10", // option id
        url : "#"
    },{
      title : "Delete",
      value : "10", // option id
      url : "#"
  }]
  }

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
                      <img src={item.product_img} alt="" className="image" />
                    </div>
                  </StyledTableCell>
                  <StyledTableCell className="tableCell">
                    {item.product_name}
                  </StyledTableCell>
                  <StyledTableCell className="tableCell">
                    {item.user}
                  </StyledTableCell>
                  <StyledTableCell className="tableCell">
                    {item.vendor}
                  </StyledTableCell>
                  <StyledTableCell className="tableCell">
                      {item.rating} / 5
                  </StyledTableCell>
                  <StyledTableCell className="tableCell">
                    {item.date}
                  </StyledTableCell>
                  <StyledTableCell className="tableCell">
                    <SelectComponent content={CategoryDropdownData}></SelectComponent>
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
                <StyledTableCell colSpan={5} />
                <TblPagination />
              </StyledTableRow>
            </TableFooter>
          </Table>
        </TblContainer>
      </Box>
    </>
  );
};
