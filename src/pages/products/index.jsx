// welcome to admin dashboard Users page
import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Grid } from "@mui/material";
import AppBarElement from "../../components/appbar";
import "./index.css";
import { AllProducts } from "../../components/products";
import { theme } from "./style/custom-theme";
import { ThemeProvider } from "@emotion/react";
import ProductsComponent from "../../components/products/ProductsComponent";

export const Products = () => {
  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <AppBarElement />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Grid container spacing={2}>
            {/* add your own code here  */}
            {/* <AllProducts/> */}
            <ThemeProvider theme={theme}>
              <ProductsComponent />
            </ThemeProvider>

            {/* add your own code here  */}
          </Grid>
        </Box>
      </Box>
    </>
  );
};
