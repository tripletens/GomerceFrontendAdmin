<<<<<<< HEAD

import React from "react";
import { styled } from '@mui/material/styles';
// welcome to admin dashboard
import "./index.css";
import { Box } from "@mui/system";
import AppBarElement from "../../components/appbar";
import User from "../../components/user/User";
import DashboardHeader from "../../components/user/dashboardHeader";

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Users = () => {

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <AppBarElement />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <DashboardHeader
            pageName="User"
          />
          <User />
=======
// welcome to admin dashboard Users page
import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import { Box, Grid, Stack } from "@mui/material";
import AppBarElement from "../../components/appbar";
import "./index.css";

import store from "../../my_db";
import Post from "../../components/users/post";
import DashboardHeader from "../../components/dashboardHeader";
import AddItemUser from "../../components/users/AddItem";

export const Users = () => {
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
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            margin="30px 0"
          >
            <DashboardHeader page="Users" title="Users Card" />
            <AddItemUser />
          </Stack>

          {/* add your own code here  */}
          <Grid
            sx={{
              flexGrow: 1,
              gap: 2,
              justifyContent: "center",
              alignItems: "center",
            }}
            container
            spacing={2}
          >
            {store.map((user) => {
              return <Post key={user.id} {...user} />;
            })}
          </Grid>
          {/* add your own code here  */}
>>>>>>> e1944c1bc6a285ff985914164dc121360d77275a
        </Box>
      </Box>
    </>
  );
};
<<<<<<< HEAD

export default Users;
=======
>>>>>>> e1944c1bc6a285ff985914164dc121360d77275a
