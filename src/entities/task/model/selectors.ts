import { Task } from "@/shared/api";
import { useAppSelector } from "@/shared/model";
import { nanoid } from "nanoid";

export function useTask(taskId: string): Task {
  const task = useAppSelector((state) =>
    state.task.data.find((task) => task.id === taskId)
  );
  if (!task) {
    return {
      title: "",
      description: "",
      completed: false,
      priority: 2,
      id: nanoid(),
    };
  }
  return task;
}

export function useSortedTasks(): Task[] {
  const tasks = useAppSelector((state) => state.task.data);
  const tasksCopy = [...tasks];

  tasksCopy.sort(
    (a, b) =>
      b.priority - a.priority || Number(a.completed) - Number(b.completed)
  );

  return tasksCopy;
}

export function useFilteredTasks() {
  const tasks = useSortedTasks();
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
