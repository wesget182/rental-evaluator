/** @format */

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import EditIcon from '@material-ui/icons/Edit';
import FinancialsForm from './FinancialsForm';
import TenantForm from './TenantForm';
import TenantAvatar from './TenantAvatar';
import Button from '@material-ui/core/Button';
import AddressForm from './AddressForm';
import { userPropState } from '../../Slices/userPropSlice';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
  },
  form: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      display: 'flex',
      flexWrap: 'wrap',
    },
  },
  address: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  editIcon: {
    marginLeft: '10px',
  },
}));

export default function Property(props) {
  let { id } = useParams();
  const classes = useStyles();
  const theme = useTheme();
  const fetchUserProperties = useSelector(userPropState);
  const propertyData = fetchUserProperties.userProp.userProperties.find((el) => el._id === id);
  const [value, setValue] = useState(0);
  const [showNewTenant, setShowNewTenant] = useState(false);
  const [showEditProperty, setShowEditProperty] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const handleCloseNewTenant = () => setShowNewTenant(false);

  const handleCloseEditProperty = () => setShowEditProperty(false);

  const addressString = () => {
    const { address1, address2, city, state, zip } = propertyData;
    return `${address1},${address2 ? ' ' + address2 + ',' : ''} ${city}, ${state} ${zip}`;
  };

  return (
    <div className={classes.root}>
      <div className={classes.address}>
        <h2>{addressString()}</h2>
        <EditIcon className={classes.editIcon} onClick={() => setShowEditProperty(true)} />
        <AddressForm
          open={showEditProperty}
          handleClose={handleCloseEditProperty}
          newProperty={false}
          address={propertyData}
        />
      </div>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Tenants" {...a11yProps(0)} />
          <Tab label="Financials" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          {propertyData?.tenants?.map((tenant) => <TenantAvatar tenant={tenant} />) || ``}
          <TenantForm
            open={showNewTenant}
            handleClose={handleCloseNewTenant}
            propertyData={propertyData}
          />
          {!showNewTenant && (
            <Button variant="contained" color="primary" onClick={() => setShowNewTenant(true)}>
              Add Tenant
            </Button>
          )}
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <FinancialsForm financials={propertyData} />
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
