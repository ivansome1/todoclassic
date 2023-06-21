import { Task } from "@/shared/api";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getTasksThunk } from "../api";

export type QueryConfig = {
  completed?: boolean;
};

interface SliceState {
  data: Task[];
  queryConfig?: QueryConfig;
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
    toggleTask(state, action: PayloadAction<number>) {
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
        color?: string;
      }>
    ) {
      state.data.unshift({
        id: state.data.length,
        completed: false,
        title: action.payload.title,
        description: action.payload.description,
        color: action.payload.color,
      });
      state.saveAviable = true;
    },
    setQueryConfig(state, action: PayloadAction<QueryConfig>) {
      state.queryConfig = action.payload;
    },
    setSaveAviable(state, action: PayloadAction<boolean>) {
      state.saveAviable = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTasksThunk.pending, (state) => {
      state.loading = true;
      state.data = [];
    });
    builder.addCase(getTasksThunk.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(getTasksThunk.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const { addTask, toggleTask, setQueryConfig, setSaveAviable } =
  taskSlice.actions;
