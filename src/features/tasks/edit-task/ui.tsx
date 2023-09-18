import { FC, PropsWithChildren, useContext, useState } from "react";
import { EditTaskContext, useEditTask } from "./model";
import { Box, IconButton, TextField } from "@mui/material";
import { PrioritySelect, taskModel } from "@/entities/task";
import { Cancel, CheckCircle } from "@mui/icons-material";

export const EditTaskProvider: FC<PropsWithChildren> = ({ children }) => {
  const [editId, setEditId] = useState("");

  return (
    <EditTaskContext.Provider value={{ editId, setEditId }}>
      {children}
    </EditTaskContext.Provider>
  );
};

export const EditTaskForm = () => {
  const { editId, setEditId } = useContext(EditTaskContext);
  const { editTask } = useEditTask();
  const task = taskModel.useTask(editId);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [priority, setPriority] = useState(task.priority);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      <TextField
        placeholder="Title"
        size="small"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <TextField
        placeholder="Description"
        size="small"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <Box sx={{ display: "flex", gap: 1 }}>
        <PrioritySelect
          showLabel={false}
          value={priority}
          onChange={(e) => {
            setPriority(e.target.value as number);
          }}
        />
        <IconButton
          disabled={
            title === task.title &&
            description === task.description &&
            priority === task.priority
          }
          sx={{ ml: "auto" }}
          onClick={() => {
            editTask(title, description ? description : "", priority);
          }}
        >
          <CheckCircle />
        </IconButton>
        <IconButton
          onClick={() => {
            setEditId("");
          }}
        >
          <Cancel />
        </IconButton>
      </Box>
    </Box>
  );
};
