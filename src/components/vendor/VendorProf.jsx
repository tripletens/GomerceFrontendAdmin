// import { Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React from 'react'
import ProfileStatic from './ProfileStatic';
import TabPanel from './TabPanel';
import './vendorprof.css'



const VendorProf = () => {
  return (
    <>
      <Box className='vendprof-card'>
        
          <Stack 
            direction='column' 
            alignItems='center' 
            className="leftBar" 
            flexWrap='wrap'
            justifyContent='flex-start'>
              <ProfileStatic />
          </Stack>

          <Box className="rightBar" >
              <TabPanel />
          </Box>

      </Box>
    </>
  )
}

export default VendorProf