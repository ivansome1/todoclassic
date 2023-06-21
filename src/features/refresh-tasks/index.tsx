import { Icon } from "@/shared/ui";
import { IconButton } from "@mui/material";
import { getTasksThunk } from "./api";
import { useAppDispatch, useAppSelector } from "@/app/store";

export const RefreshTasksButton = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector((store) => store.task.loading);

  return (
    <IconButton
      disabled={loading}
      onClick={() => {
        dispatch(getTasksThunk());
      }}
    >
      <Icon>refresh</Icon>
    </IconButton>
  );
};
