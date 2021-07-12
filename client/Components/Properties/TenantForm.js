import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import CurrencyTextField from '@unicef/material-ui-currency-textfield';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles((theme) => ({
  form: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      display: 'flex',
      flexWrap: 'wrap',
    },
  },
}));

export default function TenantForm({ open, handleClose, tenant = {} }) {
  const classes = useStyles();
  const [inputs, setInputs] = useState(tenant);
  const newTenant = !tenant.fullName

  const handleInput = (e) => setInputs({ ...inputs, [e.target.name]: e.target.value });

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">{newTenant ? 'New Tenant' : 'Edit Tenant'}</DialogTitle>
      <DialogContent>
        <form className={classes.form} noValidate autoComplete="off">
          <TextField
            name="fullName"
            value={inputs.fullName}
            label="Full Name"
            onInput={handleInput}
          />
          <TextField name="email" value={inputs.email} label="Email" onInput={handleInput} />
          <TextField
            name="phoneNumber"
            value={inputs.phoneNumber}
            label="Phone Number"
            onInput={handleInput}
          />
          <CurrencyTextField
            label="Monthly Rent"
            name="monthlyRent"
            value={inputs.monthlyRent}
            variant="standard"
            currencySymbol="$"
            minimumValue="0"
            outputFormat="string"
            decimalCharacter="."
            digitGroupSeparator=","
            onChange={handleInput}
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button variant="contained" color="primary" onClick={handleClose}>
          Sumbit
        </Button>
      </DialogActions>
    </Dialog>
  );
}
