import { Icon } from "@/shared/ui";
import {
  IconButton,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { getTasksThunk } from "./api";
import { useAppDispatch, useAppSelector } from "@/app/store";
import { taskModel } from "@/entities/task";

export const RefreshTasksButton = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector((store) => store.task.loading);

  return (
    <IconButton
      disabled={loading}
      onClick={() => {
        dispatch(getTasksThunk());
        dispatch(taskModel.setSaveAviable(false));
      }}
    >
      <Icon>refresh</Icon>
    </IconButton>
  );
};

export const RefreshTasksListItemButton = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector((store) => store.task.loading);

  return (
    <ListItemButton
      disabled={loading}
      onClick={() => {
        dispatch(getTasksThunk());
        dispatch(taskModel.setSaveAviable(false));
      }}
    >
      <ListItemIcon>
        <Icon>refresh</Icon>
      </ListItemIcon>
      <ListItemText primary="Refresh tasks" />
    </ListItemButton>
  );
};
