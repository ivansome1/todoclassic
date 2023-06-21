import { Icon } from "@/shared/ui";
import { ListItemIcon, ListItemText, MenuItem } from "@mui/material";
import { logout } from "../../api";

export const LogoutMenuItem = () => {
  return (
    <MenuItem onClick={logout}>
      <ListItemIcon>
        <Icon>logout</Icon>
      </ListItemIcon>
      <ListItemText>Logout</ListItemText>
    </MenuItem>
  );
};
