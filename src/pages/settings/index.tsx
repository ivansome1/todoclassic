import { UserDataRow } from "@/entities/user";
import { LogoutButton } from "@/features/auth/logout";
import { SettingsHeader } from "@/widgets/settings-header";
import { AccountCircle, Brush, ChevronRight, Star } from "@mui/icons-material";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material";

export const SettingsPage = () => {
  return (
    <Box>
      <SettingsHeader />
      <Box
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Paper sx={{ maxWidth: "700px", width: "100%" }}>
          <List>
            <ListItem>
              <UserDataRow />
              <LogoutButton sx={{ ml: "auto" }} />
            </ListItem>
            <Divider sx={{ my: 1 }} />
            <ListItemButton>
              <ListItemIcon>
                <AccountCircle />
              </ListItemIcon>
              <ListItemText primary="Account" />
              <ChevronRight />
            </ListItemButton>
            <Divider sx={{ my: 1 }} />
            <ListItemButton>
              <ListItemIcon>
                <Brush />
              </ListItemIcon>
              <ListItemText primary="Appearance" />
              <ChevronRight />
            </ListItemButton>
            <Divider sx={{ my: 1 }} />
            <ListItemButton>
              <ListItemIcon>
                <Star />
              </ListItemIcon>
              <ListItemText primary="About Todo Classic" />
              <ChevronRight />
            </ListItemButton>
          </List>
        </Paper>
      </Box>
    </Box>
  );
};
