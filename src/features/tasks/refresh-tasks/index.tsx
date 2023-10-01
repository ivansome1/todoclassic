import {
  IconButton,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from "@mui/material";
import { getTasks } from "./api";
import { useAppDispatch, useAppSelector } from "@/shared/model";
import { taskModel } from "@/entities/task";
import { Refresh } from "@mui/icons-material";

export const RefreshTasksButton = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector((store) => store.task.loading);

  if (loading) {
    return (
      <IconButton size="large" disabled>
        <Refresh />
      </IconButton>
    );
  }

  return (
    <Tooltip title="Refresh">
      <IconButton
        size="large"
        onClick={() => {
          dispatch(getTasks());
          dispatch(taskModel.setSaveAviable(false));
        }}
      >
        <Refresh />
      </IconButton>
    </Tooltip>
  );
};

export const RefreshTasksListItemButton = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector((store) => store.task.loading);

  return (
    <ListItemButton
      disabled={loading}
      onClick={() => {
        dispatch(getTasks());
        dispatch(taskModel.setSaveAviable(false));
      }}
    >
      <ListItemIcon>
        <Refresh />
      </ListItemIcon>
      <ListItemText primary="Refresh tasks" />
    </ListItemButton>
  );
};
