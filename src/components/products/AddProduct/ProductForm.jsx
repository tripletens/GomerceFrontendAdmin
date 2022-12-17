import { Grid } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { Close, PhotoCamera, Send } from "@mui/icons-material";
import { Stack } from "@mui/system";
import { Button } from "@mui/material";

const ProductForm = () => {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      sx={{ height: "100vh" }}
    >
      <Stack
        direction="column"
        alignItems="flex-end"
        position="absolute"
        sx={{
          width: "50%",
          minHeight: "40vh",
          background: "white",
          padding: "10px 0px",
        }}
      >
        {/* <Close
        onClick={(e) => setOpen(false)}
        sx={{
          "&:hover": { backgroundColor: "#000", color: "#fff" },
          margin: " 0 10px",
        }}
      /> */}
        <Box
          component="form"
          sx={{
            display: "flex",
            flexWrap: "wrap",
            width: "100%",
            padding: "30px 0px",
            margin: "0 auto",
            justifyContent: "center",
          }}
        >
          <div>
            <TextField
              label="Product Name"
              id="productName"
              sx={{ m: 2, width: "35ch" }}
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start"></InputAdornment>
                ),
              }}
            />

            <TextField
              label="Select Category"
              id="category"
              sx={{ m: 2, width: "35ch" }}
              placeholder="open this select"
              size="small"
              type="button"
            />
            <TextField
              id="description"
              sx={{ m: 2, width: "74ch" }}
              label="Description"
              type="text"
              size="large"
              multiline
            />

            <TextField
              id="colors"
              sx={{ m: 2, width: "35ch" }}
              label="Colors"
              type="color"
              size="small"
            />
            <TextField
              id="size"
              sx={{ m: 2, width: "35ch" }}
              label="Size"
              type="number"
              size="small"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="price"
              label="Price"
              type="number"
              size="small"
              sx={{ m: 2, width: "35ch" }}
              placeholder="Placeholder"
              multiline
            />
            <TextField
              id="Quality"
              label="Business Address"
              size="small"
              sx={{ m: 2, width: "35ch" }}
              placeholder="Placeholder"
              multiline
            />
            <TextField
              id="tags"
              label="Product tags"
              size="small"
              sx={{ m: 2, width: "35ch" }}
              placeholder="Placeholder"
            />
            <Button
              component="label"
              sx={{ margin: "18px 15px" }}
              endIcon={<PhotoCamera />}
              color="success"
            >
              Upload Picture
              <input hidden accept="image/*" multiple type="file" />
            </Button>
            <Button
              variant="contained"
              color="success"
              endIcon={<Send />}
              size="medium"
              sx={{ margin: "0px 18px" }}
            >
              Submit
            </Button>
          </div>
        </Box>
      </Stack>
    </Grid>
  );
};

export default ProductForm;
