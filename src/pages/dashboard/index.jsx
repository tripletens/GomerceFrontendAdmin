import React from "react";
// welcome to admin dashboard
import "./index.css";
import DashboardTopAnalytics from "../../components/topanalytics";
import SalesReportChart from "../../components/salesreport";
import { Box, Grid } from "@mui/material";
import SalesOrdersChart from "../../components/chartSalesOrders";

const Dashboard = () => {
  return (
    <>
      <DashboardTopAnalytics/>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={8}>
          <SalesReportChart/>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
            <SalesOrdersChart/>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
