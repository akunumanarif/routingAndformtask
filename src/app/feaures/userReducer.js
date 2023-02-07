import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    {
      name: "tes",
      password: "123",
    },
  ],
  //data: "Helooooooooooooooo",
};

export const userSlice = createSlice({
  name: "me",
  initialState,
  reducers: {
    submitUser: (state, action) => {
      let cpData = [...state.data];
      cpData.push(action.payload);
      state.data = cpData;
    },
  },
});

export const { submitUser } = userSlice.actions;

export default userSlice.reducer;