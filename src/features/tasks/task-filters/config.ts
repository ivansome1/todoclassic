import { taskModel } from "@/entities/task";

export const filterList: taskModel.Filter[] = [
  {
    id: 0,
    title: "Tasks",
    config: {},
  },
  {
    id: 1,
    title: "Done tasks",
    config: { completed: true },
  },
  {
    id: 2,
    title: "Undone tasks",
    config: { completed: false },
  },
];

export const DEFAULT_FILTER_ID = 0;
