import { createSlice } from '@reduxjs/toolkit';

export const financials = createSlice({
  name: 'financials',
  initialState: {
    purchasePrice: 0,
    downPayment: 0,
    interestRate: 0,
    monthlyExpenses: 0,
    purchaseDate: '',
    term: 0,
  },
  reducers: {
    financialReducer: (state, action) => {
      state = action.payload;
    },
  },
});

export const { financialReducer } = financials.actions;

export default financials.reducer;

export const financialState = (state) => state;
