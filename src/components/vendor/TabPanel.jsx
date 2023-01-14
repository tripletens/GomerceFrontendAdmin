import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import UpdateForm from './UpdateForm';
import VendorActivity from './VendorActivity';
import styled from '@emotion/styled';
import { grey } from '@mui/material/colors';
import { theme } from './breakpoints'


const EBox = styled(Box)({ 
    width: '100%',
    [theme.breakpoints.down('tablet')]:{
        width: '100%',
    }
})

const TabContainer = styled(Box)({
  borderBottom: 1, 
  paddingTop: '20px', 
  width:'100%',
  borderBottom: '1px solid',
  borderBottomColor: grey[200],
  
  [theme.breakpoints.down('minipad')]:{
      margin:'0 0 0 -7%',
      width: '115%',
      flexDirection : 'column',
  },
  
  [theme.breakpoints.between('mobile_sm1', 'tablet')]:{
    width:'76%',
  },
  
  [theme.breakpoints.down('mobile_lg2')]:{
        width: '85%',
        margin:'0 0 0 .6%',
  },

  [theme.breakpoints.down('mobile_lg1')]:{
        width: '82%',
        margin:'0 0 0 .6%',
  },
  
  [theme.breakpoints.down('mobile_md2')]:{
        width: '76%',
        margin:'0 0 0 .6%',
  },

  [theme.breakpoints.down('mobile_sm2')]:{
        width: '70%',
  },

  [theme.breakpoints.down('mobile_md1')]:{
        width: '69%',
  }

})

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <EBox>
      <TabContainer>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Profile" {...a11yProps(0)} />
          <Tab label="Settings" {...a11yProps(1)} />
        </Tabs>
      </TabContainer>
      <TabPanel value={value} index={0}>
          <VendorActivity />
      </TabPanel>
      <TabPanel value={value} index={1}>
          <UpdateForm />
      </TabPanel>
    </EBox>
  );
}
