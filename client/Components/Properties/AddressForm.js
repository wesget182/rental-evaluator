import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  form: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      display: 'flex',
      flexWrap: 'wrap',
    },
  },
}));

export default function AddressForm({ newProperty = false }) {
  const classes = useStyles();
  const history = useHistory();
  const [inputs, setInputs] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: add property to the user record in the db
    const propertyId = 1; // this should be replaced with the property id generated when the record is created
    // redirect to the property page
    history.push(`/property/${propertyId}`);
  };

  const handleInput = (e) => setInputs({ ...inputs, [e.target.name]: e.target.value });

  return (
    <form className={classes.form} noValidate autoComplete="off" onSubmit={handleSubmit}>
      <TextField name="address1" value={inputs.address1} label="Address" onInput={handleInput} />
      <TextField name="address2" value={inputs.address2} label="Address 2" onInput={handleInput} />
      <TextField name="city" value={inputs.city} label="City" onInput={handleInput} />
      <TextField name="state" value={inputs.state} label="State" onInput={handleInput} />
      <TextField name="zip" value={inputs.zip} label="Zip Code" onInput={handleInput} />
      {newProperty && (
        <Button type="submit" variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      )}
    </form>
  );
}
