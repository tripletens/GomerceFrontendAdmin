import React from "react";
import { styled } from '@mui/material/styles';
import "./index.css";
import { Box } from "@mui/system";
import AppBarElement from "../../components/appbar";
import Vendor from "../../components/vendor/Vendor";
import DashboardHeader from "../../components/dashboardHeader";
import AddItemVendor from "../../components/vendor/AddItem";
import { Stack } from "@mui/material";


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
          <Stack
            direction="row"
            className="header" >
            <DashboardHeader page="Vendors" title="Vendors Card" />
            <AddItemVendor />
          </Stack>
           <Vendor />  
        </Box>
      </Box>
    </>
  );
};

export default Vendors;