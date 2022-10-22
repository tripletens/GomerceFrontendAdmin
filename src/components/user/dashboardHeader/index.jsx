import { ChevronRight } from '@mui/icons-material'
import { Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import ViewAll from '../ViewAll'


function DashboardHeader({ pageName }) {
  return (
    <>
      <Stack direction="row" justifyContent='space-between' alignItems="center" margin='30px 0'>
        <Stack direction="column">
          <Typography variant="h6">
            {pageName} Card
          </Typography>
          <Stack direction="row" alignItems='center'>
            <Typography href="#" textDecoration="none">
              Home
            </Typography>
            <ChevronRight />
            <Typography> {pageName}s</Typography>
          </Stack>
        </Stack>
        <ViewAll />
      </Stack>
    </>
  )
}

export default DashboardHeader