import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface UserData {
  userData: object | null;
  isLoading: boolean;
}

const initialState: UserData = {
  userData: null,
  isLoading: true,
};
const userData = createSlice({
  name: "userdata",
  initialState,
  reducers: {
    getUserData: (state, action: PayloadAction<object>) => {
      state.userData = action.payload;
      AsyncStorage.setItem("USER_DATA", JSON.stringify(action.payload));
      state.isLoading = false;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { getUserData, setLoading } = userData.actions;

export default userData;
