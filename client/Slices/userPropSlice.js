/** @format */

import { createSlice } from '@reduxjs/toolkit';

export const userProp = createSlice({
  name: 'userProp',

  initialState: {
    // Total expenses
    // Total Units
    // Total Tenants
    userProperties: [],
  },
  reducers: {
    userPropReducer: (state, action) => {
      // console.log('action.payload in userPropReducer', action.payload[0]);
      state.userProperties.push(...action.payload);
    },

    addTenantReducer: (state, action) => {
      const propertyToUpdate = state.userProperties.find(
        (property) => property._id === action.payload._id
      );
      console.log('propertyToUpdate', propertyToUpdate);
      propertyToUpdate.tenants = action.payload.tenants;
    },
  },
});

export const { userPropReducer, addTenantReducer } = userProp.actions;

export default userProp.reducer;

export const userPropState = (state) => state;
