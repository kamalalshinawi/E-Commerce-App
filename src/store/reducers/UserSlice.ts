import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserData {
  userData: object;
}

const initialState: UserData = {
  userData: {},
};
const userData = createSlice({
  name: "userdata",
  initialState,
  reducers: {
    getUserData: (state, action: PayloadAction<object>) => {
      state.userData = action.payload;
    },
  },
});

export const { getUserData } = userData.actions;

export default userData;
