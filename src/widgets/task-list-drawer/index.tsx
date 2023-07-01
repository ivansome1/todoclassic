import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useState } from "react";
import { AddTaskDialogListItemButton } from "@/features/tasks/add-task";
import { RefreshTasksListItemButton } from "@/features/tasks/refresh-tasks";
import { ChevronLeft, Menu, Settings } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export const TaskListDrawer = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <IconButton
        onClick={() => {
          setOpen(true);
        }}
      >
        <Menu />
      </IconButton>
      <Drawer
        anchor="left"
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
            p: 1,
          }}
        >
          <IconButton
            onClick={() => {
              setOpen(false);
            }}
          >
            <ChevronLeft />
          </IconButton>
        </Box>
        <Divider />
        <Box sx={{ width: "270px" }}>
          <List>
            <AddTaskDialogListItemButton />
            <RefreshTasksListItemButton />

            <Divider sx={{ my: 1 }} />

            <ListItemButton
              onClick={() => {
                navigate("/settings");
              }}
            >
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </List>
        </Box>
      </Drawer>
    </>
  );
};
