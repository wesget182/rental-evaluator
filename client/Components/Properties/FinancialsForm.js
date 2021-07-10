import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import CurrencyTextField from '@unicef/material-ui-currency-textfield';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const useStyles = makeStyles((theme) => ({
  form: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      display: 'flex',
      flexWrap: 'wrap',
    },
  },
}));

export default function FinancialsForm({ financials = {} }) {
  const classes = useStyles();
  const [inputs, setInputs] = useState(financials);
  const [selectedDate, setSelectedDate] = useState(new Date('2014-08-18T21:11:54'));

  const handleInput = (e) => setInputs({ ...inputs, [e.target.name]: e.target.value });

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <form className={classes.form} noValidate autoComplete="off">
      <CurrencyTextField
        label="Purchase Price"
        name="purchasePrice"
        value={inputs.purchasePrice}
        variant="standard"
        currencySymbol="$"
        minimumValue="0"
        outputFormat="string"
        decimalCharacter="."
        digitGroupSeparator=","
        onChange={handleInput}
      />
      <CurrencyTextField
        label="Down Payment"
        name="downPayment"
        value={inputs.downPayment}
        variant="standard"
        currencySymbol="$"
        minimumValue="0"
        outputFormat="string"
        decimalCharacter="."
        digitGroupSeparator=","
        onChange={handleInput}
      />
      <TextField
        label="Interest Rate"
        value={inputs.interestRate}
        name="interestRate"
        onInput={handleInput}
      />
      <TextField name="Term (Years)" value={inputs.term} label="Term" onInput={handleInput} />
      <CurrencyTextField
        label="Monthly Expenses"
        name="monthlyExpenses"
        value={inputs.monthlyExpenses}
        variant="standard"
        currencySymbol="$"
        minimumValue="0"
        outputFormat="string"
        decimalCharacter="."
        digitGroupSeparator=","
        onChange={handleInput}
      />
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Purchase Date"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </MuiPickersUtilsProvider>
    </form>
  );
}
