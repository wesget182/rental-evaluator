import { createSlice } from '@reduxjs/toolkit';

export const user = createSlice({
  name: 'user',
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
      state.email = action.payload
    },
    loginReducer: (state, action) => {
      const { cookie, favorites, _id } = action.payload;
      state.cookie = cookie;
      state.favorites = favorites;
      state._id = _id;
      state.isLoggedIn = true;
    },
    favsReducer: (state, action) => {
      state.favorites = action.payload.favorites
    },
  },
});

export const { emailReducer, loginReducer, favsReducer } = user.actions;

export default user.reducer;

export const userState = (state) => state;
