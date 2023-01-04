import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Stack, width } from '@mui/system';
import { grey } from '@mui/material/colors';
import store from '../../my_db'
import { CardMedia } from '@mui/material';
import { Text7, Text4, Text5, Text6, TextMobile, BootstrapButton } from './postStyle'
import { Close } from '@mui/icons-material';
import styled from '@emotion/styled';
import { theme } from './breakpoints'


const Modalcontainer = styled(Box)({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '800px',
    background: 'white',
    border: '2px solid #fff',
    boxShadow: 24,
    borderRadius: '30px',
    p: 3,   
    [theme.breakpoints.down('ipad')]:{
         width: '750px',
    }, 
    [theme.breakpoints.down('mobile_lg2')]:{
         width: '350px',
    } 
})

const Innercontainer = styled(Box)({
    display: 'flex', 
    flexDirection: 'row', 
    flexWrap:'wrap',
    width: '780px',
    borderRadius: '30px',
    [theme.breakpoints.down('mobile_lg2')]:{
         width: '320px',
    } 
})

const Leftstack = styled(Stack)({
    flexDirection: 'column',
    width: '50%',
    minHeight: '5vh',
    alignItems: 'center',
    borderRadius: '30px',
})

const CloseContainer = styled(Stack)({
    direction :"row",
    justifyContent  : 'space-between',
    width:'100%',
    margin: '10px 0',
})

const CloseBtn = styled(Close)({
    margin: ' 0 10px',
    '&:hover': {
        backgroundColor: '#000', 
        color: '#fff' 
    },
})

const MediaCard = styled(CardMedia)({
    width: 120,
    height: 120, 
    borderRadius: '20px', 
    marginBottom: '20px',
})

const Itemcontainer = styled(Stack)({
    flexDirection :"row",
    justifyContent :'space-between',
    width:'100%', 
    marginTop: '10px',
    [theme.breakpoints.down('mobile_lg2')]:{
        display: 'none',
    } 
})

const EmailText = styled(Typography)({
    color: grey[700], 
    margin: '30px auto', 
    [theme.breakpoints.down('mobile_lg2')]:{
        margin: '10px auto', 
        wordBreak:'break-word',
        width: '60%',
    }
})
const ItemMobile = styled(Stack)({
     display: 'none',
    [theme.breakpoints.down('mobile_lg2')]:{
        display: 'contents',
        flexDirection :"column",
        justifyContent :'space-between',
        width:'100%', 
        marginTop: '10px',
    } 
})

const Itemsold = styled(Stack)({
    flexDirection :"row",
    justifyContent :'space-between',
    width:'100%', 
    marginBottom: '10px',
    [theme.breakpoints.down('mobile_lg2')]:{
       display: 'none',
    } 
})

const Rightstack = styled(Stack)({
    flexDirection:'column',
    width:'50%',  
    minHeight: '5vh',
    marginTop: '20px',
})


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
            <Modalcontainer>
                <Innercontainer>{
                    myStore.length > 0 && myStore.map((store, index) => {
                        const { id, first_name, last_name, mobile, image, email, birthday, Biz_address, Sale_focus, items, sold, payout} = store;
                    return(
                        <>
                            <Leftstack key={id}>
                                <CloseContainer>
                                    <CloseBtn onClick={handleClose} />
                                </CloseContainer>
                                <MediaCard
                                    component="img"                                
                                    image={image}
                                    alt={first_name}/>
                                
                                <Typography variant='h6' sx={{color: grey[700]}}>
                                    {`${first_name} ${last_name}`}
                                </Typography>
                                <EmailText variant='p'>{email}</EmailText>
                                <BootstrapButton variant='contained'>Follow</BootstrapButton>

                                <Itemcontainer>
                                    <Text5>items</Text5>
                                    <Text5>Sold</Text5>
                                    <Text5>Payout</Text5>
                                </Itemcontainer>

                                <ItemMobile>
                                    <TextMobile>items: {items}</TextMobile>
                                    <TextMobile>Sold : {sold}</TextMobile>
                                    <TextMobile>Payout: {payout}</TextMobile>
                                </ItemMobile>

                                <Itemsold direction="row" justifyContent='space-between' sx={{width:'100%'}}>
                                    <Text7>{items}</Text7>
                                    <Text7>{sold}</Text7>
                                    <Text7>{payout}</Text7>
                                </Itemsold>

                            </Leftstack>
                            <Rightstack key={id+index}>
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
                            </Rightstack>
                        </>
                    )
                    })
                }
                </Innercontainer>
            </Modalcontainer>
        </Modal>
    </div>
    );
}
export default VendorDetail