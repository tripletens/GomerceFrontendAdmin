import { Grid, Box, Paper, TextField, Button } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const CreateCategoryForm = () => {
  return (
    <>
      {" "}
      <h2 className="">Create a Category </h2>
      <Grid container spacing={2} my={3}>
        <Grid item xs={12} sm={12} lg={6}>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            name="name"
            fullWidth
          />
          {/*  */}
        </Grid>
        <Grid item xs={12} sm={12} lg={6}>
          <TextField
            id="outlined-basic"
            label="Slug(Unique)"
            variant="outlined"
            name="slug"
            fullWidth
          />
          {/*  */}
        </Grid>
      </Grid>
      <Grid container spacing={2} my={3}>
        <Grid item xs={12} sm={12} lg={12}>
          <TextField
            id="outlined-basic"
            label="Description"
            variant="outlined"
            name="description"
            fullWidth
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} my={3}>
        <Grid item xs={12} sm={12} lg={6}>
          <TextField
            id="outlined-basic"
            label="Tags"
            variant="outlined"
            name="name"
            fullWidth
          />
          {/*  */}
        </Grid>
        <Grid item xs={12} sm={12} lg={6}>
          <TextField
            id="outlined-basic"
            label="Status"
            variant="outlined"
            name="status"
            fullWidth
          />
          {/*  */}
        </Grid>
      </Grid>
      <Grid container spacing={2} my={3}>
        <Grid item xs={12} sm={12} lg={9}></Grid>
        <Grid item xs={12} sm={12} lg={3}>
          <Button variant="contained" sx={{ float:"right" }}>Submit</Button>
        </Grid>
      </Grid>
    </>
  );
};

export default CreateCategoryForm;
