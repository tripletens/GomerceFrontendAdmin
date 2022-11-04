import React, { useState } from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/system';
import { AttachFile } from '@mui/icons-material';
import './vendorprof.css';
import { CardMedia } from '@mui/material';
import store from '../../my_db';
import { MyButton } from './postStyle';

// import { Close, PhotoCamera, Send } from '@mui/icons-material';
// import { Button } from '@mui/material';


export default function UpdateForm() {
     const { image } = store[0];

  const [file, setFile] = useState(image);

    const  handleChange = (e) => {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

  return (
    <>
        <Stack direction='row' alignItems='center' justifyContent='space-between' margin='0 20px'>
            <CardMedia
                sx={{width: 120, height: 120, borderRadius: '20px', marginBottom: '20px', marginTop:'20px'}}
                component="img"                                
                image = {file}
                className='writeImg' />
                
            <TextField
                label={<AttachFile />}
                sx={{ m: 2, width: '41ch', cursor:'pointer' }}
                placeholder='Attach Fil'
                onChange={handleChange}
                type="file"
                InputProps={{
                    startAdornment: <InputAdornment position="start" ></InputAdornment>,
                }} />
        </Stack>

        <Stack direction='row' alignItems='center' justifyContent='space-between' margin='0 20px 0 5px'>
            <TextField
            label="First Name"
            id="outlined-start-adornment"
            sx={{ m: 2, width: '45ch' }}
            placeholder='John'
            InputProps={{
                startAdornment: <InputAdornment position="start" ></InputAdornment>,
            }} />
            <TextField
            label="Last Name"
            id="outlined-start-adornment"
            sx={{ m: 2, width: '45ch' }}
            placeholder='Doe'
            InputProps={{
                startAdornment: <InputAdornment position="start" ></InputAdornment>,
            }} />
        </Stack>

        <Stack direction='row' alignItems='center' justifyContent='space-between' margin='20px 20px 0 5px'>          
            <TextField
            label="username"
            id="outlined-start-adornment"
            sx={{ m: 2, width: '120ch' }}
            placeholder='jonskee'
            InputProps={{
                startAdornment: <InputAdornment position="start" ></InputAdornment>,
            }} />
        </Stack>

        <Stack direction='row' alignItems='center' justifyContent='space-between' margin='20px 20px 0 5px'>          
            <TextField
            label="email"
            type='email'
            id="outlined-start-adornment"
            sx={{ m: 2, width: '120ch' }}
            placeholder='jonskee'
            InputProps={{
                startAdornment: <InputAdornment position="start" ></InputAdornment>,
            }} />
        </Stack>

        <Stack direction='row' alignItems='center' justifyContent='space-between' margin='20px 20px 0 5px'>         
            <TextField
            label="Old password"
            type="password"
            id="outlined-start-adornment"
            sx={{ m: 2, width: '120ch' }}
            InputProps={{
                startAdornment: <InputAdornment position="start" ></InputAdornment>,
            }} />
        </Stack>

        <Stack direction='row' alignItems='center' justifyContent='space-between' margin='20px 20px 0 5px'>
            <TextField
            label="New Password"
            type="password"
            id="outlined-start-adornment"
            sx={{ m: 2, width: '120ch' }}
            InputProps={{
                startAdornment: <InputAdornment position="start" ></InputAdornment>,
            }} />
        </Stack>

        <Stack direction='row' alignItems='center' justifyContent='space-between' margin='20px 20px 0 5px'>          
            <TextField
            label="Comfirm password"
            type="password"
            id="outlined-start-adornment"
            sx={{ m: 2, width: '120ch' }}
            InputProps={{
                startAdornment: <InputAdornment position="start" ></InputAdornment>,
            }} />
        </Stack>

        <Stack direction='row' alignItems='center' justifyContent='flex-end' margin='20px 20px 0 5px'>          
            <MyButton variant='contained'>Update</MyButton>
        </Stack>

    </>
  );
}
