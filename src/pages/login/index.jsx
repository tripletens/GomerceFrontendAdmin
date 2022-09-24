import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Grid } from "@mui/material";
import Container from "@mui/material/Container";
import "./index.css";
import logo from "../../assets/gomerce_logo.png";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";

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
                    <label for="email" className="login_label">Email Address: </label>
                    <input type="text" name="email" className="login_input" placeholder="Enter your email address" />
                  </div>
                  <div className="login_form_group">
                    <label for="password" className="login_label">Password: </label>
                    <input type="password" name="password" className="login_input" placeholder="Enter your password" />
                  </div>
                  <button className="login_button" type="submit"> Login</button>
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
