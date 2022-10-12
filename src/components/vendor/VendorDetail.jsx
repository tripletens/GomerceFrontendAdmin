import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Stack } from '@mui/system';
import { grey } from '@mui/material/colors';
import store from '../../my_db'
import { CardMedia } from '@mui/material';
import { Text7, Text4, Text5, Text6, BootstrapButton } from './postStyle'


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #fff',
    boxShadow: 24,
    borderRadius: '30px',
    p: 3,
};


const VendorDetail = ({ setOpen, open, id }) => {

    const [myStore, setMyStore] = useState([])
    const handleClose = () => setOpen(!open);

    useEffect(() => {
        const fetchData = () => {
            setMyStore(store.filter((newItem) =>  newItem.id === id)) 
        }
        fetchData();     
    }, [id])
    
    return (
        <div>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description" >
            <Box sx={style}>
            <Box sx={{display: 'flex', flexDirection: 'row', flexWrap:'wrap'}}>
            {
                 myStore.length > 0 && myStore.map((store, index) => {
                    const { id, first_name, last_name, mobile, image, email, birthday, Biz_address, Sale_focus, items, sold, payout} = store;
                  return(
                    <>
                        <Stack key={id} className='ven-stack'>
                            <CardMedia
                                sx={{width: 120, height: 120, borderRadius: '20px', marginBottom: '20px'}}
                                component="img"                                
                                image={image}
                                alt={first_name} 
                                className='card-media'/>
                            
                            <Typography variant='h6' sx={{color: grey[700]}}>
                                {`${first_name} ${last_name}`}
                            </Typography>
                            <Typography variant='p' sx={{color: grey[700], margin: '30px auto'}}>
                                {email}
                            </Typography>
                            <BootstrapButton variant='contained'>Follow</BootstrapButton>
                             <Stack direction="row" justifyContent='space-between' sx={{width:'100%', marginTop: '30px'}}>
                                <Text5>items</Text5>
                                <Text5>Sold</Text5>
                                <Text5>Payout</Text5>
                            </Stack>
                            <Stack direction="row" justifyContent='space-between' sx={{width:'100%'}}>
                                <Text7>{items}</Text7>
                                <Text7>{sold}</Text7>
                                <Text7>{payout}</Text7>
                            </Stack>
                        </Stack>
                        <Stack key={id+index} sx={{direction:'column', width:'50%',  minHeight: '5vh'}} >
                            <Typography variant='h5' sx={{color: grey[800]}}>Contact Details</Typography>
                            <Text6>Email Address</Text6>
                            <Text4>{email}</Text4>
                            <Text6>Phone Number</Text6>
                            <Text4>{mobile}</Text4>
                            <Text6>Birthday</Text6>
                            <Text4>{birthday}</Text4>
                            <Text6>Sales Focus</Text6>
                            <Text4>{Sale_focus}</Text4>
                            <Text6>Business Address</Text6>
                            <Text4>{Biz_address}</Text4>
                        </Stack>
                    </>
                  )
                })
            }
            </Box>
            </Box>
        </Modal>
        </div>
    );
}
export default VendorDetail