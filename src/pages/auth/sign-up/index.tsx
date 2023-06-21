import { SignUpForm } from "@/features/auth/sign-up";
import { Icon } from "@/shared/ui";
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
    <Avatar sx={{ bgcolor: "secondary.main", mx: "auto" }}>
      <Icon>lock</Icon>
    </Avatar>
    <Typography sx={{ mx: "auto", width: "fit-content" }} variant="h5">
      Sign up
    </Typography>
  </Box>
);

export function SignUpPage() {
  return (
    <Box
      sx={{
        height: "100dvh",
        width: "100%",
        p: 2,
        display: "flex",
      }}
    >
      <Box sx={{ maxWidth: "500px", width: "100%", m: "auto" }}>
        {icon}
        <SignUpForm />
        <Typography color="primary" component={Link} to="/signin">
          Already have an account? Sign in
        </Typography>
      </Box>
    </Box>
  );
}
