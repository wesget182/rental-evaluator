/** @format */

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import api from '../../axios/axios';

import { userState } from '../../Slices/userSlice'
import { userPropReducer, updateProperty } from '../../Slices/userPropSlice';

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
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState(address);

  const state = useSelector(userState);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (newProperty) {
        const newProperty = await api
          .post('/properties/newProperty', {
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            params: {
              body: inputs,
              email: state.user.email,
            },
          })
          .then((data) => data.data.property);
        dispatch(userPropReducer([newProperty]));
        history.push(`/property/${newProperty._id}`);
      } else {
        await api.post('/properties/editProperty', {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          params: {
            body: inputs,
            email: state.user.email,
          },
        });
        dispatch(updateProperty(inputs));
        handleClose();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleInput = (e) => setInputs({ ...inputs, [e.target.name]: e.target.value });

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
