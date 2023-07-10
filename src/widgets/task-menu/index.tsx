import { CloneTaskMenuItem } from "@/features/tasks/clone-task";
import { RemoveTaskMenuItem } from "@/features/tasks/remove-task";
import { Edit, MoreVert } from "@mui/icons-material";
import {
  Divider,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  MenuProps,
  styled,
} from "@mui/material";
import { FC, useState } from "react";

interface TaskMenuProps {
  id: string;
}

const StyledMenu = styled((props: MenuProps) => <Menu {...props} />)(
  ({ theme }) => ({
    "& .MuiPaper-root": {
      marginTop: theme.spacing(1),
      minWidth: 150,
      color:
        theme.palette.mode === "light"
          ? "rgb(55, 65, 81)"
          : theme.palette.grey[300],

      "& .MuiMenu-list": {
        padding: "4px 0",
      },
      "& .MuiMenuItem-root": {
        "& .MuiSvgIcon-root": {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
      },
    },
  })
);

export const TaskMenuButton: FC<TaskMenuProps> = ({ id }) => {
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

      <StyledMenu
        anchorEl={anchorEl}
        open={open}
        onClose={() => {
          setAnchorEl(null);
        }}
        PaperProps={{
          sx: {
            border: 1,
            borderColor: "divider",
          },
        }}
      >
        <MenuItem>
          <ListItemIcon>
            <Edit />
          </ListItemIcon>
          <ListItemText>Edit</ListItemText>
        </MenuItem>
        <CloneTaskMenuItem
          onClick={() => {
            setAnchorEl(null);
          }}
          id={id}
        />
        <Divider sx={{ py: 0, "&.MuiDivider-root": { my: 0.5 } }} />
        <RemoveTaskMenuItem id={id} />
      </StyledMenu>
    </>
  );
};
