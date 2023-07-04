import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  ThemeProvider,
  Tooltip,
  createTheme,
  useTheme,
} from "@mui/material";
import { FC, useEffect, useRef, useState } from "react";
import { Add, AddBox, Cancel, CheckCircle, Flag } from "@mui/icons-material";
import { useAppDispatch } from "@/shared/model";
import { taskModel } from "@/entities/task";

interface PrioritySelectProps {
  value: number;
  onChange: (event: SelectChangeEvent<number>) => void;
}

function usePriorityColor(priority: number): string {
  const theme = useTheme();

  switch (priority) {
    case 0:
      return theme.palette.success.main;
    case 1:
      return theme.palette.warning.main;
    case 2:
      return theme.palette.error.main;
  }

  return theme.palette.primary.main;
}

const PrioritySelect: FC<PrioritySelectProps> = ({ value, onChange }) => {
  const color = usePriorityColor(value);

  const theme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: color,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <FormControl>
        <InputLabel>Priority</InputLabel>
        <Select
          startAdornment={
            <InputAdornment position="start">
              <Flag sx={{ color: color }} />
            </InputAdornment>
          }
          size="small"
          value={value}
          onChange={onChange}
          label="Priority"
        >
          <MenuItem value={2}>Priority 3</MenuItem>
          <MenuItem value={1}>Priority 2</MenuItem>
          <MenuItem value={0}>Priority 1</MenuItem>
        </Select>
      </FormControl>
    </ThemeProvider>
  );
};

interface AddTaskDialogProps {
  open: boolean;
  onClose: () => void;
}

export const AddTaskDialog: FC<AddTaskDialogProps> = ({ open, onClose }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState(0);
  const color = usePriorityColor(priority);

  const dispatch = useAppDispatch();

  function addTask() {
    dispatch(taskModel.addTask({ title, description, color }));
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
