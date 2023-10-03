import {
  IconButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
} from "@mui/material";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { taskModel } from "@/entities/task";
import { Delete } from "@mui/icons-material";
import { useAppDispatch } from "@/shared/model";

interface RemoveTaskButtonProps {
  id: string;
}

export const RemoveTaskButton: FC<RemoveTaskButtonProps> = ({ id }) => {
  const dispatch = useAppDispatch();

  return (
    <IconButton
      onClick={() => {
        dispatch(taskModel.removeTask(id));
        dispatch(taskModel.setSaveAviable(true));
      }}
    >
      <Delete />
    </IconButton>
  );
};

interface RemoveTaskMenuItemProps {
  id: string;
  onClick: () => void;
}

export const RemoveTaskMenuItem: FC<RemoveTaskMenuItemProps> = ({
  id,
  onClick,
}) => {
  const dispatch = useDispatch();

  return (
    <MenuItem
      onClick={() => {
        dispatch(taskModel.removeTask(id));
        dispatch(taskModel.setSaveAviable(true));
        onClick();
      }}
    >
      <ListItemIcon>
        <Delete />
      </ListItemIcon>
      <ListItemText>Remove</ListItemText>
    </MenuItem>
  );
};
