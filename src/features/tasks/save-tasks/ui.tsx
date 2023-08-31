import { taskModel } from "@/entities/task";
import { useAppDispatch } from "@/shared/model";
import { Save } from "@mui/icons-material";
import { Fab, IconButton, Slide, Tooltip } from "@mui/material";
import { saveTasks } from "./api";

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

export const SaveTasksFab = ({ animationIn }: { animationIn: boolean }) => {
  const dispatch = useAppDispatch();

  function onClick() {
    dispatch(saveTasks());
    dispatch(taskModel.setSaveAviable(false));
  }

  return (
    <Slide direction="up" in={animationIn}>
      <Fab variant="extended" onClick={onClick}>
        <Save sx={{ mr: 1 }} />
        Save tasks
      </Fab>
    </Slide>
  );
};
