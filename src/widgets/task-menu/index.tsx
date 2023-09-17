import { CloneTaskMenuItem } from "@/features/tasks/clone-task";
import { EditTaskMenuItem } from "@/features/tasks/edit-task";
import { RemoveTaskMenuItem } from "@/features/tasks/remove-task";
import {
  Box,
  Divider,
  Menu,
  MenuList,
  SwipeableDrawer,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { FC } from "react";

interface TaskMenuProps {
  id: string;
  anchorEl: HTMLElement | null;
  onClose: () => void;
}

export const TaskMenu: FC<TaskMenuProps> = ({ id, anchorEl, onClose }) => {
  const open = Boolean(anchorEl);

  const theme = useTheme();
  const isUnderMd = useMediaQuery(theme.breakpoints.down("md"));

  const content = (
    <MenuList
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 0.5,
        paddingTop: 0,
        paddingBottom: 0,
        "& .MuiMenuItem-root": {
          "& .MuiSvgIcon-root": {
            fontSize: 18,
            marginRight: theme.spacing(1.5),
          },
        },
      }}
    >
      <EditTaskMenuItem onClose={onClose} id={id} />
      <CloneTaskMenuItem onClick={onClose} id={id} />
      <Divider
        sx={{
          "&.MuiDivider-root": {
            marginX: 0.5,
            marginBottom: 0,
            marginTop: 0,
          },
        }}
      />
      <RemoveTaskMenuItem onClick={onClose} id={id} />
    </MenuList>
  );

  if (isUnderMd) {
    return (
      <SwipeableDrawer
        anchor="bottom"
        elevation={4}
        onOpen={() => {}}
        disableSwipeToOpen
        open={open}
        onClose={onClose}
        PaperProps={{
          sx: { borderRadius: 1 },
        }}
      >
        <Box sx={{ my: 0.5 }}>{content}</Box>
      </SwipeableDrawer>
    );
  }
  return (
    <Menu anchorEl={anchorEl} open={open} onClose={onClose}>
      {content}
    </Menu>
  );
};
