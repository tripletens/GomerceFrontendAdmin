import { MenuItem, TextField } from "@mui/material";

const CustomSelectSizes = ({ options, name, size, fullWidth = false, id = "" }) => {
  return (
    <TextField
      label={`${name}`}
      id={`${id}`}
      sx={{ minWidth: "20ch" }}
      fullWidth={fullWidth}
      size={`${size}`}
      select
    >
      {options.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default CustomSelectSizes;
