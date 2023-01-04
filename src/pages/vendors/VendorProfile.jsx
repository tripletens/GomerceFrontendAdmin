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


const Bigbox = styled(Box)(({theme}) => ({
  display: 'flex',
  width: '100%',
  [theme.breakpoints.down('sm')]:{
    width: '100%',
  }
}))

const HeaderContainer = styled(Stack)(({theme}) => ({
    direction: "row",
    flexWrap:"wrap",
    justifyContent:"flex-start",
    alignItems:"flex-start",
    margin:"30px 10px",
    [theme.breakpoints.down('sm')]:{
      margin:'10px auto'
    }
}))


const VendorProfile = () => {
  return (
      <>
          <Bigbox>
              <AppBarElement />
              <Box component="main" sx={{ flexGrow: 1, p: 3}}>
                <DrawerHeader />
                <HeaderContainer>
                    <DashboardHeader page={`${name} Profile` } title={` Hello, Vendor ${name}`} />
                </HeaderContainer>
                <VendorProf />  
              </Box>
          </Bigbox>
      </>
  )
}

export default VendorProfile