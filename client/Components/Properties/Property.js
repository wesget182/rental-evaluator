import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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

const initialPropertyState = {
  address: {
    address1: '123 Cherry Lane',
    address2: null,
    city: 'Santa Barbara',
    state: 'CA',
    zip: '91362',
  },
  financials: {
    purchasePrice: 1500000,
    downPayment: 300000,
    interestRate: 0.031,
    monthlyExpenses: 5000,
    purchaseDate: '03/05/2019',
    term: 30,
  },
  tenants: [
    {
      id: 1,
      fullName: 'Johnny Appleseed',
      email: 'johnny@appleseed.com',
      phoneNumber: '888-888-8888',
      monthlyRent: 3000,
    },
  ],
};

export default function Property(props) {
  let { id } = useParams();
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [loading, setLoading] = useState(true);
  const [propertyData, setPropertyData] = useState({});
  const [showNewTenant, setShowNewTenant] = useState(false);
  const [showEditProperty, setShowEditProperty] = useState(false);

  useEffect(() => {
    // TODO: Fetch property information from db using the id from the url
    const placeholderPropertyData = initialPropertyState; // TODO: replace this with the property data from the db
    setPropertyData(placeholderPropertyData);
    setLoading(false);
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const handleCloseNewTenant = () => setShowNewTenant(false);

  const handleCloseEditProperty = () => setShowEditProperty(false);

  if (loading) return <p>Loading....</p>;

  const addressString = () => {
    const { address1, address2, city, state, zip } = propertyData.address;
    return `${address1},${address2 ? ' ' + address2 + ',' : ''} ${city}, ${state} ${zip}`;
  };

  return (
    <div className={classes.root}>
      <div className={classes.address}>
        <h2>{addressString()}</h2>
        <EditIcon className={classes.editIcon} onClick={() => setShowEditProperty(true)}/>
        <AddressForm open={showEditProperty} handleClose={handleCloseEditProperty} newProperty={false} address={propertyData.address} />
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
          {propertyData.tenants.map((tenant) => (
            <TenantAvatar tenant={tenant} />
          ))}
          <TenantForm open={showNewTenant} handleClose={handleCloseNewTenant} />
          {!showNewTenant && (
            <Button variant="contained" color="primary" onClick={() => setShowNewTenant(true)}>
              Add Tenant
            </Button>
          )}
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <FinancialsForm financials={propertyData.financials} />
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
