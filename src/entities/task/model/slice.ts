import { Task } from "@/shared/api";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getTasks } from "../api";
import { nanoid } from "nanoid";

export type QueryConfig = {
  completed?: boolean;
  priority?: number;
};

interface SliceState {
  data: Task[];
  queryConfig?: QueryConfig;
  queryName: string;
  loading: boolean;
  saveAviable: boolean;
}

const initialState: SliceState = {
  data: [],
  loading: false,
  saveAviable: false,
  queryName: "",
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
    removeTask(state, action: PayloadAction<string>) {
      const taskIndex = state.data.findIndex(
        (task) => task.id === action.payload
      );
      state.data.splice(taskIndex, 1);
    },
    clearTasks(state) {
      state.data = [];
    },
    setQueryConfig(state, action: PayloadAction<QueryConfig>) {
      state.queryConfig = action.payload;
    },
    setQueryName(state, action: PayloadAction<string>) {
      state.queryName = action.payload;
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
  setQueryConfig,
  clearTasks,
  setSaveAviable,
  setQueryName,
} = taskSlice.actions;
