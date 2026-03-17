import AsyncStorage from "@react-native-async-storage/async-storage";
import cartSlice from "../reducers/CartSlice";
import { persistReducer } from "redux-persist";
const persistConfig = {
  key: "Cart",
  storage: AsyncStorage,
  whitelist: ["items"],
};

export const persistCartSlice = persistReducer(
  persistConfig,
  cartSlice.reducer,
);
