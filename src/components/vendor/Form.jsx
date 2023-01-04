import * as React from 'react';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { Close, PhotoCamera, Send } from '@mui/icons-material';
import { Stack } from '@mui/system';
import { Button } from '@mui/material';
import styled from '@emotion/styled';
import { theme } from './breakpoints'


const Container = styled(Stack)({
    flexDirection: 'column',
    alignItems: "flex-end",
    width: '50%', 
    minHeight: '40vh', 
    background: 'white', 
    padding: '10px 0px', 
    overflow: 'auto',
    [theme.breakpoints.down('mobile_lg2')]:{
        width: '90%',
        overflow: 'auto',
    }
})

const Closebutton = styled(Close)({
    margin: ' 0 10px',
    '&:hover': {
        backgroundColor: '#000', 
        color: '#fff' 
    },
    [theme.breakpoints.down('mobile_lg2')]:{
        position: 'absolute',
        top: '5%',
        right: '5%',
    }
})


const Textcontainer = styled(Box)({
    display: 'flex', 
    flexWrap: 'wrap', 
    width: '100%', 
    padding: '30px 0px',
    margin: '0 auto', 
    justifyContent: 'center',
    [theme.breakpoints.down('mobile_lg2')]:{
        width: '90%',
        alignItems: "center",
        justifyContent: 'center',
        overflow: 'auto',
        margin: '0 0 0 30px'
    }
})

const Text = styled(TextField)({
    margin: 20, 
    width: '35ch',
    [theme.breakpoints.down('mobile_lg2')]:{
        width: '80%',
        margin: 5, 
    }
})


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
    <Container>
        <Closebutton onClick={(e )=> setOpen(false)} />
        <Textcontainer  component="form">
            <div>
                <Text
                label="First Name"
                id="outlined-start-adornment"
                placeholder='John'
                size="small"
                InputProps={{
                    startAdornment: <InputAdornment position="start" ></InputAdornment>,
                }} />
                
                <Text
                label="Last Name"
                id="outlined-start-adornment"
                placeholder='Doe'
                size="small"
                InputProps={{
                    startAdornment: <InputAdornment position="start" ></InputAdornment>,
                }} />
                <Text
                id="outlined-password-input"
                label="username"
                type="text"
                    size="small"
                autoComplete="current-password" />

                <Text
                id="outlined-password-input"
                label="Email"
                type="email"
                    size="small"
                autoComplete="current-password" />
                
                <Text
                id="outlined-password-input"
                label="Password"
                type="password"
                    size="small"
                autoComplete="current-password" />
                
                <Text
                id="outlined-password-input"
                label="Confirm Password"
                type="password"
                    size="small"
                autoComplete="current-password" />
                
                <Text
                id="outlined-number"
                label="Country Code"
                type="number"
                    size="small"
                InputLabelProps={{
                    shrink: true,
                }}/> 
                <Text
                id="outlined-number"
                label="Phone Number"
                type="number"
                    size="small"
                InputLabelProps={{
                    shrink: true,
                }}/> 
                <Text
                id="outlined-textarea"
                label="Sale Focus"
                    size="small"

                placeholder="Placeholder"
                multiline
                /> 
                <Text
                id="outlined-textarea"
                label="Business Address"
                size="small"
                placeholder="Placeholder"
                multiline
                />
                <Text
                id="outlined-textarea"
                label="Date of Birth"
                size="small"
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
        </Textcontainer>
    </Container>
  );
}