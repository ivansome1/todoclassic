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
  sortByCompleted: boolean;
  sortByPriority: boolean;
  removeCompleted: boolean;
}

const initialState: SliceState = {
  data: [],
  loading: false,
  saveAviable: false,
  sortByCompleted: false,
  sortByPriority: true,
  removeCompleted: false,
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
        id: string;
        title: string;
        description: string;
        priority: number;
      }>
    ) {
      const task = state.data.find((task) => task.id === action.payload.id);
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
    removeCompletedTasks(state) {
      if (state.removeCompleted) {
        const idsToRemove: string[] = [];
        state.data.forEach((task) => {
          if (task.completed) {
            idsToRemove.push(task.id);
          }
        });
        idsToRemove.forEach((id) => {
          state.data.splice(
            state.data.findIndex((task) => task.id === id),
            1
          );
        });
      }
    },
    setSortByPriority(state, action: PayloadAction<boolean>) {
      state.sortByPriority = action.payload;
    },
    setSortByCompleted(state, action: PayloadAction<boolean>) {
      state.sortByCompleted = action.payload;
    },
    setRemoveCompleted(state, action: PayloadAction<boolean>) {
      state.removeCompleted = action.payload;
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
  setSortByCompleted,
  setSortByPriority,
  removeCompletedTasks,
  setRemoveCompleted,
} = taskSlice.actions;
