import React from 'react';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/system';
import { grey } from '@mui/material/colors';
import { ThemeProvider } from "@mui/material/styles";
import { Facebook, Instagram, LinkedIn, Twitter, WhatsApp } from '@mui/icons-material';
import styled from '@emotion/styled';
import {MediaCard, Text4, Text6, Text8, Text9, Text10, Text11, MyButton } from './postStyle'
import store from '../../my_db';
import { theme } from './breakpoints'
import { Component } from './getWindowDimensions'
import './vendorprof.css';


const EStactic = styled(Stack)({ 

    flexDirection:'column',
    alignItems: 'center',

    [theme.breakpoints.down("ipad")]:{          // 835px --> 0px 
        width:'100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    

    [theme.breakpoints.down("mobile_lg2")]:{          // 429px --> 0px 
        width:'100%',
        margin: '10px 0 10px -18%',
        justifyContent: 'center',
    },

    [theme.breakpoints.down("mobile_lg1")]:{          // 414px --> 0px 
        width:'98%',
        margin: '10px 0 10px -22%',
        justifyContent: 'center',
    },

    [theme.breakpoints.down('mobile_md1')]:{          //375px --> 0px
        width: '88%',
        margin: '10px 0 10px -32%',
    },

    [theme.breakpoints.down('mobile_sm2')]:{          //360px --> 0px
        width: '84%',
        margin: '10px 0 10px -36%',
    },
    

});

const EStack = styled(Stack)({
    flexDirection:'column',
    alignItems: 'center',
    borderTop:'1px solid rgb(238, 238, 238)', 
    margin:'20px 0', 
    paddingTop:'20px',

    [theme.breakpoints.down("mobile_lg2")]:{          // 429px --> 0px 
        width:'100%',
        margin: '10px 0 10px -18%',
        justifyContent: 'center',
    },
    
    [theme.breakpoints.down("mobile_lg1")]:{          // 0px, --> 360px max
        width:'98%',
        margin: '10px 0 10px -22%',
        justifyContent: 'center',
    },

    [theme.breakpoints.down('mobile_md1')]:{          //395px --> infinity
        width: '88%',
        margin: '10px 0 10px -32%',
    },

    [theme.breakpoints.down('mobile_sm2')]:{          //360px --> 0px
        width: '84%',
        margin: '10px 0 10px -36%', 
    },

});


const style =  (props) => ({
    boxSizing: 'border-box', 
    width: '40px',
    height: '40px', 
    padding: '7px',
    boxShadow:'0 5px 3px rgba(0,0,0,0.3)',
    background: 'linear-gradient(0deg, #ddd, #fff)',
    transition: '0.5s',
    borderRadius:'50%',
    margin: '0 5px',
    color: grey[600],
    '&:hover':{
        color: props,
        boxShadow: '0 2px 5px rgba(0,0,0,0.3)'
    }
})

const Social = styled(Stack)(({theme}) => ({
    flexDirection: 'row',
    margin: '20px 0',
    width:'100%', 
    justifyContent: 'space-evenly', 
    alignItems:'center',
    
    [theme.breakpoints.down("mobile_lg2")]:{          // 429px --> 0px 
        width:'100%',
        margin: '10px 0 10px -18%',
        justifyContent: 'center',
    },

    [theme.breakpoints.down("mobile_lg1")]:{          // 0px, --> 360px max
        width:'98%',
        margin: '10px 0 10px -22%',
        justifyContent: 'center',

    },

    [theme.breakpoints.down('mobile_md1')]:{          //395px --> infinity
        width: '88%',
        margin: '10px 0 10px -32%',
    },

    [theme.breakpoints.down('mobile_sm2')]:{          //360px --> 0px
        width: '84%',
        margin: '10px 0 10px -36%', 
  
    },
}))



const ProfileStatic = () => {
    const { id, first_name, last_name, mobile, image, email, birthday, Biz_address, Sale_focus, items, sold, payout} = store[0];
    return (
        <>  
            <ThemeProvider theme ={theme}>
                <EStactic key={id} >
                    <MediaCard component="img" image={image} alt={first_name} className='Vcard-media' />
                    <Text11 variant='h6' sx={{color: grey[700]}}>
                        {`${first_name} ${last_name}`}
                    </Text11>

                    <Text11>
                        {email}
                    </Text11>

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
                </EStactic>
        
                <EStack >
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
                </EStack>

                <Social>
                        <Facebook  sx={style('#1877F2')}  /> 
                        <Twitter   sx={style('rgb(29, 161, 242)')}/>
                        <Instagram sx={style('#E4405F')}/>
                        <LinkedIn  sx={style('#0e76a8')}/>
                        <WhatsApp  sx={style('#128C7E')} />
                </Social>
            </ThemeProvider>
        </>
    )
}

export default ProfileStatic