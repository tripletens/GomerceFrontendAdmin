import React from "react";
import { Box, Grid } from "@mui/material";
import "./index.css";
import logo from "../../assets/gomerce_logo.png";
import { Link } from "react-router-dom";

// welcome to admin login page
const Login = () => {
  return (
    <>
      {/* navbar comes here  */}
      {/* sidebar comes here  */}
      <Box className="">
        <Grid container spacing={0}>
          <Grid item xs={0} sm={0} md={6}>
            <div className="login_leftside"></div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="login_rightside">
              <div className="login_div">
                <img src={logo} className="login_logo" />
                <form method="POST" className="login_form">
                  <div className="login_form_group">
                    <label for="email" className="login_label">
                      Email Address:{" "}
                    </label>
                    <input
                      type="text"
                      name="email"
                      className="login_input"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div className="login_form_group">
                    <label for="password" className="login_label">
                      Password:{" "}
                    </label>
                    <input
                      type="password"
                      name="password"
                      className="login_input"
                      placeholder="Enter your password"
                    />
                  </div>
                  <Link to="/dashboard">
                    <button className="login_button" type="submit">
                      {" "}
                      Login
                    </button>
                  </Link>
                </form>
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Login;
