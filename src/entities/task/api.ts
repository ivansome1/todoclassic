import { RootState, store } from "@/app/store";
import { Task, app } from "@/shared/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { get, getDatabase, ref, set } from "firebase/database";

const db = getDatabase(app);

export async function saveTasks() {
  const tasks = store.getState().task.data;
  const viewer = store.getState().viewer.data;

  if (viewer) {
    await set(ref(db, `tasks/${viewer.uid}`), tasks);
  }
}

export async function getTasks() {
  const viewer = store.getState().viewer.data;

  if (viewer) {
    const tasks: Task[] | null = (
      await get(ref(db, `tasks/${viewer.uid}`))
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
