/** @format */

import { createSlice } from '@reduxjs/toolkit';

export const userProp = createSlice({
  name: 'userProp',
  initialState: {
    userProperties: [],
  },
  reducers: {
    userPropReducer: (state, action) => {
      state.userProperties.push(...action.payload);
    },
    addTenantReducer: (state, action) => {
      const propertyToUpdate = state.userProperties.find(
        (property) => property._id === action.payload._id
      );
      propertyToUpdate.tenants = action.payload.tenants;
    },
  },
});

export const { userPropReducer, addTenantReducer } = userProp.actions;

export default userProp.reducer;

export const userPropState = (state) => state;
