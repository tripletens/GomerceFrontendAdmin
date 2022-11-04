import './vendorprof.css'
import { Box, Stack } from '@mui/system'
import React from 'react'
import { DiamondOutlined, Person4Outlined, ShoppingCart } from '@mui/icons-material'
import { Typography } from '@mui/material'
import NoTable from './NoTable'
import OrderTable from './OrderTable'

const VendorActivity = () => {
    let users = 5300;
    let order = 1953;
    let sales = 1450;
  return (
    <>
        <Stack direction='row' justifyContent="space-around" alignItems='center'>
            <Box className='box'>
                <Box className='one-left left'>
                    <Person4Outlined sx={{fontSize:35}}/>
                </Box>
                <Box className='one-right'>
                    <Stack direction='column'>
                        <Typography sx={{fontWeight:'bold', fontSize:24, color:'darkgray'}}>{users}</Typography>
                        <Typography sx={{fontSize:17, color:'darkgray'}}>New Users</Typography>
                    </Stack>
                </Box>
            </Box>
            <Box className='box two'>
                 <Box className='one-left center'>
                    <ShoppingCart sx={{fontSize:35}} />
                </Box>
                <Box className='one-right'>
                   <Stack direction='column'>
                        <Typography sx={{fontWeight:'bold', fontSize:24, color:'darkgray'}}>{order}</Typography>
                        <Typography sx={{fontSize:17, color:'darkgray'}}>Order Placed</Typography>
                    </Stack>
                </Box>
            </Box>
            <Box className='box three'>
                 <Box className='one-left right'>
                    <DiamondOutlined sx={{fontSize:35}} />
                </Box>
                <Box className='one-right'>
                   <Stack direction='column'>
                        <Typography sx={{fontWeight:'bold', fontSize:24, color:'darkgray'}}>{sales}</Typography>
                        <Typography sx={{fontSize:17, color:'darkgray'}}>Total Sales</Typography>
                    </Stack>
                </Box>
            </Box>
        </Stack>

        <Stack direction='column' margin='40px 10px 40px 20px'>
            <NoTable />
        </Stack>

        <Stack direction='row'margin='0 10px 10px 20px' >
            <OrderTable />
        </Stack>
    </>
  )
}

export default VendorActivity