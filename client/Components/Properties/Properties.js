/** @format */

import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddressForm from './AddressForm';
import PropertiesTable from './PropertiesTable';

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
  const classes = useStyles();
  const [showNewProperty, setShowNewProperty] = useState(false);

  const handleCloseNewProperty = () => setShowNewProperty(false);

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
