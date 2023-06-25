import { Icon } from "@/shared/ui";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from "@mui/material";
import { useState } from "react";
import { AddTaskDialogListItemButton } from "../add-task-dialog";
import { RefreshTasksListItemButton } from "@/features/refresh-tasks";

export const TaskListDrawer = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <IconButton
        onClick={() => {
          setOpen(true);
        }}
      >
        <Icon>menu</Icon>
      </IconButton>
      <Drawer
        PaperProps={{
          sx: {
            boxShadow: "none",
          },
        }}
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
            <Icon>chevron_left</Icon>
          </IconButton>
        </Box>
        <Divider />
        <Box sx={{ width: "270px" }}>
          <List>
            <AddTaskDialogListItemButton
              onAdd={() => {
                setOpen(false);
              }}
            />
            <RefreshTasksListItemButton />

            <Divider sx={{ my: 1 }} />

            <Tooltip title="Coming soon">
              <span>
                <ListItemButton disabled>
                  <ListItemIcon>
                    <Icon>settings</Icon>
                  </ListItemIcon>
                  <ListItemText primary="Settings" />
                </ListItemButton>
              </span>
            </Tooltip>
          </List>
        </Box>
      </Drawer>
    </>
  );
};
