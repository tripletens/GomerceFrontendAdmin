import React from "react";
import { styled } from "@mui/material/styles";
// welcome to admin dashboard
import "./index.css";
import DashboardTopAnalytics from "../../components/topanalytics";
import SalesReportChart from "../../components/salesreport";
import { Box, Grid } from "@mui/material";
import SalesOrdersChart from "../../components/chart/chartSalesOrders";

import AppBarElement from "../../components/appbar";
import ChartUserActivity from "../../components/chart/chartUserActivity";
import NewCustomersComponent from "../../components/newcustomers";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Dashboard = () => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <AppBarElement />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <DashboardTopAnalytics />
          
          <Grid
            container
            spacing={3}
            
          >
            <Grid item xs={12} sm={12} md={7}>
            <SalesReportChart/>
            </Grid>
            <Grid item xs={12} sm={12} md={5}>
                <SalesOrdersChart/>
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={7}>
              <ChartUserActivity/>
            </Grid>
            <Grid item xs={12} sm={12} md={5}>
              <NewCustomersComponent/>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
