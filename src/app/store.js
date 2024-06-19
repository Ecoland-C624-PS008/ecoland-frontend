import { configureStore } from '@reduxjs/toolkit';
import authReducer from "../api/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer
  },
});
