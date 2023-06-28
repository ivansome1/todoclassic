import { Logout } from "@mui/icons-material";
import { IconButton, IconButtonProps } from "@mui/material";
import { logout } from "../api";
import { FC } from "react";

export const LogoutButton: FC<IconButtonProps> = (props) => {
  return (
    <IconButton {...props} onClick={logout}>
      <Logout />
    </IconButton>
  );
};
