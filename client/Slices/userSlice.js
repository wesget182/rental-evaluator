import { createSlice } from '@reduxjs/toolkit';

export const user = createSlice({
  // Creating the name of the slice => Correlated to redux store
  name: 'user',

  // initial state reducers wil
  initialState: {
    _id: '',
    userName: '',
    name: '',
    email: '',
    cookie: '',
    isLoggedIn: false,
    favorites: [],
  },
  reducers: {
    emailReducer: (state, action) => {
      console.log('action.payload in emailReducer', action.payload);
      state.email = action.payload;
    },
    loginReducer: (state, action) => {
      console.log("action.payload in loginReducer", action.payload);
      const obj = action.payload
      
      // state.cookie = obj.cookie
      // state.favorites = obj.favorites
      // state._id = action.payload
      state.isLoggedIn 
      ? state.isLoggedIn = false 
      : state.isLoggedIn = true;
    },
    // favoritesReducer: (state, action) => {
    //   console.log('action.payload in favoritesReducer')
    //   state.favorites.push(action.payload);
    // }
  },
});

export const { emailReducer, loginReducer} = user.actions;

export default user.reducer;

export const userState = (state) => state;
