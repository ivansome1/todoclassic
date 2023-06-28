import { ArrowBack } from "@mui/icons-material";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import { ReactNode, FC } from "react";
import { useNavigate } from "react-router-dom";

interface SettingsHeaderProps {
  after?: ReactNode;
}

export const SettingsHeader: FC<SettingsHeaderProps> = ({ after }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 20,
  });

  const navigate = useNavigate();

  return (
    <AppBar
      position="sticky"
      elevation={trigger ? 4 : 0}
      sx={{
        borderBottom: trigger ? 1 : 0,
        borderBottomColor: "divider",
      }}
    >
      <Toolbar sx={{ alignItems: "center", gap: 1 }}>
        <IconButton
          onClick={() => {
            navigate(-1);
          }}
        >
          <ArrowBack />
        </IconButton>
        <Typography variant="h6">Settings</Typography>
        <Box sx={{ ml: "auto" }}>{after}</Box>
      </Toolbar>
    </AppBar>
  );
};
