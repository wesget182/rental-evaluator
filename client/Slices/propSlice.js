import { createSlice } from '@reduxjs/toolkit';

export const prop = createSlice({
  name: 'prop',
  initialState: {
    properties: {},
  },
  reducers: {
    propertyReducer: (state, action) => {
      state.properties = action.payload;
    },
  },
});

export const { propertyReducer } = prop.actions;

export default prop.reducer;

export const propState = (state) => state;
