import { Logo } from "@/shared/ui";
import {
  Box,
  Button,
  Fade,
  ThemeProvider,
  Typography,
  createTheme,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";

export const GreetingPage = () => {
  const currTheme = useTheme();
  const theme = createTheme({
    ...currTheme,
    transitions: {
      duration: {
        enteringScreen: 700,
        leavingScreen: 100,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Fade in>
        <Box
          sx={{
            maxWidth: "700px",
            width: "100%",
            flexGrow: 1,
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Logo sx={{ width: 64, height: 64, mb: 2 }}></Logo>
          <Typography variant="h4">Welcome!</Typography>
          <Typography variant="body1" color="text.secondary">
            Login or sign up to get started.
          </Typography>
          <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
            <Button
              variant="outlined"
              style={{ border: "2px solid" }}
              sx={{ borderRadius: 100 }}
              component={Link}
              to="/signup"
            >
              Sign Up
            </Button>
            <Button
              component={Link}
              to="/login"
              variant="contained"
              sx={{ borderRadius: 100 }}
            >
              Login
            </Button>
          </Box>
        </Box>
      </Fade>
    </ThemeProvider>
  );
};
