import { Box } from '@mui/system'
import React from 'react'
import Post from './Post';
import store from '../../my_db'
import {Grid} from '@mui/material';
import './post.css'

const Vendor = () => {
  return (
      <Box className='vendor-card'>
        <Grid sx={{ flexGrow: 1,   gap: 2, justifyContent: 'center', alignItems: 'center' }} container spacing={2}>
            {store.map((vendor)=> {
              return <Post key={vendor.id} {...vendor} />
            })}
        </Grid>
      </Box>
  )
}

export default Vendor