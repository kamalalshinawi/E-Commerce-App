import { configureStore } from "@reduxjs/toolkit";
import userData from "./reducers/UserSlice";
import { persistCartSlice } from "./persisted/persistConfig";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
export const store = configureStore({
  reducer: {
    cartSlice: persistCartSlice,
    UserSlice: userData.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
