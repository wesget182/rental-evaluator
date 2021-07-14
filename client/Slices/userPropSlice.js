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
      console.log('action.payload in userPropReducer', action.payload[0]);

      //   const { address1, address2, city, state, zip } = action.payload;
      (state.address1 = action.payload[0].address1),
        (state.address2 = action.payload[0].address2),
        (state.city = action.payload[0].city),
        (state.state = action.payload[0].state),
        (state.zip = action.payload[0].zip),
        (state.email = action.payload[0].email);
      state.userProperties.push(action.payload[0]);

      // state = {
      //   address1:
      //   email:
      //   ...state,
      //   userProperties: [],
      // };
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
