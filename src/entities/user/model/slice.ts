import { User } from "@/shared/api";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type SliceState = {
  data?: User;
};

const initialState: SliceState = {};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User | undefined>) {
      state.data = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
