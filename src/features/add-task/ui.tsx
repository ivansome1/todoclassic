import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  useTheme,
} from "@mui/material";
import { FC, useEffect, useRef, useState } from "react";
import { addTask } from "./model";
import { ButtonColorPicker } from "@/shared/ui";
import { Cancel, CheckCircle } from "@mui/icons-material";

interface AddTaskDialogFormProps {
  onCancel: () => void;
  onAdd?: () => void;
}

export const AddTaskDialogForm: FC<AddTaskDialogFormProps> = ({
  onCancel,
  onAdd,
}) => {
  const theme = useTheme();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState(theme.palette.success.main);

  function add() {
    addTask(title, description, color);
    if (onAdd) {
      onAdd();
    }
  }

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <>
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
        <Button onClick={onCancel} startIcon={<Cancel />}>
          cancel
        </Button>
        <Button disabled={!title} onClick={add} startIcon={<CheckCircle />}>
          add
        </Button>
      </DialogActions>
    </>
  );
};
