import { UserAvatar, UserDataColumn } from "@/entities/user";
import { LogoutMenuItem } from "@/features/auth/logout";
import { Divider, IconButton, Menu, Tooltip } from "@mui/material";
import { useState } from "react";

export const UserMenuButton = () => {
  const [anchor, setAnchor] = useState<HTMLElement | null>(null);
  const open = !!anchor;

  return (
    <>
      <Tooltip title="Account">
        <IconButton
          onClick={(event) => {
            setAnchor(event.currentTarget);
          }}
        >
          <UserAvatar style={{ width: 32, height: 32 }} />
        </IconButton>
      </Tooltip>

      <Menu
        open={open}
        anchorEl={anchor}
        onClose={() => {
          setAnchor(null);
        }}
        PaperProps={{
          sx: {
            width: "210px",
            border: 1,
            borderColor: "divider",
          },
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <UserDataColumn sx={{ mx: 2, my: 1 }} />
        <Divider sx={{ my: 1 }} />
        <LogoutMenuItem />
      </Menu>
    </>
  );
};
