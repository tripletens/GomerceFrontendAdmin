import * as React from 'react';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { Close, PhotoCamera, Send } from '@mui/icons-material';
import { Stack } from '@mui/system';
import { Button } from '@mui/material';


export default function Form({setOpen}) {
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
    <Stack direction='column'alignItems="flex-end" sx={{width: '50%', minHeight: '40vh', background: 'white', padding: '10px 0px', }}>
        <Close onClick={(e )=> setOpen(false)} sx={{'&:hover': {backgroundColor: '#000', color: '#fff' }, margin: ' 0 10px'}}/>
        <Box  component="form"  sx={{ display: 'flex', flexWrap: 'wrap', width: '100%', padding: '30px 0px', margin: '0 auto', justifyContent: 'center' }}>
        <div>
            <TextField
            label="First Name"
            id="outlined-start-adornment"
            sx={{ m: 2, width: '35ch' }}
            placeholder='John'
            size="small"
            InputProps={{
                startAdornment: <InputAdornment position="start" ></InputAdornment>,
            }} />
            
            <TextField
            label="Last Name"
            id="outlined-start-adornment"
            sx={{ m: 2, width: '35ch' }}
            placeholder='Doe'
            size="small"
            InputProps={{
                startAdornment: <InputAdornment position="start" ></InputAdornment>,
            }} />
            <TextField
            id="outlined-password-input"
            sx={{ m: 2, width: '35ch' }}
            label="username"
            type="text"
                size="small"
            autoComplete="current-password" />

            <TextField
            id="outlined-password-input"
            sx={{ m: 2, width: '35ch' }}
            label="Email"
            type="email"
                size="small"
            autoComplete="current-password" />
            
            <TextField
            id="outlined-password-input"
            sx={{ m: 2, width: '35ch' }}
            label="Password"
            type="password"
                size="small"
            autoComplete="current-password" />
            
            <TextField
            id="outlined-password-input"
            sx={{ m: 2, width: '35ch' }}
            label="Confirm Password"
            type="password"
                size="small"
            autoComplete="current-password" />
            
            <TextField
            id="outlined-number"
            sx={{ m: 2, width: '35ch' }}
            label="Country Code"
            type="number"
                size="small"
            InputLabelProps={{
                shrink: true,
            }}/> 
            <TextField
            id="outlined-number"
            sx={{ m: 2, width: '35ch' }}
            label="Phone Number"
            type="number"
                size="small"
            InputLabelProps={{
                shrink: true,
            }}/> 
            <TextField
            id="outlined-textarea"
            label="Sale Focus"
                size="small"
                sx={{ m: 2, width: '35ch' }}
            placeholder="Placeholder"
            multiline
            /> 
            <TextField
            id="outlined-textarea"
            label="Business Address"
            size="small"
            sx={{ m: 2, width: '35ch' }}
            placeholder="Placeholder"
            multiline
            />
            <TextField
            id="outlined-textarea"
            label="Date of Birth"
            size="small"
            sx={{ m: 2, width: '35ch' }}
            placeholder="Placeholder"
            multiline
            />
            <Button  component="label" sx={{margin:'18px 15px'}} endIcon = {<PhotoCamera />}>
                Upload Picture   
                <input hidden accept="image/*" multiple type="file" />
            </Button>
            <Button variant='contained' color="success"
                endIcon={<Send />} size="medium"  sx={{margin:'0px 18px'}} >
                Submit
            </Button>
        </div>
        </Box>
    </Stack>
  );
}
