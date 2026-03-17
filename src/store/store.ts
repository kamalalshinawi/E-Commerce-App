import { configureStore } from "@reduxjs/toolkit";
import userData from "./reducers/UserSlice";
import { persistCartSlice } from "./persisted/persistConfig";
import persistStore from "redux-persist/es/persistStore";
export const store = configureStore({
  reducer: {
    cartSlice: persistCartSlice,
    UserSlice: userData.reducer,
  },
});
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
