import { Task, app } from "@/shared/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { get, getDatabase, ref, set } from "firebase/database";

const db = getDatabase(app);

export const saveTasks = createAsyncThunk<void, void, { state: RootState }>(
  "task/saveTasks",
  async (_, { getState }) => {
    const tasks = getState().task.data;
    const user = getState().user.data;

    if (user) {
      await set(ref(db, `tasks/${user.uid}`), tasks);
    }
  }
);

export const getTasks = createAsyncThunk<Task[], void, { state: RootState }>(
  "task/getTasks",
  async (_, { getState }) => {
    const user = getState().user.data;

    if (user) {
      const tasks: Task[] | null = (
        await get(ref(db, `tasks/${user.uid}`))
      ).val();

      if (tasks) {
        return tasks;
      }
    }

    return [];
  }
);
