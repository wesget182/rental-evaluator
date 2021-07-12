import React from 'react';
import CurrencyFormat from 'react-currency-format';

const Currency = ({ number }) => (
  <CurrencyFormat value={number} displayType={'text'} thousandSeparator={true} prefix={'$'} />
);

export default Currency;
