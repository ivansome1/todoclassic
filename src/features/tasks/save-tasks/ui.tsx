import { IconButton, Tooltip } from "@mui/material";
import { saveTasks } from "./api";
import { useDispatch } from "react-redux";
import { taskModel } from "@/entities/task";
import { Save } from "@mui/icons-material";

export const SaveTasksButton = () => {
  const dispatch = useDispatch();

  function onClick() {
    saveTasks();
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
