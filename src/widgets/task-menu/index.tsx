import { RemoveTaskMenuItem } from "@/features/remove-task";
import { Icon } from "@/shared/ui";
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
        <Icon>more_vert</Icon>
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
