import { DarkMode, Menu, Translate } from "@mui/icons-material";
import {
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu as MaterialMenu,
  MenuItem,
} from "@mui/material";
import { MouseEvent, useState } from "react";

export const MainMenuButton = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  return (
    <>
      <IconButton
        onClick={(event: MouseEvent<HTMLButtonElement>) => {
          setAnchorEl(event.currentTarget);
        }}
      >
        <Menu />
      </IconButton>

      <MaterialMenu
        elevation={20}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={!!anchorEl}
        anchorEl={anchorEl}
        onClose={() => {
          setAnchorEl(null);
        }}
      >
        <MenuItem
          onClick={() => {
            setAnchorEl(null);
          }}
        >
          Disable sort by priority
        </MenuItem>
        <MenuItem
          onClick={() => {
            setAnchorEl(null);
          }}
        >
          Disable sort by completed
        </MenuItem>
        <MenuItem
          onClick={() => {
            setAnchorEl(null);
          }}
        >
          <ListItemIcon>
            <Translate />
          </ListItemIcon>
          <ListItemText>Language</ListItemText>
        </MenuItem>
        <MenuItem
          onClick={() => {
            setAnchorEl(null);
          }}
        >
          <ListItemIcon>
            <DarkMode />
          </ListItemIcon>
          <ListItemText>Theme: dark</ListItemText>
        </MenuItem>
      </MaterialMenu>
    </>
  );
};
