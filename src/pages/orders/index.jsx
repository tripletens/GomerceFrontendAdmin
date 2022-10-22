import { ThemeProvider } from "@emotion/react";
import { NewOrders } from "../../components/orders/NewOrders";
import { theme } from "./style/custom-theme";
import { styled } from '@mui/material/styles';
import { Box, Grid } from "@mui/material";
import AppBarElement from "../../components/appbar";


export const Orders = () => {

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
            <ThemeProvider theme={theme}>
              <NewOrders />
            </ThemeProvider>
          </Grid>
        </Box>
      </Box>
    </>
  );
};
