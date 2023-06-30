import { UserDataRow } from "@/entities/user";
import { LogoutButton } from "@/features/auth/logout";
import { SettingsHeader } from "@/widgets/settings-header";
import { ChevronRight } from "@mui/icons-material";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Switch,
  Typography,
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
        <Box
          sx={{
            maxWidth: "700px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Paper>
            <List>
              <ListItem>
                <UserDataRow />

                <LogoutButton sx={{ ml: "auto" }} />
              </ListItem>
            </List>

            <Divider />

            <List>
              <Box sx={{ mx: 2, my: 1 }}>
                <Typography variant="button" color="text.secondary">
                  account settings
                </Typography>
              </Box>

              <ListItemButton>
                <ListItemText primary="Edit profile" />
                <ChevronRight />
              </ListItemButton>
              <ListItemButton>
                <ListItemText primary="Hide sensetive data" />
                <Switch />
              </ListItemButton>
            </List>

            <Divider />

            <List>
              <Box sx={{ mx: 2, my: 1 }}>
                <Typography variant="button" color="text.secondary">
                  personalization
                </Typography>
              </Box>

              <ListItemButton>
                <ListItemText primary="Dark mode" />
                <Switch />
              </ListItemButton>
            </List>

            <Divider />

            <List>
              <Box sx={{ mx: 2, my: 1 }}>
                <Typography variant="button" color="text.secondary">
                  more
                </Typography>
              </Box>

              <ListItemButton>
                <ListItemText primary="About us" />
                <ChevronRight />
              </ListItemButton>
            </List>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};
