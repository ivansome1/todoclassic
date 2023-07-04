import { taskModel } from "@/entities/task";

export type Filter = {
  id: number;
  title: string;
  config: taskModel.QueryConfig;
};

export const filterList: Filter[] = [
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
  {
    id: 3,
    title: "Priority 3",
    config: { priority: 2 },
  },
  {
    id: 4,
    title: "Priority 2",
    config: { priority: 1 },
  },
  {
    id: 5,
    title: "Priority 1",
    config: { priority: 0 },
  },
];

export const DEFAULT_FILTER_ID = 0;
