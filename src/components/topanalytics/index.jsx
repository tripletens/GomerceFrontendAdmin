import React from "react";
import "./index.css";
import { Grid } from "@mui/material";
import users_icon from "../../assets/group.png";
import orders_icon from "../../assets/shopping-bag.png";
import revenue_icon from "../../assets/money.png";

const DashboardTopAnalytics = () => {
  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={12} md={3}>
          <div className="dashboard_top_info_box">
            <div className="dashboard_top_info_box_left">
              <h3>1503</h3>
              <p>Daily Signups</p>
            </div>
            <div className="dashboard_top_info_box_right">
              <img alt="icon1" src="https://img.icons8.com/glyph-neue/32/000000/login-rounded-right.png" />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <div className="dashboard_top_info_box">
            <div className="dashboard_top_info_box_left">
              <h3>79,503</h3>
              <p>Daily Visitors</p>
            </div>
            <div className="dashboard_top_info_box_right">
              <img alt="icon2" src={users_icon} />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <div className="dashboard_top_info_box">
            <div className="dashboard_top_info_box_left">
              <h3>15503</h3>
              <p>Daily Orders</p>
            </div>
            <div className="dashboard_top_info_box_right">
              <img alt="icon3" src={orders_icon} />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <div className="dashboard_top_info_box">
            <div className="dashboard_top_info_box_left">
              <h3>$45,503</h3>
              <p>Daily Revenue</p>
            </div>
            <div className="dashboard_top_info_box_right">
              <img alt="icon4" src={revenue_icon} />
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default DashboardTopAnalytics;
