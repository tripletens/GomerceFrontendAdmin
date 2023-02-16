import React from "react";
import AddProduct from "../AddProduct/AddProduct";
import CustomSelect from "../../CustomSelect/CustomSelect";
import { Grid, Paper, TextField, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
const categories = [
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

const sort = [
  { id: 1, name: "name", slug: "by_name" },
  { id: 2, name: "price", slug: "by_price" },
  { id: 3, name: "date_created", slug: "by_date_created" },
];

const ProductMenuBar = () => {
  return (
    <Grid container justifyContent="space-between " alignItems="center">
      <Grid item>
        <Grid container gap={2} alignItems="center">
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: "25em",
            }}
          >
            <TextField
              sx={{ ml: 1, flex: 1 }}
              size="small"
              placeholder="Search..."
              inputProps={{ "aria-label": "Search product categories" }}
            />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
          <CustomSelect
            options={categories}
            name="select category"
            size="small"
          />
          <CustomSelect options={sort} name="sort by" size="small" />
          <AddProduct />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProductMenuBar;
