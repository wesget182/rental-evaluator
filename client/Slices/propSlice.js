import { createSlice } from "@reduxjs/toolkit";

export const prop = createSlice({
  // Creating the name of the slice => Correlated to redux store
  name: "prop",
  // initial state reducers wil
  initialState: {
    properties: { }
    
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
