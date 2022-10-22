
// welcome to admin dashboard Brands page
// welcome to admin dashboard Users page
import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Grid } from "@mui/material";
import AppBarElement from "../../components/appbar";
import "./index.css";

export const Brands = () => {
  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <AppBarElement />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Grid container spacing={2}>
            {/* add your own code here  */}
            <h1>Welcome to Admin dashboard brands</h1>
            {/* add your own code here  */}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

