import { CloneTaskMenuItem } from "@/features/tasks/clone-task";
import { EditTaskMenuItem } from "@/features/tasks/edit-task";
import { RemoveTaskMenuItem } from "@/features/tasks/remove-task";
import { MoreVert } from "@mui/icons-material";
import { Divider, IconButton, Menu, useTheme } from "@mui/material";
import { FC, useState } from "react";

interface TaskMenuProps {
  id: string;
}

export const TaskMenuButton: FC<TaskMenuProps> = ({ id }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

  const theme = useTheme();

  return (
    <>
      <IconButton
        onClick={(event) => {
          setAnchorEl(event.currentTarget);
        }}
      >
        <MoreVert sx={{ color: "text.secondary" }} />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={() => {
          setAnchorEl(null);
        }}
        sx={{
          "& .MuiMenuItem-root": {
            "& .MuiSvgIcon-root": {
              fontSize: 18,
              marginRight: theme.spacing(1.5),
            },
          },
        }}
        PaperProps={{
          sx: {
            border: 1,
            borderColor: "divider",
          },
        }}
      >
        <EditTaskMenuItem
          onClose={() => {
            setAnchorEl(null);
          }}
          id={id}
        />
        <CloneTaskMenuItem
          onClick={() => {
            setAnchorEl(null);
          }}
          id={id}
        />
        <Divider sx={{ "&.MuiDivider-root": { margin: 0.5 } }} />
        <RemoveTaskMenuItem
          onClick={() => {
            setAnchorEl(null);
          }}
          id={id}
        />
      </Menu>
    </>
  );
};
