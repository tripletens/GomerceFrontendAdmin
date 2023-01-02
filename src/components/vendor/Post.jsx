import './post.css'
import React from 'react'
import { Stack, CardMedia, Typography, Card, 
        CardHeader, Avatar, IconButton, CardContent } from '@mui/material';
import { cyan } from '@mui/material/colors';
import { Box } from '@mui/system';
import { Text, Text2, Text3 } from './postStyle'
import { AllInclusive } from '@mui/icons-material';
import VendorDetail from './VendorDetail';


const Post = ({ id, image, first_name, last_name, mobile, email, items, sold, payout}) => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  return (
    <>
      <Card className ='card' elevation = {2} >
        <CardHeader
          avatar = {
            <Avatar sx = {{ bgcolor: cyan[300] }} aria-label="recipe">
              { first_name[0]}{last_name[0] }
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
                  <AllInclusive onClick={handleOpen}/>
            </IconButton>
          } />
          <Box className='Box1'>
            <Box  className='Box2'>
              <CardMedia
                component="img"
                image={image}
                alt={first_name} 
                className='card-media'/>
            </Box>
          </Box>
        <CardContent>
          <Stack direction='column' alignItems='center'>
            <Typography variant='h6'>{first_name} {last_name}</Typography>
            <Text3>{mobile}</Text3>
            <Text3>{email}</Text3>
          </Stack>
          <Stack direction="row" justifyContent='space-between'>
            <Text>items</Text>
            <Text>Sold</Text>
            <Text>Payout</Text>
          </Stack>
          <Stack direction="row" justifyContent='space-between'>
            <Text2>{items}</Text2>
            <Text2>{sold}</Text2>
            <Text2>{payout}</Text2>
          </Stack>
        </CardContent>
      </Card>
      {open && <VendorDetail id ={id} open ={open} setOpen={setOpen} />}
    </>
  )
}

export default Post;