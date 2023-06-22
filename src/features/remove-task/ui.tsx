import { Icon } from "@/shared/ui";
import {
  IconButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
} from "@mui/material";
import { removeTask } from "./model";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { setSaveAviable } from "@/entities/task/model";

interface RemoveTaskButtonProps {
  id: number;
}

export const RemoveTaskButton: FC<RemoveTaskButtonProps> = ({ id }) => {
  const dispatch = useDispatch();

  return (
    <IconButton
      onClick={() => {
        removeTask(id);
        dispatch(setSaveAviable(true));
      }}
    >
      <Icon>delete</Icon>
    </IconButton>
  );
};

interface RemoveTaskMenuItemProps {
  id: number;
}

export const RemoveTaskMenuItem: FC<RemoveTaskMenuItemProps> = ({ id }) => {
  const dispatch = useDispatch();

  return (
    <MenuItem
      onClick={() => {
        removeTask(id);
        dispatch(setSaveAviable(true));
      }}
    >
      <ListItemIcon>
        <Icon>delete</Icon>
      </ListItemIcon>
      <ListItemText>Remove</ListItemText>
    </MenuItem>
  );
};
