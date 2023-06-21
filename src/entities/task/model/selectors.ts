import { useAppSelector } from "@/app/store";

export function useTask(taskId: number) {
  return useAppSelector((state) =>
    state.task.data.find((task) => task.id === taskId)
  );
}

export function useFilteredTasks() {
  const tasks = useAppSelector((state) => state.task.data);
  const queryConfig = useAppSelector((state) => state.task.queryConfig);

  const filteredTaskList = queryConfig
    ? queryConfig.completed === undefined
      ? tasks
      : tasks.filter((task) => task.completed === queryConfig.completed)
    : tasks;

  return filteredTaskList;
}
