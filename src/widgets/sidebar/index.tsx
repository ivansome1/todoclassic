import { Inbox, Mail, Menu } from "@mui/icons-material";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  IconButtonProps,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { FC, useState } from "react";

const sidebarWidth = 240;

interface SidebarProps extends IconButtonProps {
  open: boolean;
  onClose: () => void;
}

export const TemporarySidebar: FC<SidebarProps> = ({
  open,
  onClose,
  children,
}) => {
  return (
    <Drawer variant="temporary" anchor="left" open={open} onClose={onClose}>
      {children}
    </Drawer>
  );
};

export const SidebarButton = () => {
  const [open, setOpen] = useState(false);

  const content = (
    <Box sx={{ width: sidebarWidth }}>
      <Toolbar />
      <Divider />
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <Inbox /> : <Mail />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <Inbox /> : <Mail />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <IconButton
        aria-label="Open sidebar"
        onClick={() => {
          setOpen(true);
        }}
      >
        <Menu />
      </IconButton>

      <TemporarySidebar
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        {content}
      </TemporarySidebar>
    </>
  );
};
