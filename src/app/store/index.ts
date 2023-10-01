import { taskModel } from "@/entities/task";
import { userModel } from "@/entities/user";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    task: taskModel.taskSlice.reducer,
    user: userModel.userSlice.reducer,
  },
});
