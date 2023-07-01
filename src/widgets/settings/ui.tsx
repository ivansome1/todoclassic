import { UserDataRow } from "@/entities/user";
import { LogoutButton } from "@/features/auth/logout";
import { ChevronRight } from "@mui/icons-material";
import {
  Box,
  Divider,
  FormControl,
  Input,
  InputAdornment,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Switch,
  Typography,
} from "@mui/material";

export const Settings = () => {
  return (
    <Paper
      sx={{
        maxWidth: "700px",
        width: "100%",
      }}
    >
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
        <ListItem>
          <ListItemText primary="Page width" />
          <FormControl variant="standard">
            <Input
              type="number"
              endAdornment={<InputAdornment position="end">px</InputAdornment>}
            />
          </FormControl>
        </ListItem>
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
  );
};
