import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import CurrencyTextField from '@unicef/material-ui-currency-textfield';

const useStyles = makeStyles((theme) => ({
  form: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      display: 'flex',
      flexWrap: 'wrap',
    },
  },
}));

export default function TenantsForm({ tenants = {} }) {
  const classes = useStyles();
  const [inputs, setInputs] = useState(tenants);

  const handleInput = (e) => setInputs({ ...inputs, [e.target.name]: e.target.value });

  return (
    <form className={classes.form} noValidate autoComplete="off">
      <TextField name="fullName" value={inputs.fullName} label="Full Name" onInput={handleInput} />
      <TextField name="email" value={inputs.email} label="Email" onInput={handleInput} />
      <TextField name="phoneNumber" value={inputs.phoneNumber} label="Phone Number" onInput={handleInput} />
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
  );
}
