/** @format */

import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddressForm from './AddressForm';
import PropertiesTable from './PropertiesTable';
import api from '../../axios/axios';
import { userState } from '../../Slices/userSlice';

const useStyles = makeStyles((theme) => ({
  propertiesHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: '10px',
    justifyContent: 'space-between',
  },
  fullName: {
    marginLeft: '10px',
  },
}));

const Properties = () => {
  const state = useSelector(userState);
  const classes = useStyles();
  const [showNewProperty, setShowNewProperty] = useState(false);

  const handleCloseNewProperty = () => setShowNewProperty(false);

  useEffect(() => {
    getProperties();
  }, []);

  const getProperties = () => {
    api
      .post('/listProperties', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: {
          email: state.user.email,
        },
      })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className={classes.propertiesHeader}>
        <h1>My Properties</h1>
        <Button
          variant='contained'
          color='primary'
          onClick={() => setShowNewProperty(true)}
        >
          Add Property
        </Button>
      </div>
      <PropertiesTable />
      <AddressForm
        open={showNewProperty}
        handleClose={handleCloseNewProperty}
        newProperty={true}
      />
    </div>
  );
};

export default Properties;
