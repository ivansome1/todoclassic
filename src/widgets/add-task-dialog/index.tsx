import { AddTaskDialogForm } from "@/features/add-task";
import { Add, AddBox } from "@mui/icons-material";
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
        <Add />
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
          <AddBox />
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
