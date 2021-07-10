import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AddressForm from './AddressForm';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
  },
}));

export default function NewProperty() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>New Property</h1>
      <AddressForm newProperty={true} />
    </div>
  );
}
