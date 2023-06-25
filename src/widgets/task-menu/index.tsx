import { RemoveTaskMenuItem } from "@/features/remove-task";
import { MoreVert } from "@mui/icons-material";
import { IconButton, Menu } from "@mui/material";
import { FC, useState } from "react";

interface TaskMenuProps {
  id: string;
}

export const TaskMenu: FC<TaskMenuProps> = ({ id }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

  return (
    <>
      <IconButton
        onClick={(event) => {
          setAnchorEl(event.currentTarget);
        }}
      >
        <MoreVert />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={() => {
          setAnchorEl(null);
        }}
      >
        <RemoveTaskMenuItem id={id} />
      </Menu>
    </>
  );
};
