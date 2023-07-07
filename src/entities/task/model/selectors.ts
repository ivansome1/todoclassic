import { useAppSelector } from "@/shared/model";

export function useTask(taskId: string) {
  return useAppSelector((state) =>
    state.task.data.find((task) => task.id === taskId)
  );
}

export function useFilteredTasks() {
  const tasks = useAppSelector((state) => state.task.data);
  const config = useAppSelector((state) => state.task.filter?.config);

  if (config) {
    if (typeof config.completed === "boolean") {
      return tasks.filter((task) => task.completed === config.completed);
    }
    if (typeof config.priority === "number") {
      return tasks.filter((task) => task.priority === config.priority);
    }
  }
  return tasks;
}
