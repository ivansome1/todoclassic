import { AddTaskDialogForm } from "@/features/add-task";
import { Icon } from "@/shared/ui";
import { Dialog, IconButton, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";

export const AddTaskDialog = () => {
  const [open, setOpen] = useState(false);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <IconButton
        onClick={() => {
          setOpen(true);
        }}
      >
        <Icon>add</Icon>
      </IconButton>
      <Dialog
        PaperProps={{
          sx: { width: !fullScreen ? "500px" : undefined },
        }}
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        fullScreen={fullScreen}
      >
        <AddTaskDialogForm
          onCancel={() => {
            setOpen(false);
          }}
          onAdd={() => {
            setOpen(false);
          }}
        />
      </Dialog>
    </>
  );
};
