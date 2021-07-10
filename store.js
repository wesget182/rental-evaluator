import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./client/Slices/userSlice";
import propSlice from "./client/Slices/propSlice";
export default configureStore({
  reducer: {
    user: userSlice,
    prop: propSlice,
  },
});
