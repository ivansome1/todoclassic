import { User } from "@/shared/api";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type SliceState = {
  data?: User;
};

const initialState: SliceState = {};

export const viewerSlice = createSlice({
  name: "viewer",
  initialState,
  reducers: {
    setViewer(state, action: PayloadAction<User | undefined>) {
      state.data = action.payload;
    },
  },
});

export const { setViewer } = viewerSlice.actions;
