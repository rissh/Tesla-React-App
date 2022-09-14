import { configureStore } from '@reduxjs/toolkit';
import carReducer from "../features/Cars/carSlice"


export const store = configureStore({
  reducer: {
    car: carReducer
  },
});
