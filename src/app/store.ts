import { configureStore } from "@reduxjs/toolkit";
import beansReducer from "../features/beans/beansSlice";

export const store = configureStore({
  reducer: {
    beans: beansReducer, // Підключаємо редюсер для роботи з "Beans"
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
