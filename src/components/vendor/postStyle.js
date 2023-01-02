import styled from '@emotion/styled';
import { Button, CardMedia, Modal, Typography} from "@mui/material";
import { cyan } from '@mui/material/colors';
import { Box } from "@mui/system";
import { theme } from './breakpoints'


export const MediaCard = styled(CardMedia)({
  width: 80, 
  height: 80, 
  borderRadius: '20px', 
  marginBottom: '20px', 
  marginTop:'20px',
  // [theme.breakpoints.down("sm")]: {
  //   width: 40, 
  //   height: 40, 
  //   borderRadius: '10px', 
  //   marginBottom: '10px', 
  //   marginTop:'10px',
  // },
})


export const Text = styled(Typography)({
  backgroundColor: '#eee', 
  padding: '3px 10px 0px 10px', 
  borderRadius: '10px', 
  fontSize: '14px',
  margin: '10px auto',
  marginTop: '20px'
})

export const Text2 = styled(Typography)({
  fontWeight: 'bold',
  fontSize: '15px',
  margin: '0 auto',
  marginLeft: '30px',
  color: '#757575'
})

export const Text3 = styled(Typography)({
  color: '#757575',
  fontSize: '14px',
  margin: '0 auto',
})

export const Text4 = styled(Typography)({
  color: '#757575',
  fontSize: '16px',
  padding: '0',
  margin: '0',
  // [theme.breakpoints.up('tablet')]:{
  //   fontSize: 25,
  //   fontFamily: 'monospace',
  //   width: '100%',
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
})

export const Text5 = styled(Typography)({
  backgroundColor: '#eee', 
  padding: '3px 10px', 
  borderRadius: '10px', 
  fontSize: '14px',
  margin: '10px 30px 10px 40px',
  marginTop: '20px'
})

export const Text6 = styled(Typography)({
  fontSize: '17px',
  fontWeight: 'bold',
  color: 'gray',
  marginTop: '20px',
  // [theme.breakpoints.up('tablet')]:{
  //   fontSize: 25,
  //   fontFamily: 'monospace',
  //   width: '100%',
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
})


export const Text7 = styled(Typography)({
  fontWeight: 'bold',
  fontSize: '15px',
  margin: '0 auto',
  marginLeft: '60px',
  color: '#757575'
})

export const Text8 = styled(Typography)({
  fontWeight: 'bold',
  fontSize: '15px',
  margin: '10px auto',
  color: '#757575',
  padding: '0 20px',
  // [theme.breakpoints.up('tablet')]:{
  //   fontSize: 25,
  //   fontFamily: 'monospace',
  //   width: '100px',
  //   margin: '0',
  // },
})

export const Text9 = styled(Typography)({
  margin: '0 auto',
  color: '#757575',
  padding: '0 20px',
  // [theme.breakpoints.up('tablet')]:{
  //   fontSize: 25,
  //   fontFamily: 'monospace',
  //   width: '100px',
  //   padding: '0 20px',
  //   margin: '0',
  // },
})

export const Text10 = styled(Typography)({
  color: '#757575',
  fontSize: '15px',
  padding: '0 20px 0 60px',
  margin: '0',
  width: '100%',
  // [theme.breakpoints.between('tablet', 'ipad')]:{
  //   fontSize: 20,
  //   fontFamily: 'monospace',
  //   width: '100%',
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
})

export const Text11 = styled(Typography)({
   
 [theme.breakpoints.between('tablet', 'ipad')]:{
    fontSize: 25,
    fontFamily: 'monospace',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
})


export const SytledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  bgcolor: "white"
});

export const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

export const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  borderRadius: '5em',
  fontSize: 14,
  height: "35px",
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: cyan[500],
  borderColor: '#0288d',
  // [theme.breakpoints.down("sm")]: {
  //   fontSize: "12px",
  // },
  '&:hover': {
    backgroundColor: '#039be5',
    borderColor: '#039be5',
  }
});

export const MyButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  borderRadius: '5em',
  width: '120px',
  fontSize: 14,
  height: "35px",
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: cyan[500],
  borderColor: '#0288d',
//  [theme.breakpoints.between('tablet', 'ipad')]:{
//     fontSize: 25,
//     padding: '10px 0',
//     fontFamily: 'monospace',
//     width: '180px',
//     margin: '20px 0',
//   },
  '&:hover': {
    backgroundColor: '#039be5',
    borderColor: '#039be5',
  }
});