import { IconButton, Tooltip } from "@mui/material";
import { saveTasks } from "./api";
import { useDispatch } from "react-redux";
import { setSaveAviable } from "@/entities/task/model";
import { Save } from "@mui/icons-material";

export const SaveTasksButton = () => {
  const dispatch = useDispatch();

  function onClick() {
    saveTasks();
    dispatch(setSaveAviable(false));
  }

  return (
    <Tooltip title="Save tasks">
      <IconButton onClick={onClick}>
        <Save />
      </IconButton>
    </Tooltip>
  );
};
