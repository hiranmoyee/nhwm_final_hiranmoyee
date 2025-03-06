import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice"; // Ensure correct path
import examReducer from "../store/examSlice" ;

export const store = configureStore({
  reducer: {
    auth: authReducer, // ✅ Ensure "auth" key matches the selector in `exam.tsx`
    exam: examReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
