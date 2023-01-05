import { MenuItem, TextField } from "@mui/material";

const CustomSelect = ({ options, name, size, fullWidth = false, id = "" }) => {
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
        <MenuItem key={option.id} value={option.slug}>
          {option.name}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default CustomSelect;
