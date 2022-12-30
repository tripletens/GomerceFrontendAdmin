import React from "react";
import {
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  InputBase,
  Paper,
  Select,
  TextField,
} from "@mui/material";
import ProductCard from "../../components/products/productCard/ProductCard";
import PageHeader from "../../components/PageHeader";
import AddProduct from "../../components/products/AddProduct/AddProduct";

import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Search";

import { AccountBalance } from "@mui/icons-material";
import SelectProductCategory from "../../components/products/SelectProductCategory/SelectProductCategory";
const sampleProducts = [
  {
    description: "mobile phone",
    price: "$100",
    imageLink: "images/order-item.png",
  },
  {
    description: "mobile phone",
    price: "$200",
    imageLink: "images/order-item.png",
  },
  {
    description: "mobile phone",
    price: "$300",
    imageLink: "images/order-item.png",
  },
  {
    description: "mobile phone",
    price: "$400",
    imageLink: "images/order-item.png",
  },
  {
    description: "mobile phone",
    price: "$1500",
    imageLink: "images/order-item.png",
  },
  {
    description: "mobile phone",
    price: "$1010",
    imageLink: "images/order-item.png",
  },
  {
    description: "mobile phone",
    price: "$2100",
    imageLink: "images/order-item.png",
  },
];

const ProductGrid = () => {
  return (
    <Grid container direction="column" alignItems="center">
      {/* header */}
      <PageHeader title="Products" page="Products" />
      {/* Navbar */}
      <Grid container justifyContent="space-between">
        <Grid item>
          <Grid container>
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
            <SelectProductCategory />
          </Grid>
        </Grid>
        <AddProduct />
      </Grid>

      {/* product */}
      <Grid>
        <Divider sx={{ my: 2 }} />
        <Grid container columnGap={2} direction="row" rowGap={2}>
          {sampleProducts.map((item) => (
            <Grid item>
              <ProductCard product={item} />
            </Grid>
          ))}
        </Grid>
        <Grid>Pagination</Grid>
      </Grid>
    </Grid>
  );
};

export default ProductGrid;
