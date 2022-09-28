import { ChevronRight } from '@mui/icons-material'
import { Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import AddItem from './AddItem';


function Header() {
  return (
    <>
        <Stack direction="row" justifyContent='space-between' alignItems="center" margin='30px 0'>
            <Stack direction="column">
                <Typography variant="h6">Vendor Card</Typography>
                <Stack direction="row" alignItems='center'>
                    <Typography href="#" textDecoration="none"> 
                        Home
                    </Typography>
                    <ChevronRight />
                    <Typography> Vendors</Typography>
                </Stack>
            </Stack>
            <AddItem />
        </Stack>
    </>
  )
}

export default Header