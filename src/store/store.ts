import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./reducers/CartSlice";
import userData from "./reducers/UserSlice"
export const store = configureStore({
  reducer: {
    cartSlice:cartSlice.reducer,
    UserSlice:userData.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
