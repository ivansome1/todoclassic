import { AddTaskDialogForm } from "@/features/add-task";
import { Add, AddBox } from "@mui/icons-material";
import {
  ListItemText,
  Dialog,
  IconButton,
  ListItemButton,
  ListItemIcon,
  Tooltip,
} from "@mui/material";
import { useState } from "react";

export const AddTaskDialogButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Tooltip title="Add task">
        <IconButton
          onClick={() => {
            setOpen(true);
          }}
        >
          <Add />
        </IconButton>
      </Tooltip>

      <Dialog
        PaperProps={{
          sx: { width: "500px", m: 2 },
        }}
        open={open}
        onClose={() => {
          setOpen(false);
        }}
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
          sx: { width: "500px", m: 2 },
        }}
        open={open}
        onClose={() => {
          setOpen(false);
        }}
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
