import { configureStore } from "@reduxjs/toolkit";
import examReducer from "./examSlice";
import { useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    exam: examReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector = useSelector;
