import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Stack } from '@mui/system';
import { Typography } from '@mui/material';
import { Cached, MoreVert } from '@mui/icons-material';
import { grey } from '@mui/material/colors';
import {categories} from '../../my_db'



export default function NoTable() {


  return (
    <Paper sx={{ width: '99%', overflow: 'auto' }}>
      <Stack direction="column" sx={{ maxHeight: 440 }}>

          <Stack direction='row' 
                 sx={{height:'15vh', justifyContent:'space-between', alignItems:'center', padding:'20px', borderBottom:'1px solid lightgrey', position:"sticky", zIndex:'999' }}>
            <Typography sx={{fontSize:'20px', color:grey[600]}}>Latest Notifications</Typography>
            <Stack direction='row' sx={{fontSize:'20px', color:grey[600]}} >
                <Cached sx={{marginRight:'5px'}}/>
                <MoreVert />
            </Stack>
          </Stack>

          <Stack>
           { 
              categories.map((category, index) => {
                const { id, img, title, desc, time_symbol, time, color } = category;
                  return(
                    <>
                      <Stack direction='row' key={id} 
                            sx={{justifyContent:'space-between', padding:'20px'}} >
                        <Stack direction='row'>
                            <Stack 
                                sx={{width: '55px', color: 'white', padding: '3px', marginRight: '15px', borderRadius: '15px', height:'55px', background:color, justifyContent:'center', alignItems:'center'}}>
                                {img}
                            </Stack> 
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
                      </Stack>
                    </>
                  )
              })
           }
          </Stack>
      </Stack>
    </Paper>
  );
}
