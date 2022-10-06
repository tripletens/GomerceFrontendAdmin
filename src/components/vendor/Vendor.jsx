import { Box } from '@mui/system'
import React from 'react'
import Post from './Post';
import store from '../../my_db'
import {Grid} from '@mui/material';


const Vendor = () => {
  return (
        <Box
        sx={{
            backgroundColor: 'white',
            borderRadius: '10px',
            boxShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
            width: '94%',   
            padding: '50px 30px 30px 45px',
            margin: '0 auto',
          }}>
          <Grid sx={{ flexGrow: 1,   gap: 2, justifyContent: 'center', alignItems: 'center' }} container spacing={2}>
                {store.map((vendor)=> {
                  return <Post key={vendor.id} {...vendor} />
                })}
          </Grid>
        </Box>
  )
}

export default Vendor