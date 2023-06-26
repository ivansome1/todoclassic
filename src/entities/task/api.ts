import { RootState, store } from "@/app/store";
import { Task, app } from "@/shared/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { get, getDatabase, ref, set } from "firebase/database";

const db = getDatabase(app);

export async function saveTasks() {
  const tasks = store.getState().task.data;
  const user = store.getState().user.data;

  if (user) {
    await set(ref(db, `tasks/${user.uid}`), tasks);
  }
}

export async function getTasks() {
  const user = store.getState().user.data;

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

export const getTasksThunk = createAsyncThunk<
  Task[],
  void,
  { state: RootState }
>("task/getTasks", getTasks);
