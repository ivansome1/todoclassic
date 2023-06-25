import { AddTaskDialogForm } from "@/features/add-task";
import { Icon } from "@/shared/ui";
import {
  ListItemText,
  Dialog,
  IconButton,
  ListItemButton,
  ListItemIcon,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";

export const AddTaskDialogButton = () => {
  const [open, setOpen] = useState(false);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <IconButton
        onClick={() => {
          setOpen(true);
        }}
      >
        <Icon>add</Icon>
      </IconButton>
      <Dialog
        PaperProps={{
          sx: { width: !fullScreen ? "500px" : undefined },
        }}
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        fullScreen={fullScreen}
      >
        <AddTaskDialogForm
          onCancel={() => {
            setOpen(false);
          }}
          onAdd={() => {
            setOpen(false);
          }}
        />
      </Dialog>
    </>
  );
};

export const AddTaskDialogListItemButton = ({
  onAdd,
}: {
  onAdd?: () => void;
}) => {
  const [open, setOpen] = useState(false);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <ListItemButton
        onClick={() => {
          setOpen(true);
        }}
      >
        <ListItemIcon>
          <Icon>add_box</Icon>
        </ListItemIcon>
        <ListItemText primary="New task" />
      </ListItemButton>
      <Dialog
        PaperProps={{
          sx: { width: !fullScreen ? "500px" : undefined },
        }}
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        fullScreen={fullScreen}
      >
        <AddTaskDialogForm
          onCancel={() => {
            setOpen(false);
          }}
          onAdd={() => {
            setOpen(false);
            if (onAdd) {
              onAdd();
            }
          }}
        />
      </Dialog>
    </>
  );
};
