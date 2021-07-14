import { createSlice } from "@reduxjs/toolkit";

export const user = createSlice({
  // Creating the name of the slice => Correlated to redux store
  name: "user",

  // initial state reducers wil
  initialState: {
    _id: "",
    userName: "",
    name: "",
    email: "",
    cookie: "",
    isLoggedIn: false,
    favorites: [],
  },
  reducers: {
    emailReducer: (state, action) => {
      console.log("action.payload in emailReducer", action.payload);
      state.email = action.payload;
    },
    loginReducer: (state, action) => {
      console.log("action.payload in loginReducer", action.payload);
      state.cookie = action.payload.cookie
      state.email = action.payload.email
      state.favorites = action.payload.favorites
      state._id = action.payload._id
      state.isLoggedIn ? state.isLoggedIn = false : state.isLoggedIn = true;
    },
  },
});

export const { emailReducer, loginReducer } = user.actions;

export default user.reducer;

export const userState = (state) => state;
