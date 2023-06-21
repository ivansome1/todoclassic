import { QueryConfig } from "@/entities/task/model";

export type Filter = {
  id: number;
  title: string;
  config: QueryConfig;
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
];

export const DEFAULT_FILTER_ID = 0;
