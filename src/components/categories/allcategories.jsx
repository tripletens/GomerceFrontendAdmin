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
    id: "23422",
    name: "Electronics",
    slug: "electronics",
    tags: "home appliances, electronics",
    date: "5 March 2021",
    status: "Active",
  },
  {
    id: "23423",
    name: "Chidren Food",
    slug: "children_food",
    tags: "home, food, children",
    date: "3 March 2022",
    status: "Active",
  },
  {
    id: "23424",
    name: "Farm Equipments",
    slug: "farm_equipments",
    tags: "farm appliances, agrticulture",
    date: "3 April 2022",
    status: "Active",
  },
  {
    id: "23425",
    name: "Gadgets",
    slug: "gadgets",
    tags: "appliances, electronics",
    date: "3 April 2020",
    status: "Active",
  },
  {
    id: "23426",
    name: "Home Appliances",
    slug: "home_appliances",
    tags: "home appliances, electronics",
    date: "3 June 2022",
    status: "Active",
  },
];

const headCells = [
  { id: "id", label: "ID" },
  { id: "name", label: "Name" },
  { id: "slug", label: "Slug" },
  { id: "tags", label: "Tags" },
  { id: "status", label: "Status" },
  { id: "date", label: "Date Created" },
  { id: "action", label: "Action", disableSorting: true },
];

export const AllCategoriesTableOne = () => {
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
              item.name.toLowerCase().includes(target.value) ||
              item.slug.toLowerCase().includes(target.value) ||
              item.tags.includes(target.value) ||
              item.status.toLowerCase().includes(target.value)||
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
                  <StyledTableCell className="tableCell">
                    {item.name}
                  </StyledTableCell>
                  <StyledTableCell className="tableCell">
                    {item.slug}
                  </StyledTableCell>
                  <StyledTableCell className="tableCell">
                    {item.tags}
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
                    {/* <ButtonGroup
                      // size="small"
                      variant="outlined"
                      aria-label="outlined button group"
                      sx = {{ width: "30px" }}
                    >
                      <Button sx={{ borderRadius: 15 }}>Info</Button>
                      <Button sx={{ borderRadius: 15 }}>
                        <KeyboardArrowDownIcon />
                        <SelectComponent content={CategoryDropdownData}></SelectComponent>
                      </Button>
                    </ButtonGroup> */}
                    <SelectComponent content={CategoryDropdownData}></SelectComponent>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
              
            </TableBody>
            <TableFooter>
              <StyledTableRow>
                <StyledTableCell className="tableCell" colSpan={5} />
                <TblPagination />
              </StyledTableRow>
            </TableFooter>
          </Table>
        </TblContainer>
      </Box>
    </>
  );
};
