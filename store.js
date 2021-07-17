/** @format */

import { configureStore } from '@reduxjs/toolkit';
import userSlice from './client/Slices/userSlice';
import propSlice from './client/Slices/propSlice';
import userPropSlice from './client/Slices/userPropSlice';

export default configureStore({
  reducer: {
    user: userSlice,
    prop: propSlice,
    userProp: userPropSlice,
  },
});
