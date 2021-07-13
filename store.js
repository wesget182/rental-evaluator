import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./client/Slices/userSlice";
import propSlice from "./client/Slices/propSlice";
import userPropSlice from "./client/Slices/userPropSlice";
import financialSlice from "./client/Slices/financialSlice";
import tenantSlice from "./client/Slices/tenantSlice";
export default configureStore({
  reducer: {
    user: userSlice,
    prop: propSlice,
    userProp: userPropSlice,
    financials: financialSlice,
    tenant: tenantSlice,
  },
});
