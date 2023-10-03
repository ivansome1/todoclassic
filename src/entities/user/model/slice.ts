import { User } from "@/shared/api";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type SliceState = {
  data?: User;
  loading: boolean;
};

const initialState: SliceState = {
  loading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User | undefined>) {
      state.data = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
});

export const { setUser, setLoading } = userSlice.actions;
