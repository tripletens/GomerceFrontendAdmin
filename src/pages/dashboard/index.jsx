import React from "react";
import { styled } from "@mui/material/styles";
// welcome to admin dashboard
import "./index.css";
import DashboardTopAnalytics from "../../components/topanalytics";
import SalesReportChart from "../../components/salesreport";
import { Box, Grid, Stack } from "@mui/material";
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

          <Stack
            direction={{ xs: "column", sm: "column", md: "row", lg: "row" }}
            spacing={2}
          >
            <SalesReportChart />
            <SalesOrdersChart />
          </Stack>

          <Stack
            direction={{ xs: "column", sm: "column", md: "row", lg: "row" }}
            spacing={3}
          >
            <ChartUserActivity />
            <NewCustomersComponent />
          </Stack>
          
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
