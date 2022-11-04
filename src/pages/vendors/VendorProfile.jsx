import React from 'react'
import AppBarElement from "../../components/appbar";
import { styled } from '@mui/material/styles';
import { Box, Stack } from "@mui/system";
import DashboardHeader from "../../components/dashboardHeader";
import VendorProf from '../../components/vendor/VendorProf';


const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

let name = 'Sony'

const VendorProfile = () => {
  return (
      <>
          <Box sx={{ display: 'flex' }}>
              <AppBarElement />
              <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    margin="30px 0" >
                    <DashboardHeader page={`${name} Profile` } title={` Hello, Vendor ${name}`} />
                </Stack>
                <VendorProf />  
              </Box>
          </Box>
      </>
  )
}

export default VendorProfile