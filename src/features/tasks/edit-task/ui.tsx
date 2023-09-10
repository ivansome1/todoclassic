import { PrioritySelect, taskModel } from "@/entities/task";
import { useAppDispatch } from "@/shared/model";
import { Cancel, CheckCircle, Close, Edit } from "@mui/icons-material";
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
  id: string;
  open: boolean;
  onClose: () => void;
}

export const EditTaskDialog: FC<EditTaskDialogProps> = ({
  open,
  onClose,
  id,
}) => {
  const task = taskModel.useTask(id);

  const [title, setTitle] = useState(task?.title ? task.title : "");
  const [description, setDescription] = useState(
    task?.description ? task.description : ""
  );
  const [priority, setPriority] = useState(task?.priority ? task.priority : 0);
  const color = taskModel.usePriorityColor(priority);

  const dispatch = useAppDispatch();

  function editTask() {
    dispatch(
      taskModel.editTask({
        id,
        title,
        description: description ? description : "",
        priority,
      })
    );
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
        Edit task
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
          }}
        >
          cancel
        </Button>
        <Button
          disabled={
            title === task?.title &&
            description === task?.description &&
            priority === task?.priority
          }
          onClick={() => {
            editTask();
            onClose();
          }}
          startIcon={<CheckCircle />}
        >
          edit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export const EditTaskMenuItem: FC<{ id: string; onClose: () => void }> = ({
  id,
  onClose,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <MenuItem
        onClick={() => {
          setOpen(true);
        }}
      >
        <ListItemIcon>
          <Edit />
        </ListItemIcon>
        <ListItemText primary="Edit" />
      </MenuItem>
      <EditTaskDialog
        id={id}
        open={open}
        onClose={() => {
          setOpen(false);
          onClose();
        }}
      ></EditTaskDialog>
    </>
  );
};
