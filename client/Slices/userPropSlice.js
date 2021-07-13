/** @format */

import { createSlice } from '@reduxjs/toolkit';

export const userProp = createSlice({
  name: 'userProp',

  initialState: {
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
    email: '',
    userProperties: [],
  },
  reducers: {
    userPropReducer: (state, action) => {
      console.log('action.payload in userPropReducer', action.payload);

      //   const { address1, address2, city, state, zip } = action.payload;

      state = { ...state, userProperties: [] };
      //   state = action.payload;
    },
    userPropListReducer: (state, action) => {
      console.log('action.payload in userPropListReducer', action.payload);
      state.userProperties.push(action.payload);
    },
  },
});

export const { userPropReducer } = userProp.actions;

export default userProp.reducer;

export const userPropState = (state) => state;
