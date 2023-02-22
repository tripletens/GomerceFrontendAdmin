import { ThemeProvider } from "@emotion/react";
import { theme } from "./style/custom-theme";
import { styled } from '@mui/material/styles';
import { Box, Grid } from "@mui/material";
import AppBarElement from "../../components/appbar";
import { AllCategoriesTable, AllCategoriesTableOne } from "../../components/categories/allcategories";


export const Categories = () => {

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
              <AllCategoriesTableOne />
            </ThemeProvider>
          </Grid>
        </Box>
      </Box>
    </>
  );
};
