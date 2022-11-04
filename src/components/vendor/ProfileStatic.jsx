import React from 'react';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/system';
import { grey } from '@mui/material/colors';
import store from '../../my_db'
import { CardMedia } from '@mui/material';
import {Text4, Text6, Text8, Text9, Text10, MyButton } from './postStyle'
import { Facebook, Instagram, LinkedIn, Twitter, WhatsApp } from '@mui/icons-material';
import './vendorprof.css'

const style =  (props) => ({
    boxSizing: 'border-box', 
    width: '40px',
    height: '40px', 
    padding: '7px',
    boxShadow:'0 5px 3px rgba(0,0,0,0.3)',
    background: 'linear-gradient(0deg, #ddd, #fff)',
    transition: '0.5s',
    borderRadius:'50%',
    color: grey[600],
    '&:hover':{
        color: props,
        boxShadow: '0 2px 5px rgba(0,0,0,0.3)'
    }
})

const ProfileStatic = () => {
    const { id, first_name, last_name, mobile, image, email, birthday, Biz_address, Sale_focus, items, sold, payout} = store[0];
  return (
        <>
            <Stack direction='column' alignItems='center' key={id} >
                <CardMedia
                    sx={{width: 120, height: 120, borderRadius: '20px', marginBottom: '20px', marginTop:'20px'}}
                    component="img"                                
                    image={image}
                    alt={first_name} 
                    className='Vcard-media' />
                
                <Typography variant='h6' sx={{color: grey[700]}}>
                    {`${first_name} ${last_name}`}
                </Typography>

                <Typography variant='p' sx={{color: grey[700], margin: '30px auto'}}>
                    {email}
                </Typography>

                <MyButton variant='contained'>Follow</MyButton>

                <Stack direction="row">
                    <Text8>items</Text8>
                    <Text8>Sold</Text8>
                    <Text8>Payout</Text8>
                </Stack>
                <Stack direction="row">
                    <Text9>{items}</Text9>
                    <Text9>{sold}</Text9>
                    <Text9>{payout}</Text9>
                </Stack>
            </Stack>
    
            <Stack direction='column' alignItems='center' 
                sx={{borderTop:'1px solid rgb(238, 238, 238)', margin:'20px 0', paddingTop:'20px'}} >
                <Typography variant='h5' sx={{color: grey[800]}}>Contact Info</Typography>
                <Text6>Email Address</Text6>
                <Text4>{email}</Text4>
                <Text6>Phone Number</Text6>
                <Text4>{mobile}</Text4>
                <Text6>Birthday</Text6>
                <Text4>{birthday}</Text4>
                <Text6>Sales Focus</Text6>
                <Text10>{Sale_focus}</Text10>
                <Text6>Business Address</Text6>
                <Text10>{Biz_address}</Text10>
            </Stack>

            <Stack direction='row'
                sx={{margin: '20px 0', width:'100%', justifyContent: 'space-evenly', alignItems:'center'}}>
                    <Facebook  sx={style('#1877F2')}  /> 
                    <Twitter   sx={style('rgb(29, 161, 242)')}/>
                    <Instagram sx={style('#E4405F')}/>
                    <LinkedIn  sx={style('#0e76a8')}/>
                    <WhatsApp  sx={style('#128C7E')} />
            </Stack>
        </>
  )
}

export default ProfileStatic