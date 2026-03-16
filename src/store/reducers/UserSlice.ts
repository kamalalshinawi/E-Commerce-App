import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface UserData {
  userData: object | null;
}

const initialState: UserData = {
  userData: null,
};
const userData = createSlice({
  name: "userdata",
  initialState,
  reducers: {
    getUserData: (state, action: PayloadAction<object>) => {
      state.userData = action.payload;
      AsyncStorage.setItem("USER_DATA", JSON.stringify(action.payload));
    },
  },
});

export const { getUserData } = userData.actions;

export default userData;
