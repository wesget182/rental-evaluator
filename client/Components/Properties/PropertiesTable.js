/** @format */

import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import { useHistory } from 'react-router-dom';

import Currency from '../../Utils/Currency';
import { userPropState } from '../../Slices/userPropSlice';

// Sample data
const initialPropertiesState = [
  {
    id: 1,
    address1: '123 Cherry Lane',
    address2: null,
    city: 'Santa Barbara',
    state: 'CA',
    zip: '91362',
    financials: {
      purchasePrice: 1500000,
      downPayment: 300000,
      interestRate: 0.031,
      monthlyExpenses: 5000,
      purchaseDate: '03/05/2019',
      term: 30,
    },
    tenants: [
      {
        id: 1,
        fullName: 'Johnny Appleseed',
        email: 'johnny@appleseed.com',
        phoneNumber: '888-888-8888',
        monthlyRent: 3000,
      },
    ],
  },
];

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function BasicTable() {
  const state = useSelector(userPropState);
  const classes = useStyles();
  const history = useHistory();

  const addressString = (row) => {
    const { address1, address2, city, state, zip } = row;
    return `${address1},${address2 ? ' ' + address2 + ',' : ''} ${city}, ${state} ${zip}`;
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Address</TableCell>
            <TableCell align="right">Tenants</TableCell>
            <TableCell align="right">Monthly Expenses</TableCell>
            <TableCell align="right">Monthly Income</TableCell>
            <TableCell align="right">Monthly Profit (Loss)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {state.userProp.userProperties.map((row) => {
            const expenses = row?.financials?.monthlyExpenses || 0;
            const income = row?.tenants?.map((t) => t.monthlyRent)?.reduce((a, b) => a + b, 0) || 0;
            const profit = income - expenses || 0;
            return (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  <Link onClick={() => history.push(`/property/${row._id}`)}>
                    {addressString(row) || ''}
                  </Link>
                </TableCell>
                <TableCell align="right">
                  <Link onClick={() => history.push(`/property/${row._id}`)}>
                    {row.tenants?.length || 0}
                  </Link>
                </TableCell>
                <TableCell align="right">
                  <Currency number={expenses} />
                </TableCell>
                <TableCell align="right">
                  <Currency number={income} />
                </TableCell>
                <TableCell align="right">
                  <Currency number={profit} />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
