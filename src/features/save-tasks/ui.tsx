import { Icon } from "@/shared/ui";
import { IconButton } from "@mui/material";
import { saveTasks } from "./api";
import { useDispatch } from "react-redux";
import { setSaveAviable } from "@/entities/task/model";

export const SaveTasksButton = () => {
  const dispatch = useDispatch();

  function onClick() {
    saveTasks();
    dispatch(setSaveAviable(false));
  }

  return (
    <IconButton onClick={onClick}>
      <Icon>save</Icon>
    </IconButton>
  );
};
