
import { createSlice } from '@reduxjs/toolkit';

export const user = createSlice({
    // Creating the name of the slice => Correlated to redux store
    name: 'user',

    // initial state reducers wil
    initialState: {
        userName: '',
        name: '',
        email: ''

    },
    reducers: {
        emailReducer: (state, action) => {
            console.log('action.payload in emailReducer', action.payload)
            state.email = action.payload
        }
    },


})

export const { emailReducer } = user.actions

export default user.reducer;

export const userState = (state) => state;