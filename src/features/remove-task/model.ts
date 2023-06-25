import { store } from "@/app/store";
import { taskModel } from "@/entities/task";

export function removeTask(id: string) {
  store.dispatch(taskModel.removeTask(id));
}
