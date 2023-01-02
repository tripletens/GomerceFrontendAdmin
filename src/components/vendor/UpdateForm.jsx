import React, { useState } from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/system';
import { AttachFile } from '@mui/icons-material';
import { CardMedia } from '@mui/material';
import store from '../../my_db';
import { MyButton } from './postStyle';
import styled from '@emotion/styled';
import { theme } from './breakpoints'
import './vendorprof.css';


const FieldContainer =  styled(Stack)({
    flexDirection: 'row',
    alignItems :'center',
    justifyContent :'flex-start',
    margin :'10px 20px 10px 5px',
    width: '87%',

    [theme.breakpoints.down('ipad')]:{
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems :'flex-start',
        margin: '10px 0',
        width: '100%',
    },
    [theme.breakpoints.down('mobile_lg2')]:{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems :'center',
        margin: '10px 0',
        width: '80%',
    },
    [theme.breakpoints.down('mobile_md2')]:{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems :'center',
        margin: '10px 0',
        width: '75%',
    },
    [theme.breakpoints.down('mobile_sm2')]:{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems :'center',
        margin: '10px 0 0 18px',
        width: '55%',
    }
})

const TextContainer =  styled(Stack)({
    flexDirection:'row',
    alignItems:'center', 
    justifyContent:'space-between', 
    margin:'20px 20px 0 5px',
    width: '100%',
    [theme.breakpoints.down('ipad')]:{
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems :'flex-start',
        margin: '10px 0',
        width: '100%',
    },
    [theme.breakpoints.down('mobile_lg2')]:{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems :'center',
        margin: '10px 0',
        width: '80%',
    },
    
    [theme.breakpoints.down('mobile_md2')]:{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems :'center',
        margin: '10px 0',
        width: '75%',
    },
    
    [theme.breakpoints.down('mobile_sm2')]:{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems :'center',
        margin: '10px 0 0 18px',
        width: '55%',
    }
})

const FieldName =  styled(TextField)({
    m: 2, 
    width: '40ch',
    margin: '10px 0 10px 4px',
    [theme.breakpoints.down('ipad')]:{
       width: '38.5ch', 
    },
    [theme.breakpoints.down('mobile_lg2')]:{
       width: '30ch', 
    }
})

const FieldText =  styled(TextField)({
    m: 2, 
    width: '80ch',
    margin: '10px 0 10px 5px',

    [theme.breakpoints.down('ipad')]:{
       width: '40ch', 
    },

    [theme.breakpoints.down('mobile_lg2')]:{
       width: '30ch', 
    }
})

const EStack = styled(Stack)({
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    margin:'20px 0',
    width: '730px',
    
    [theme.breakpoints.down('mobile_lg2')]:{
        justifyContent:'space-between',
        margin: '20px 0',
        width: '310px',
    },

    [theme.breakpoints.down('mobile_md2')]:{
        margin: '10px 0',
        justifyContent:'space-between',
        width: '270px',
    },
    
    [theme.breakpoints.down('mobile_sm2')]:{
        margin: '10px 0',
        justifyContent:'space-between',
        width: '270px',
    },
})


const Mymedia = styled(CardMedia)({ 
    width: 120, 
    height: 120, 
    borderRadius: '20px', 
    marginBottom: '20px', 
    margin:'20px 0 20px 5px',

    [theme.breakpoints.down('mobile_lg2')]:{
        margin: '20px 0',
        width: '30%',
    },

    [theme.breakpoints.down('mobile_md2')]:{
        margin: '20px 0',
        width: '40%',
    },
})

const Field = styled(TextField)({ 
   width: '40ch', 
   cursor : 'pointer',
   margin: '0 0 0  -100%',

   [theme.breakpoints.down('mobile_lg2')]:{
        margin: '20px 0 0 0',
        marginLeft: '-50%',
        width: '50%',
   },

    [theme.breakpoints.down('mobile_md2')]:{
        margin: '20px 0 0 10px',
        width: '60%'
    },

   [theme.breakpoints.down('mobile_sm2')]:{
        margin: '20px 10px',
        width: '50%'
   }
})

export default function UpdateForm() {
     const { image } = store[0];

  const [file, setFile] = useState(image);

    const  handleChange = (e) => {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

  return (
    <>
        <EStack>
            <Mymedia
                component="img"                                
                image = {file}
                className='writeImg' />     
            <Field
                label={<AttachFile />}
                placeholder='Attach Fil'
                onChange={handleChange}
                type="file"
                InputProps={{
                    startAdornment: <InputAdornment position="start" ></InputAdornment>,
                }} />
        </EStack>

        <FieldContainer>
            <FieldName
                label="First Name"
                id="outlined-start-adornment"
                placeholder='John'
                InputProps={{
                    startAdornment: <InputAdornment position="start" ></InputAdornment>,
                }} />

            <FieldName
                label="Last Name"
                id="outlined-start-adornment"
                placeholder='Doe'
                InputProps={{
                    startAdornment: <InputAdornment position="start" ></InputAdornment>,
                }} />
        </FieldContainer>

        <TextContainer>          
            <FieldText
                label="username"
                id="outlined-start-adornment"
                placeholder='jonskee'
                InputProps={{
                    startAdornment: <InputAdornment position="start" ></InputAdornment>,
                }} />
        </TextContainer>

        <TextContainer>          
            <FieldText
                label="email"
                type='email'
                id="outlined-start-adornment"
                placeholder='jonskee'
                InputProps={{
                    startAdornment: <InputAdornment position="start" ></InputAdornment>,
                }} />
        </TextContainer>

        <TextContainer>         
            <FieldText
                label="Old password"
                type="password"
                id="outlined-start-adornment"
                InputProps={{
                    startAdornment: <InputAdornment position="start" ></InputAdornment>,
                }} />
        </TextContainer>

        <TextContainer>
            <FieldText
                label="New Password"
                type="password"
                id="outlined-start-adornment"
                InputProps={{
                    startAdornment: <InputAdornment position="start" ></InputAdornment>,
                }} />
        </TextContainer>

        <TextContainer>          
            <FieldText
                label="Comfirm password"
                type="password"
                id="outlined-start-adornment"
                InputProps={{
                    startAdornment: <InputAdornment position="start" ></InputAdornment>,
                }} />
        </TextContainer>

        <TextContainer>          
            <MyButton variant='contained'>Update</MyButton>
        </TextContainer>

    </>
  );
}
