
import React from "react";
import { styled, useTheme } from '@mui/material/styles';
// welcome to admin dashboard
import "./index.css";
import { Box } from "@mui/system";
import AppBarElement from "../../components/appbar";
import Vendor from "../../components/vendor/Vendor";
import DashboardHeader from "../../components/dashboardHeader";

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Vendors = () => {

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <AppBarElement />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <DashboardHeader />
          <Vendor />
        </Box>
      </Box>
    </>
  );
};

export default Vendors;
