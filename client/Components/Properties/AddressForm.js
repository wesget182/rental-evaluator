/** @format */

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import api from '../../axios/axios';

const useStyles = makeStyles((theme) => ({
  form: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      display: 'flex',
      flexWrap: 'wrap',
    },
  },
}));

export default function AddressForm({ open, handleClose, newProperty = false, address = {} }) {
  const classes = useStyles();
  const history = useHistory();
  const [inputs, setInputs] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: add property to the user record in the db
    const propertyId = 1; // this should be replaced with the property id generated when the record is created
    // redirect to the property page
    try {
      api.post('/properties/newProperty', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        params: {
          body: inputs,
        },
      });
      history.push(`/property/${propertyId}`);
    } catch (err) {
      console.log(err);
    }
  };

  const handleInput = (e) =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">
        {newProperty ? 'New Property' : 'Edit Property'}
      </DialogTitle>
      <DialogContent>
        <form className={classes.form} noValidate autoComplete="off" onSubmit={handleSubmit}>
          <TextField
            name="address1"
            value={inputs.address1}
            label="Address"
            onInput={handleInput}
          />
          <TextField
            name="address2"
            value={inputs.address2}
            label="Address 2"
            onInput={handleInput}
          />
          <TextField name="city" value={inputs.city} label="City" onInput={handleInput} />
          <TextField name="state" value={inputs.state} label="State" onInput={handleInput} />
          <TextField name="zip" value={inputs.zip} label="Zip Code" onInput={handleInput} />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Sumbit
        </Button>
      </DialogActions>
    </Dialog>
  );
}
