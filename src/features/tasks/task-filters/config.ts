import { taskModel } from "@/entities/task";

export const filterList: taskModel.Filter[] = [
  {
    id: 0,
    title: "All",
    config: {},
  },
  {
    id: 1,
    title: "Done",
    config: { completed: true },
  },
  {
    id: 2,
    title: "Undone",
    config: { completed: false },
  },
];

export const DEFAULT_FILTER_ID = 0;
