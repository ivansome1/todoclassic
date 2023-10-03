import { taskModel } from "@/entities/task";
import { useAppDispatch } from "@/shared/model";
import { CopyAll } from "@mui/icons-material";
import { ListItemIcon, ListItemText, MenuItem } from "@mui/material";

export const CloneTaskMenuItem = ({
  id,
  onClick,
}: {
  id: string;
  onClick?: () => void;
}) => {
  const dispatch = useAppDispatch();

  return (
    <MenuItem
      onClick={() => {
        dispatch(taskModel.cloneTask(id));
        if (onClick) {
          onClick();
        }
      }}
    >
      <ListItemIcon>
        <CopyAll />
      </ListItemIcon>

      <ListItemText>Clone</ListItemText>
    </MenuItem>
  );
};
