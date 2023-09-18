import { useAppDispatch, useAppSelector } from "@/shared/model";
import { saveTasks } from "./api";
import { taskModel } from "@/entities/task";

export function useSaveTasks() {
  const dispatch = useAppDispatch();
  const saveAviable = useAppSelector((state) => state.task.saveAviable);

  return {
    saveAviable,
    saveTasks: () => {
      dispatch(saveTasks());
      dispatch(taskModel.setSaveAviable(false));
    },
  };
}
