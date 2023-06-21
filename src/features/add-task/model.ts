import { store } from "@/app/store";
import { taskModel } from "@/entities/task";

export function addTask(title: string, description: string, color?: string) {
  store.dispatch(taskModel.addTask({ title, description, color }));
}
