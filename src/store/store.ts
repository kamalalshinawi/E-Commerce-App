import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./reducers/CartSlice";
export const store = configureStore({
  reducer: {
    cartSlice:cartSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
