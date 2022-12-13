import { ThemeProvider } from "@emotion/react";
import { theme } from "./style/custom-theme";
import { styled } from "@mui/material/styles";
import { Box, Grid } from "@mui/material";
import AppBarElement from "../../components/appbar";
import CategoryTab from "../../components/tab/category";

export const ManageCategories = () => {
  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

  const tabOptions = [
    {
      title: "Categories",
    },
    {
      title: "SubCategories",
    },
  ];

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <AppBarElement />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Grid container spacing={2}>
            <CategoryTab item={tabOptions} />
          </Grid>
        </Box>
      </Box>
    </>
  );
};
