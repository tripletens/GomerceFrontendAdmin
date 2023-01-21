import React from "react";
import { Divider, Grid, Pagination } from "@mui/material";
import ProductCard from "./productCard/ProductCard";
import PageHeader from "../PageHeader";

import ProductMenuBar from "./ProductMenuBar/ProductMenuBar";
import ProductGrid from "./ProductGrid/ProductGrid";

const ProductsComponent = () => {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      sx={{ background: "#eee", p: 4 }}
    >
      <PageHeader title="Products" page="Products" />

      <Grid
        item
        alignSelf="center"
        justifySelf="center"
        sx={{ background: "#fff", p: 4 }}
      >
        <ProductMenuBar />
        <Grid item>
          <Divider sx={{ my: 2 }} />
          <ProductGrid />
          <Grid container justifyContent="center" sx={{ my: 2 }}>
            <Pagination count={10} shape="rounded" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProductsComponent;
