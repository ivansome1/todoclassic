import { Icon } from "@/shared/ui";
import {
  AppBar,
  IconButton,
  Toolbar,
  useScrollTrigger,
  Menu,
  Tooltip,
} from "@mui/material";
import { ViewerAvatar, ViewerData } from "@/entities/viewer";
import { useState } from "react";
import { LogoutMenuItem } from "@/features/auth/logout";

const ViewerMenu = () => {
  const [anchor, setAnchor] = useState<HTMLElement | null>(null);
  const open = !!anchor;

  return (
    <>
      <IconButton
        onClick={(event) => {
          setAnchor(event.currentTarget);
        }}
      >
        <ViewerAvatar />
      </IconButton>
      <Menu
        open={open}
        anchorEl={anchor}
        onClose={() => {
          setAnchor(null);
        }}
      >
        <ViewerData fullWidth sx={{ mx: 2, my: 1 }} />
        <LogoutMenuItem />
      </Menu>
    </>
  );
};

export const TaskListHeader = () => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 20,
  });

  return (
    <AppBar
      position="sticky"
      elevation={trigger ? 4 : 0}
      sx={{
        borderBottom: trigger ? 1 : 0,
        borderBottomColor: "divider",
      }}
    >
      <Toolbar sx={{ alignItems: "center", justifyContent: "space-between" }}>
        <Tooltip title="Coming soon">
          <span>
            <IconButton disabled>
              <Icon>menu</Icon>
            </IconButton>
          </span>
        </Tooltip>

        <ViewerMenu />
      </Toolbar>
    </AppBar>
  );
};
