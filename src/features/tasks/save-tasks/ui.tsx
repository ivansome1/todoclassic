import { Fab, IconButton, Tooltip } from "@mui/material";
import { saveTasks } from "./api";
import { taskModel } from "@/entities/task";
import { Save } from "@mui/icons-material";
import { useAppDispatch } from "@/shared/model";

export const SaveTasksButton = () => {
  const dispatch = useAppDispatch();

  function onClick() {
    dispatch(saveTasks());
    dispatch(taskModel.setSaveAviable(false));
  }

  return (
    <Tooltip title="Save tasks">
      <IconButton onClick={onClick}>
        <Save />
      </IconButton>
    </Tooltip>
  );
};

export const SaveTasksFab = () => {
  const dispatch = useAppDispatch();

  function onClick() {
    dispatch(saveTasks());
    dispatch(taskModel.setSaveAviable(false));
  }

  return (
    <Fab size="small" onClick={onClick}>
      <Save />
    </Fab>
  );
};
