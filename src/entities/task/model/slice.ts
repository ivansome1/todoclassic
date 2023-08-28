import { Task } from "@/shared/api";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getTasks } from "../api";
import { nanoid } from "nanoid";

export type Config = {
  completed?: boolean;
  priority?: number;
};

export type Filter = {
  id: number;
  title: string;
  config: Config;
};

interface SliceState {
  data: Task[];
  filter?: Filter;
  loading: boolean;
  saveAviable: boolean;
}

const initialState: SliceState = {
  data: [],
  loading: false,
  saveAviable: false,
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    toggleTask(state, action: PayloadAction<string>) {
      const targetTask = state.data.find((task) => task.id === action.payload);

      if (targetTask) {
        targetTask.completed = !targetTask.completed;
      }
    },
    addTask(
      state,
      action: PayloadAction<{
        title: string;
        description: string;
        priority: number;
      }>
    ) {
      state.data.unshift({
        id: nanoid(),
        completed: false,
        title: action.payload.title,
        description: action.payload.description,
        priority: action.payload.priority,
      });
      state.saveAviable = true;
    },
    editTask(
      state,
      action: PayloadAction<{
        task: Task;
        title: string;
        description: string;
        priority: number;
      }>
    ) {
      const task = state.data.find((task) => task === action.payload.task);
      if (task) {
        task.title = action.payload.title;
        task.description = action.payload.description;
        task.priority = action.payload.priority;
        state.saveAviable = true;
      }
    },
    removeTask(state, action: PayloadAction<string>) {
      const taskIndex = state.data.findIndex(
        (task) => task.id === action.payload
      );
      state.data.splice(taskIndex, 1);
    },
    clearTasks(state) {
      state.data = [];
    },
    cloneTask(state, action: PayloadAction<string>) {
      const taskIndex = state.data.findIndex(
        (task) => task.id === action.payload
      );
      const task = state.data[taskIndex];
      if (task) {
        const newTasks: Task[] = JSON.parse(JSON.stringify(state.data));
        newTasks.splice(taskIndex, 0, task);
        newTasks[taskIndex].id = nanoid();
        state.data = newTasks;
        state.saveAviable = true;
      }
    },
    setFilter(state, action: PayloadAction<Filter>) {
      state.filter = action.payload;
    },
    setSaveAviable(state, action: PayloadAction<boolean>) {
      state.saveAviable = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTasks.pending, (state) => {
      state.loading = true;
      state.data = [];
    });
    builder.addCase(getTasks.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(getTasks.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const {
  addTask,
  toggleTask,
  removeTask,
  clearTasks,
  setSaveAviable,
  setFilter,
  cloneTask,
  editTask,
} = taskSlice.actions;
