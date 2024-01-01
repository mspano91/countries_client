import { configureStore } from "@reduxjs/toolkit";
import paisesReducer from "./slice";

export const store = configureStore({
  reducer: {
    paises: paisesReducer,
  },
});
