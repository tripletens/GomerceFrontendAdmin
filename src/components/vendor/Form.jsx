import * as React from "react";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { Close, PhotoCamera, Send } from "@mui/icons-material";
import { Stack } from "@mui/system";
import { Grid, Button, FormControl, Select, MenuItem } from "@mui/material";
import styled from "@emotion/styled";
import { theme } from "./breakpoints";

import countryCodes from "../../assets/CountryCodes.json";

// const Container = styled(Stack)({
//   flexDirection: "column",
//   alignItems: "flex-end",
//   // width: "50%",
//   minHeight: "40vh",
//   background: "white",
//   padding: "10px 0px",
//   overflow: "auto",
//   [theme.breakpoints.down("mobile_lg2")]: {
//     width: "90%",
//     overflow: "auto",
//   },
// });

const Closebutton = styled(Close)({
  margin: " 0 10px",
  "&:hover": {
    backgroundColor: "#000",
    color: "#fff",
  },
  [theme.breakpoints.down("mobile_lg2")]: {
    position: "absolute",
    top: "5%",
    right: "5%",
  },
});

const Textcontainer = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  width: "100%",
  padding: "30px 0px",
  margin: "0 auto",
  justifyContent: "center",
  [theme.breakpoints.down("mobile_lg2")]: {
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    overflow: "auto",
    margin: "0 0 0 30px",
  },
});

// const Text = styled(TextField)({
//   margin: 20,
//   width: "35ch",
//   [theme.breakpoints.down("mobile_lg2")]: {
//     width: "80%",
//     margin: 5,
//   },
// });

export default function Form({ setOpen }) {
  const [countryCode, setCountryCode] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [formattedPhoneNumber, setFormattedPhoneNumber] = React.useState("");

  const handleFormatPhoneNumber = (event) => {
    setPhoneNumber(event.target.value.replace(countryCode, ""));
    setFormattedPhoneNumber(`${countryCode}${phoneNumber}`);
  };

  //   const [values, setValues] = React.useState({
  //     amount: '',
  //     password: '',
  //     weight: '',
  //     weightRange: '',
  //     showPassword: false,
  //   });

  //   const handleChange = (prop) => (event) => {
  //     setValues({ ...values, [prop]: event.target.value });
  //   };

  //   const handleClickShowPassword = () => {
  //     setValues({
  //       ...values,
  //       showPassword: !values.showPassword,
  //     });
  //   };

  //   const handleMouseDownPassword = (event) => {
  //     event.preventDefault();
  //   };

  return (
    <FormControl
      component="form"
      // onSubmit={handleSubmit}
      sx={{
        p: 2,
        background: "white",
        maxWidth: "900px",
        width: "68%",
        maxHeight: "95%",
        gap: 2,
      }}
    >
      <Closebutton onClick={(e) => setOpen(false)} />
      <Grid container component="form" spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="First Name"
            id="outlined-start-adornment"
            placeholder="John"
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start"></InputAdornment>
              ),
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Last Name"
            id="outlined-start-adornment"
            placeholder="Doe"
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start"></InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="outlined-password-input"
            label="username"
            type="text"
            size="small"
            autoComplete="current-password"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="outlined-password-input"
            label="Email"
            type="email"
            size="small"
            autoComplete="current-password"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="outlined-password-input"
            label="Password"
            type="password"
            size="small"
            autoComplete="current-password"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="outlined-password-input"
            label="Confirm Password"
            type="password"
            size="small"
            autoComplete="current-password"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            select
            fullWidth
            id="outlined-number"
            label="Country Code"
            size="small"
            InputLabelProps={{
              shrink: true,
            }}
            type="search"
            onChange={(event) => setCountryCode(event.target.value)}
          >
            {countryCodes.map((code) => (
              <MenuItem key={code.code} value={code.dial_code}>
                {code.dial_code} - {code.name} 
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="outlined-number"
            label="Phone Number"
            type="numeric"
            size="small"
            value={`${countryCode}${phoneNumber}`}
            onChange={(event) => handleFormatPhoneNumber(event)}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="outlined-textarea"
            label="Sale Focus"
            size="small"
            placeholder="Placeholder"
            multiline
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="outlined-textarea"
            label="Business Address"
            size="small"
            placeholder="Placeholder"
            multiline
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="outlined-textarea"
            label="Date of Birth"
            size="small"
            placeholder="Placeholder"
            multiline
          />
        </Grid>
        <Grid item xs={6} fullWidth>
          <Button
            component="label"
            sx={{ margin: "0px auto" }}
            endIcon={<PhotoCamera />}
          >
            Upload Picture
            <input hidden accept="image/*" multiple type="file" />
          </Button>
        </Grid>
        <Grid item xs={6} fullWidth>
          <Button
            variant="contained"
            color="success"
            size="medium"
            sx={{ margin: "0px auto" }}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </FormControl>
  );
}
