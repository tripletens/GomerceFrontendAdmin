import * as React from 'react';
import { useParams } from 'react-router-dom';
// import { Route, useParams, Navigate  } from 'react-router-dom';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Stack } from '@mui/system';
import { grey } from '@mui/material/colors';
import store from '../../../my_db'
import { Typography } from '@mui/material';
// import { CardMedia, Typography } from '@mui/material';


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

const ViewOneVendor = () => {

 const [open, setOpen] = React.useState(true);
  // const { divId } = useParams();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  console.log('open');

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{display: 'flex', flexDirection: 'row', flexWrap:'wrap'}}>
            {
                store.map((item, index) => {
                    const {first_name, last_name} = item;
                    // const {first_name, last_name, mobile, image, email, birthday, Biz_address, Sale_focus, items, sold, payout } = item;
                    return(
                        <>
                            <Stack key={divId} sx={{background: grey[50], direction:'column', width:'50%', minHeight: '5vh'}}>
                                 <Typography>{first_name}</Typography>
                            </Stack>
                            <Stack sx={{background:grey[100], direction:'column', width:'50%',  minHeight: '5vh'}} key={divId}>
                                 <Typography>{last_name}</Typography>
                            </Stack>
                        </>
                    )
                })
            }
            
          </Box>
        </Box>
        {/* <Route path="/vendors" element={ <Navigate to="/vendors" /> } /> */}
      </Modal>
    </div>
  );
}

export default ViewOneVendor