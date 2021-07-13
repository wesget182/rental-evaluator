import { createSlice } from "@reduxjs/toolkit"

export const financials = createSlice({
    // Creating the name of the slice => correlated to redux store
    name: "financials",

    // initial state
    initialState: {
        purchasePrice: 0,
        downPayment: 0,
        interestRate: 0,
        monthlyExpenses: 0,
        purchaseDate: '',
        term: 0,
    },
    // create reducers
    reducers: {
        financialReducer: (state, action) => {
            console.log("action.payload in financialReducer", action.payload)
            state = action.payload
        }
    }
})

export const { financialReducer } = financials.actions;

export default financials.reducer;

export const financialState = (state) => state
