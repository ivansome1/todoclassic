import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { FC } from "react";

interface ConfirmProps {
  open: boolean;
  onSubmit: () => void;
  onCancel: () => void;
  title?: string;
  description?: string;
  submitMessage?: string;
}

export const Confirm: FC<ConfirmProps> = (props) => {
  const { open, onCancel, onSubmit, title, description, submitMessage } = props;

  return (
    <Dialog
      PaperProps={{ sx: { width: "400px" } }}
      open={open}
      onClose={onCancel}
    >
      <DialogTitle>{title || "Confirm the action"}</DialogTitle>

      <DialogContent>
        <DialogContentText>
          {description || "Do you want to?"}
        </DialogContentText>
      </DialogContent>

      <DialogActions>
        <Button onClick={onCancel}>cancel</Button>
        <Button onClick={onSubmit}>{submitMessage || "OK"}</Button>
      </DialogActions>
    </Dialog>
  );
};
