import { createSlice } from "@reduxjs/toolkit";

export const user = createSlice({
  // Creating the name of the slice => Correlated to redux store
  name: "user",

  // initial state reducers wil
  initialState: {
    userName: "",
    name: "",
    email: "",
    isLoggedIn: false,
  },
  reducers: {
    emailReducer: (state, action) => {
      console.log("action.payload in emailReducer", action.payload);
      state.email = action.payload;
    },
    loginReducer: (state, action) => {
      console.log("action.payload in loginReducer", action.payload);
      //Is state.isLoggedIn true? If so, change to false, if not change to true
      state.isLoggedIn 
      ? state.isLoggedIn = false 
      : state.isLoggedIn = true;
    },
  },
});

export const { emailReducer, loginReducer } = user.actions;

export default user.reducer;

export const userState = (state) => state;
