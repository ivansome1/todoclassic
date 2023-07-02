import { Box, Divider, Drawer, IconButton, List } from "@mui/material";
import { useState } from "react";
import { AddTaskDialogListItemButton } from "@/features/tasks/add-task";
import { RefreshTasksListItemButton } from "@/features/tasks/refresh-tasks";
import { ChevronLeft, Menu } from "@mui/icons-material";

export const TaskListDrawer = () => {
  const [open, setOpen] = useState(false);

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
          </List>
        </Box>
      </Drawer>
    </>
  );
};
