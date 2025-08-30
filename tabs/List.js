import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Design from './Design';
import Development from './Development';
import Delivery from './Delivery';


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3}}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
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

export default function List() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '90%', bgcolor: 'background.paper' ,margin:'100px' }}>
      <Box sx={{ borderColor: '#FF4500' }}>
        <Box>
        <Tabs value={value} onChange={handleChange} centered textColor="secondary" 
        indicatorColor="secondary">
          <Tab label="Design" {...a11yProps(0)} sx={{fontSize:'30px',color:'#FF4500'}}/>
          <Tab label="Development" {...a11yProps(1)} sx={{fontSize:'30px',marginLeft:'10px',color:'#FF4500'}}/>
          <Tab label="Delivery" {...a11yProps(2)} sx={{fontSize:'30px',marginLeft:'10px',color:'#FF4500'}}/>
        </Tabs>
        </Box>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Design/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <Development/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Delivery/>
      </CustomTabPanel>
    </Box>
  );
}
