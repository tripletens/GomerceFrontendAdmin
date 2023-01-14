import './vendorprof.css'
import { Box, Stack } from '@mui/system'
import React from 'react'
import { DiamondOutlined, Person4Outlined, ShoppingCart } from '@mui/icons-material'
import { Typography } from '@mui/material'
import NoTable from './NoTable'
import OrderTable from './OrderTable'
import styled from '@emotion/styled';
import { ThemeProvider } from "@mui/material/styles";
import { theme } from './breakpoints'



const MyStack = styled(Box)({ 
    display: 'flex',
    flexDirection : 'row',
    flexWrap: 'wrap',
    justifyContent :"space-around", 
    alignItems:'space-around',
    width: '100%',

    [theme.breakpoints.down("ipad")]:{          // 835px --> 0px 
        width:'81.5%',
        justifyContent: 'center',
        alignItems: 'center',
        margin:'0 0 0 9.6%',
    },

    [theme.breakpoints.down("ajiozpad")]:{          // 820px --> 0px 
        width:'81%',
        justifyContent: 'center',
        alignItems: 'center',
        margin:'0 0 0 9.6%',
    },

    [theme.breakpoints.down("sampad")]:{          // 800px --> 0px 
        width:'81%',
        justifyContent: 'center',
        alignItems: 'center',
        margin:'0 0 0 9.6%',
    },

    [theme.breakpoints.down('minipad')]:{       // 768px --> 0px
        margin:'0 0 0 -15%',
        width: '81%',
        flexDirection : 'column',
    },

    [theme.breakpoints.down('mobile_lg2')]:{
        margin:'0 0 0 -6.5%',
        width: '60%',
        flexDirection : 'column',
    },

    [theme.breakpoints.down('mobile_lg1')]:{
        margin:'0 0 0 -6.5%',
        width: '58%',
        flexDirection : 'column',
    },

    [theme.breakpoints.down('mobile_md2')]:{
        margin:'0 0 0 -6.5%',
        width: '54%',
        flexDirection : 'column',
    },

    [theme.breakpoints.down('mobile_md1')]:{
        margin:'0 0 0 -6.6%',
        width: '51.8%',
        flexDirection : 'column',
    },

    [theme.breakpoints.down('mobile_sm2')]:{
        margin:'0 0 0 -6.6%',
        width: '49%',
        flexDirection : 'column',
    },
})

const MyPerson4Outlined = styled(Person4Outlined)(({theme}) => ({
    fontSize:35,
    [theme.breakpoints.down('sm')]:{
        fontSize:35
    }
}))

const VendorActivity = () => {
    let users = 5300;
    let order = 1953;
    let sales = 1450;
    return (
        <>
          <ThemeProvider theme ={theme}>
            <MyStack>
                <Box className='box'>
                    <Box className='one-left left'>
                        <MyPerson4Outlined />
                    </Box>
                    <Stack direction='column' className='one-content'>
                        <Typography sx={{fontWeight:'bold', fontSize:24, color:'darkgray'}}>{users}</Typography>
                        <Typography sx={{fontSize:17, color:'darkgray'}}>New Users</Typography>
                    </Stack>
                </Box>
                <Box className='box'>
                    <Box className='one-left center'>
                        <ShoppingCart sx={{fontSize:35}} />
                    </Box>
                    <Stack direction='column' className='one-content'>
                            <Typography sx={{fontWeight:'bold', fontSize:24, color:'darkgray'}}>{order}</Typography>
                            <Typography sx={{fontSize:17, color:'darkgray'}}>Order Placed</Typography>
                    </Stack>
                </Box>
                <Box className='box'>
                    <Box className='one-left right'>
                        <DiamondOutlined sx={{fontSize:35}} />
                    </Box>
                    <Stack direction='column' className='one-content'>
                        <Typography sx={{fontWeight:'bold', fontSize:24, color:'darkgray'}}>{sales}</Typography>
                        <Typography sx={{fontSize:17, color:'darkgray'}}>Total Sales</Typography>
                    </Stack>
                </Box>
            </MyStack>
            <Stack direction='column' className = "Notable-container">
                <NoTable />
            </Stack>

            <Stack direction='row'className = "Notable-container ex" >
                <OrderTable />
            </Stack>
        </ThemeProvider>
        </>
    )
}
export default VendorActivity;