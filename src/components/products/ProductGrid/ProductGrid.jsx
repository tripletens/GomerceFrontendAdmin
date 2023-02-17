import React from "react";
import ProductCard from "../productCard/ProductCard";
import { Grid } from "@mui/material";

const sampleProducts = [
  {
    description: "mobile phone",
    price: "$100",
    imageLink: "images/phone_2.jpg",
    alt: "image of product",
  },
  {
    description: "mobile phone",
    price: "$200",
    imageLink: "images/phone_2.jpg",
    alt: "image of product",
  },
  {
    description: "mobile phone",
    price: "$300",
    imageLink: "images/phone_2.jpg",
    alt: "image of product",
  },
  {
    description: "mobile phone",
    price: "$400",
    imageLink: "images/phone_2.jpg",
    alt: "image of product",
  },
  {
    description: "mobile phone",
    price: "$1500",
    imageLink: "images/phone_2.jpg",
    alt: "image of product",
  },
  {
    description: "mobile phone",
    price: "$1010",
    imageLink: "images/phone_2.jpg",
    alt: "image of product",
  },
  {
    description: "mobile phone",
    price: "$2100",
    imageLink: "images/phone_2.jpg",
    alt: "image of product",
  },
];

const ProductGrid = () => {
  return (
    <Grid container columnGap={4} direction="row" rowGap={4}>
      {sampleProducts.map((item) => (
        <Grid item>
          <ProductCard product={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductGrid;
