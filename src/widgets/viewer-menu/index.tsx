import { ViewerAvatar, ViewerData } from "@/entities/viewer";
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

export const ViewerMenu = () => {
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
          <ViewerAvatar style={{ width: 32, height: 32 }} />
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
            overflow: "visible",
            mt: 1.5,
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 22,
              width: 10,
              height: 10,
              bgcolor: lighten(theme.palette.background.paper, 5 * 0.025),
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
      >
        <ViewerData sx={{ mx: 2, my: 1 }} />
        <Divider sx={{ my: 1 }} />
        <LogoutMenuItem />
      </Menu>
    </>
  );
};
