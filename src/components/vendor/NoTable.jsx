import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Stack, Box, width } from '@mui/system';
import { Typography } from '@mui/material';
import { Cached, MoreVert } from '@mui/icons-material';
import { grey, cyan } from '@mui/material/colors';
import {categories} from '../../my_db'
import styled from '@emotion/styled';
import { theme } from './breakpoints'

const Epaper = styled(Paper)({
  width: '100%', 
  overflow: 'auto',

  [theme.breakpoints.up('tablet')]:{
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  [theme.breakpoints.down(theme.breakpoints.values.md)]: {
   width: '100%',
   margin: '10px auto',
   padding:'0',
  },

  [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
   width: '84%',
   margin: '10px 60px 10px 0',
  }
})

const MyStack = styled(Stack)({
    width: '55px', 
    color: 'white',
    padding: '3px', 
    marginRight: '15px', 
    borderRadius: '15px', 
    height:'55px', 
    justifyContent:'center', 
    alignItems:'center',
    [theme.breakpoints.down(theme.breakpoints.values.md)]:{
      width: '50px', 
      height:'50px', 
      borderRadius: '5px', 
    },
    [theme.breakpoints.down(theme.breakpoints.values.sm)]:{
      width: '50px', 
      height:'50px', 
      borderRadius: '5px', 
    }
})


const NotableContainer = styled(Stack)({
    maxHeight: 440,
    flexDirection:"column",
    width: '100%',
    [theme.breakpoints.down(theme.breakpoints.values.md)]:{
      margin: '0',
      width: '100%',
    },
    [theme.breakpoints.down(theme.breakpoints.values.sm)]:{
      margin: '0',
      width: '100%',
    }
})

const NIContainer = styled(Stack)({
  flexDirection:'row',
  justifyContent:'space-between', 
  padding:'20px',
  [theme.breakpoints.down(theme.breakpoints.values.md)]:{
    margin: '0',
    width: '100%',
  },
  [theme.breakpoints.down(theme.breakpoints.values.sm)]:{
    margin: '0',
    width: '100%',
  }
})

const Notableheader = styled(Stack)({
  flexDirection:'row',
  height:'15vh', 
  justifyContent:'space-between', 
  alignItems:'center', 
  padding:'20px', 
  borderBottom:'1px solid lightgrey', 
  position:"sticky", 
  zIndex:'999',
  [theme.breakpoints.down(theme.breakpoints.values.md)]:{
    margin: '0',
    width: '100%',
  },
  [theme.breakpoints.down(theme.breakpoints.values.sm)]:{
    margin: '0',
    width: '100%',
  }
})

export default function NoTable() {

  return (
    <Epaper>
      <NotableContainer>
          <Notableheader>
            <Typography sx={{fontSize:'20px', color:grey[600]}}>Latest Notifications</Typography>
            <Stack direction='row' sx={{fontSize:'20px', color:grey[600]}} >
                <Cached sx={{marginRight:'5px'}}/>
                <MoreVert />
            </Stack>
          </Notableheader>

          <Stack>
           { 
              categories.map((category, index) => {
                const { id, img, title, desc, time_symbol, time, color } = category;
                  return(
                    <>
                      <NIContainer key={id}>
                          <Stack direction='row'>
                              <MyStack sx={{background:color}}>
                                  {img}
                              </MyStack> 
                              <Stack direction='column'  
                                  sx={{justifyContent:'center', alignItems:'flex-start'}}>
                                <Typography>{title}</Typography>
                                <Typography>{desc}</Typography>
                              </Stack>
                          </Stack>
                          <Stack direction='row' sx={{justifyContent:'center', alignItems:'center'}}>
                              <Typography  sx={{margin: '5px 10px 0 0', color:grey[500]}}>{time_symbol}</Typography>
                              <Typography  sx={{color:grey[500]}}> {time}</Typography>
                          </Stack>
                      </NIContainer>
                    </>
                  )
              })
           }
          </Stack>
      </NotableContainer>
    </Epaper>
  );
}
