import { taskModel } from "@/entities/task";
import { useAppDispatch } from "@/shared/model";
import { Dispatch, SetStateAction, createContext, useContext } from "react";

type EditTaskContextType = {
  editId: string;
  setEditId: Dispatch<SetStateAction<string>>;
};

export const EditTaskContext = createContext<EditTaskContextType>({
  editId: "",
  setEditId: () => {},
});

export function useEditTask() {
  const dispatch = useAppDispatch();
  const { editId, setEditId } = useContext(EditTaskContext);

  return {
    editTask: (title: string, description: string, priority: number) => {
      dispatch(
        taskModel.editTask({
          id: editId,
          title,
          description: description ? description : "",
          priority,
        })
      );
      setEditId("");
    },
  };
}
