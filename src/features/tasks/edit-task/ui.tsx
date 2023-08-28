import { taskModel } from "@/entities/task";
import { Task } from "@/shared/api";
import { useAppDispatch } from "@/shared/model";
import { PrioritySelect } from "@/entities/task";
import { AddBox, Cancel, CheckCircle, Close } from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { FC, useEffect, useRef, useState } from "react";

interface EditTaskDialogProps {
  task: Task;
  open: boolean;
  onClose: () => void;
}

export const EditTaskDialog: FC<EditTaskDialogProps> = ({
  open,
  onClose,
  task,
}) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [priority, setPriority] = useState(task.priority);
  const color = taskModel.usePriorityColor(priority);

  const dispatch = useAppDispatch();

  function editTask() {
    dispatch(
      taskModel.editTask({
        task,
        title,
        description: description ? description : "",
        priority,
      })
    );
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
  const md = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Dialog
      fullScreen={md}
      PaperProps={{
        sx: {
          width: md ? undefined : "500px",
          border: md ? undefined : 1,
          borderColor: "divider",
        },
      }}
      open={open}
      onClose={() => {
        onClose();
        clear();
      }}
      onKeyDown={(event) => {
        if (event.altKey && event.key === "3") {
          setPriority(2);
        }
        if (event.altKey && event.key === "2") {
          setPriority(1);
        }
        if (event.altKey && event.key === "1") {
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
              editTask();
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
              editTask();
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
            editTask();
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

export const EditTaskMenuItem: FC<{ task: Task }> = ({ task }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <MenuItem
        onClick={() => {
          setOpen(true);
        }}
      >
        <ListItemIcon>
          <AddBox />
        </ListItemIcon>
        <ListItemText primary="Add task" />
      </MenuItem>
      <EditTaskDialog
        task={task}
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      ></EditTaskDialog>
    </>
  );
};
