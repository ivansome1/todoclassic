import { SignInForm } from "@/features/auth/sign-in";
import { Lock } from "@mui/icons-material";
import { Avatar, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const icon = (
  <Box
    sx={{
      mb: 2,
      diplay: "flex",
      width: "100%",
    }}
  >
    <Avatar sx={{ bgcolor: "success.main", mx: "auto" }}>
      <Lock />
    </Avatar>
    <Typography sx={{ mx: "auto", width: "fit-content" }} variant="h5">
      Sign in
    </Typography>
  </Box>
);

export function SignInPage() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        width: "100%",
        p: 2,
        display: "flex",
      }}
    >
      <Box
        sx={{
          maxWidth: "500px",
          width: "100%",
          m: "auto",
        }}
      >
        {icon}
        <SignInForm />

        <Typography color="primary" component={Link} to="/signup">
          Don't have an account? Sign up
        </Typography>
      </Box>
    </Box>
  );
}
