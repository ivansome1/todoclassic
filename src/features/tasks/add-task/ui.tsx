import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
  useTheme,
} from "@mui/material";
import { FC, useEffect, useRef, useState } from "react";
import { ButtonColorPicker } from "@/shared/ui";
import { Add, AddBox, Cancel, CheckCircle } from "@mui/icons-material";
import { useAppDispatch } from "@/shared/model";
import { taskModel } from "@/entities/task";

interface AddTaskDialogProps {
  open: boolean;
  onClose: () => void;
}

export const AddTaskDialog: FC<AddTaskDialogProps> = ({ open, onClose }) => {
  const theme = useTheme();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState(theme.palette.success.main);

  const dispatch = useAppDispatch();

  function addTask() {
    dispatch(taskModel.addTask({ title, description, color }));
  }

  function clear() {
    setTitle("");
    setDescription("");
    setColor(theme.palette.success.main);
  }

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <Dialog
      PaperProps={{
        sx: { width: "500px", m: 2 },
      }}
      open={open}
      onClose={() => {
        onClose();
        clear();
      }}
    >
      <DialogTitle>Add task</DialogTitle>
      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          alignItems: "start",
        }}
      >
        <TextField
          inputRef={inputRef}
          autoFocus
          autoComplete="off"
          sx={{
            mt: 2,
          }}
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          fullWidth
          label="Title"
        />
        <TextField
          autoComplete="off"
          size="small"
          value={description}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
          fullWidth
          label="Description"
        />
        <Box sx={{ display: "flex", gap: 1 }}>
          <ButtonColorPicker
            value={color}
            onChange={(event) => {
              setColor(event.target.value);
            }}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button
          startIcon={<Cancel />}
          onClick={() => {
            onClose();
            clear();
          }}
        >
          cancel
        </Button>
        <Button
          disabled={!title}
          onClick={() => {
            addTask();
            onClose();
            clear();
          }}
          startIcon={<CheckCircle />}
        >
          add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export const AddTaskDialogListItemButton = () => {
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
        <ListItemText primary="Add task" />
      </ListItemButton>
      <AddTaskDialog
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      ></AddTaskDialog>
    </>
  );
};

export const AddTaskDialogButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <IconButton
        onClick={() => {
          setOpen(true);
        }}
      >
        <Add />
      </IconButton>
      <AddTaskDialog
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      ></AddTaskDialog>
    </>
  );
};
