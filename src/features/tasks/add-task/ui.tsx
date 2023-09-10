import { PrioritySelect, taskModel } from "@/entities/task";
import { useAppDispatch } from "@/shared/model";
import { Add, AddBox, Cancel, CheckCircle, Close } from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fab,
  IconButton,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
  Tooltip,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { FC, useEffect, useRef, useState } from "react";

interface AddTaskDialogProps {
  open: boolean;
  onClose: () => void;
}

export const AddTaskDialog: FC<AddTaskDialogProps> = ({ open, onClose }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState(0);
  const color = taskModel.usePriorityColor(priority);

  const dispatch = useAppDispatch();

  function addTask() {
    dispatch(taskModel.addTask({ title, description, priority }));
  }

  function clear() {
    setTitle("");
    setDescription("");
    setPriority(0);
  }

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 0);
    }
  }, [open]);

  const theme = useTheme();
  const isUnderMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Dialog
      PaperProps={{
        sx: {
          margin: 0,
          maxWidth: isUnderMd ? "100%" : "500px",
          width: "100%",
          maxHeight: isUnderMd ? "100%" : undefined,
          height: isUnderMd ? "100%" : undefined,
          border: 1,
          borderColor: "divider",
        },
      }}
      open={open}
      onClose={() => {
        onClose();
        clear();
      }}
      onKeyDown={(event) => {
        if (event.altKey && event.key === "1") {
          setPriority(2);
        }
        if (event.altKey && event.key === "2") {
          setPriority(1);
        }
        if (event.altKey && event.key === "3") {
          setPriority(0);
        }
      }}
    >
      <DialogTitle>
        Add task
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <Close />
        </IconButton>
      </DialogTitle>
      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2.5,
          alignItems: "start",
        }}
      >
        <TextField
          inputRef={inputRef}
          autoFocus
          autoComplete="off"
          sx={{
            mt: 1,
            "& label.Mui-focused": {
              color: color,
            },
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: color,
              },
            },
          }}
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          onKeyUp={(event) => {
            if (event.key === "Enter" && title) {
              addTask();
              onClose();
              clear();
            }
          }}
          fullWidth
          label="Title"
        />
        <TextField
          autoComplete="off"
          size="small"
          value={description}
          sx={{
            "& label.Mui-focused": {
              color: "text.secondary",
            },
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "text.secondary",
              },
            },
          }}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
          onKeyUp={(event) => {
            if (event.key === "Enter" && title) {
              addTask();
              onClose();
              clear();
            }
          }}
          fullWidth
          label="Description"
        />

        <PrioritySelect
          value={priority}
          onChange={(e) => {
            if (typeof e.target.value === "number") {
              setPriority(e.target.value);
            }
          }}
        />
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
      <Tooltip title="Add task">
        <IconButton
          onClick={() => {
            setOpen(true);
          }}
        >
          <Add />
        </IconButton>
      </Tooltip>

      <AddTaskDialog
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      ></AddTaskDialog>
    </>
  );
};

export const AddTaskFab = () => {
  const [open, setOpen] = useState(false);

  const theme = useTheme();
  const isUnderMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Fab
        size={!isUnderMd ? "medium" : "large"}
        onClick={() => {
          setOpen(true);
        }}
      >
        <Add />
      </Fab>

      <AddTaskDialog
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      ></AddTaskDialog>
    </>
  );
};
