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
import { Delete } from "@mui/icons-material";

interface RemoveTaskButtonProps {
  id: string;
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
      <Delete />
    </IconButton>
  );
};

interface RemoveTaskMenuItemProps {
  id: string;
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
        <Delete />
      </ListItemIcon>
      <ListItemText>Remove</ListItemText>
    </MenuItem>
  );
};
