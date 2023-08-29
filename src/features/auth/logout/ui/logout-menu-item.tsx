import { ListItemIcon, ListItemText, MenuItem } from "@mui/material";
import { logout } from "../api";
import { Logout } from "@mui/icons-material";

export const LogoutMenuItem = () => {
  return (
    <MenuItem
      onClick={() => {
        if (confirm("Are you sure you want to logout?")) {
          logout();
        }
      }}
    >
      <ListItemIcon>
        <Logout />
      </ListItemIcon>
      <ListItemText>Logout</ListItemText>
    </MenuItem>
  );
};
