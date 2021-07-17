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
    updateProperty: (state, action) => {
      state.userProperties = state.userProperties.map((property) => {
        if (property._id === action.payload._id) {
          return action.payload;
        } else {
          return property;
        }
      });
    },
    addTenantReducer: (state, action) => {
      const propertyToUpdate = state.userProperties.find(
        (property) => property._id === action.payload._id
      );
      propertyToUpdate.tenants = action.payload.tenants;
    },
  },
});

export const { userPropReducer, updateProperty, addTenantReducer } = userProp.actions;

export default userProp.reducer;

export const userPropState = (state) => state;
