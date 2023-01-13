import { Button, FormControl, Grid } from "@mui/material";
import React, { useState } from "react";
import Box from "@mui/material/Box";

import TextField from "@mui/material/TextField";
import { Close, PhotoCamera, Send } from "@mui/icons-material";

import { Select, MenuItem, ListItemText } from "@mui/material";
import CustomSelect from "../../CustomSelect/CustomSelect";

const categories = [
  {
    id: "23422",
    name: "Electronics",
    slug: "electronics",
    tags: "home appliances, electronics",
    date: "5 March 2021",
    status: "Active",
  },
  {
    id: "23423",
    name: "Chidren Food",
    slug: "children_food",
    tags: "home, food, children",
    date: "3 March 2022",
    status: "Active",
  },
  {
    id: "23424",
    name: "Farm Equipments",
    slug: "farm_equipments",
    tags: "farm appliances, agrticulture",
    date: "3 April 2022",
    status: "Active",
  },
  {
    id: "23425",
    name: "Gadgets",
    slug: "gadgets",
    tags: "appliances, electronics",
    date: "3 April 2020",
    status: "Active",
  },
  {
    id: "23426",
    name: "Home Appliances",
    slug: "home_appliances",
    tags: "home appliances, electronics",
    date: "3 June 2022",
    status: "Active",
  },
];

const sizeOptions = [, "small", , "medium", , "large", , "extra large"];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const ProductForm = ({ setOpen, onClose }) => {
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState();
  const [tags, setTags] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSizes(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    alert("New Product Submitted");
    // try {
    //   res = await axios.post(
    //     "/products",

    //     {
    //       headers: { Authorization: `Bearers ${access_token}` },
    //       withCredentials: true,
    //     }
    //   );
    // } catch (error) {
    //   console.log(error.response);
    // }
  };

  return (
    <>
      <Grid
        container
        alignContent="center"
        justifyContent="center"
        sx={{ p: 2, height: "100%" }}
      >
        <Grid
          item
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
          onClick={() => setOpen(false)}
        />
        <FormControl
          component="form"
          onSubmit={handleSubmit}
          sx={{
            p: 2,
            background: "white",
            maxWidth: "900px",
            width: "80%",
            gap: 2,
          }}
        >
          <Box sx={{ display: "flex", gap: 2 }}>
            <TextField required size="small" fullWidth label="Product name" />

            <CustomSelect
              options={categories}
              size="small"
              name="categories"
              fullWidth={true}
            />
          </Box>

          <TextField
            required
            id="description"
            sx={{ width: "100" }}
            label="Description"
            type="text"
            size="large"
            multiline
            rows={3}
          />

          <Box sx={{ display: "flex", gap: 2 }}>
            <TextField
              required
              size="small"
              fullWidth
              label="Colors"
              type="color"
            />
            <Select
              fullWidth
              label="Sizes (Multiple select)"
              size="small"
              multiple
              value={sizes}
              onChange={handleChange}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
            >
              {sizeOptions.map((size) => (
                <MenuItem key={size} value={size}>
                  <ListItemText primary={size} />
                </MenuItem>
              ))}
            </Select>
          </Box>

          <Box sx={{ display: "flex", gap: 2 }}>
            <TextField required size="small" fullWidth label="Price" />

            <TextField required size="small" fullWidth label="Quantity" />
          </Box>

          <TextField required size="small" label="Product tags" fullWidth />
          <Grid item alignSelf="center">
            <Button
              component="label"
              sx={{ margin: "18px 15px" }}
              endIcon={<PhotoCamera />}
            >
              Upload Pictures
              <input hidden accept="image/*" multiple type="file" />
            </Button>
            <Button
              variant="contained"
              color="success"
              endIcon={<Send />}
              sx={{ margin: "0px 18px" }}
              size="small"
              type="submit"
            >
              Submit
            </Button>
          </Grid>
        </FormControl>
        <Close
          onClick={(e) => setOpen(false)}
          sx={{
            "&:hover": { backgroundColor: "#000", color: "#fff" },
            margin: " 0 10px",
            zIndex: 9999,
          }}
        />
      </Grid>
    </>
  );
};

export default ProductForm;
