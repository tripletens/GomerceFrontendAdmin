import React from "react";
import ProductCard from "../productCard/ProductCard";
import { Grid } from "@mui/material";

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
    <Grid container columnGap={2} direction="row" rowGap={2}>
      {sampleProducts.map((item) => (
        <Grid item>
          <ProductCard product={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductGrid;
