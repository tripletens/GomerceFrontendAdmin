import React from "react";
import { Divider, Grid, TextField } from "@mui/material";
import ProductCard from "../../components/products/productCard/ProductCard";
import PageHeader from "../../components/PageHeader";
import AddProduct from "../../components/products/AddProduct/AddProduct";

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
          <TextField
            placeholder="search"
            type="search"
            size="small"
            sx={{ width: "50ch" }}
          ></TextField>
        </Grid>
        <Grid item></Grid>
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
