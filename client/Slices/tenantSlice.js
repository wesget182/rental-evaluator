import { createSlice } from '@reduxjs/toolkit'

export const tenants = createSlice({
    // creating the name of the slice => correlated to redux store
    name: "tenants",

    // initialize the state
    initialState: {
        tenantId: 1234,
        tenantName: 'Dan Yeoman',
        tenantEmail: 'dantheman@yahoo.com',
        tenantPhone: '800-CALL-DAN',
        monthlyRent: 12345,
    },

    reducers: {
        tenantReducer: (state, action) => {
            console.log('action.payload in tenantReducer', action.payload)
            state = action.payload
        }
    }
})

export const { tenantReducer } = tenants.actions;

export default tenants.reducer;

export const tenantState = (state) => state