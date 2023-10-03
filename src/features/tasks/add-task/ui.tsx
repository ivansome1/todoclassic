import { PrioritySelect, taskModel } from "@/entities/task";
import { useAppDispatch } from "@/shared/model";
import { Send } from "@mui/icons-material";
import { Box, Button, TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react";

export const AddTaskForm = ({ open }: { open: boolean }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState(0);
  const color = taskModel.usePriorityColor(priority);

  const dispatch = useAppDispatch();

  function addTask() {
    dispatch(taskModel.addTask({ title, description, priority }));
    clear();
  }

  function clear() {
    setTitle("");
    setDescription("");
  }

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Box
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
            clear();
          }
        }}
        fullWidth
        label="Description"
      />

      <Box sx={{ display: "flex", width: "100%" }}>
        <PrioritySelect
          value={priority}
          onChange={(e) => {
            if (typeof e.target.value === "number") {
              setPriority(e.target.value);
            }
          }}
        />
        <Button
          onClick={() => {
            addTask();
          }}
          sx={{ ml: "auto" }}
          variant="contained"
        >
          <Send />
        </Button>
      </Box>
    </Box>
  );
};
