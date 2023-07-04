import { useAppSelector } from "@/shared/model";

export function useTask(taskId: string) {
  return useAppSelector((state) =>
    state.task.data.find((task) => task.id === taskId)
  );
}

export function useFilteredTasks() {
  const tasks = useAppSelector((state) => state.task.data);
  const queryConfig = useAppSelector((state) => state.task.queryConfig);

  if (queryConfig) {
    if (typeof queryConfig.completed === "boolean") {
      return tasks.filter((task) => task.completed === queryConfig.completed);
    }
    if (typeof queryConfig.priority === "number") {
      return tasks.filter((task) => task.priority === queryConfig.priority);
    }
  }
  return tasks;
}
