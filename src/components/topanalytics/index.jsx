import React from "react";
import "./index.css";
import { Grid, Stack } from "@mui/material";
import users_icon from "../../assets/group.png";
import orders_icon from "../../assets/shopping-bag.png";
import revenue_icon from "../../assets/money.png";

const DashboardTopAnalytics = () => {
  return (
    <>
      <Stack
        direction={{ xs: "column", sm: "column", md: "row", lg: "row" }}
        spacing={3}
      >
        <div className="dashboard_top_info_box">
          <div className="dashboard_top_info_box_left">
            <h3>79,503</h3>
            <p>Daily Visitors</p>
          </div>
          <div className="dashboard_top_info_box_right">
            <img alt="icon2" src={users_icon} />
          </div>
        </div>
        <div className="dashboard_top_info_box">
          <div className="dashboard_top_info_box_left">
            <h3>79,503</h3>
            <p>Daily Visitors</p>
          </div>
          <div className="dashboard_top_info_box_right">
            <img alt="icon2" src={users_icon} />
          </div>
        </div>
        <div className="dashboard_top_info_box">
          <div className="dashboard_top_info_box_left">
            <h3>15503</h3>
            <p>Daily Orders</p>
          </div>
          <div className="dashboard_top_info_box_right">
            <img alt="icon3" src={orders_icon} />
          </div>
        </div>
        <div className="dashboard_top_info_box">
          <div className="dashboard_top_info_box_left">
            <h3>$45,503</h3>
            <p>Daily Revenue</p>
          </div>
          <div className="dashboard_top_info_box_right">
            <img alt="icon4" src={revenue_icon} />
          </div>
        </div>
      </Stack>
    </>
  );
};

export default DashboardTopAnalytics;
