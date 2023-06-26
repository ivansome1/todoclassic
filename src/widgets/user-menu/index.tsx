import { UserAvatar, UserData } from "@/entities/user";
import { LogoutMenuItem } from "@/features/auth/logout";
import {
  Divider,
  IconButton,
  Menu,
  Tooltip,
  lighten,
  useTheme,
} from "@mui/material";
import { useState } from "react";

export const UserMenu = () => {
  const [anchor, setAnchor] = useState<HTMLElement | null>(null);
  const open = !!anchor;

  const theme = useTheme();

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
          elevation: 15,
          sx: {
            mt: 2,
            width: "210px",
            overflow: "visible",
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 35,
              width: 10,
              height: 10,
              bgcolor: lighten(theme.palette.background.paper, 6.1 * 0.023),
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
      >
        <UserData sx={{ mx: 2, my: 1 }} />
        <Divider sx={{ my: 1 }} />
        <LogoutMenuItem />
      </Menu>
    </>
  );
};
