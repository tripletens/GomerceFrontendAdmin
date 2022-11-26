import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Link } from "react-router-dom";
import "./index.css";

const SelectComponent = (props) => {
  const [propTitle, setPropTitle] = React.useState("");

  const handleChange = (event) => {
    setPropTitle(event.target.value);
  };

  console.log({ props });
  return (
    <>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            {props.content.title}
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={propTitle}
            label={props.content.label}
            onChange={handleChange}
          >
            <MenuItem value={''} selected>
              -- Select an Action --
            </MenuItem>
            {props.content.data
              ? props.content.data.map((item, key) => {
                  return (
                    <MenuItem value={item.value} key={key}>
                      <Link to={item.url} className="link_url">{item.title}</Link>{" "}
                    </MenuItem>
                  );
                })
              : ""}
          </Select>
        </FormControl>
      </Box>
    </>
  );
};

export default SelectComponent;
