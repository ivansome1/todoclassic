import { SignUpForm } from "@/features/auth/sign-up";
import { Avatar, Box, Typography, Link as MuiLink } from "@mui/material";
import { Link } from "react-router-dom";
import { LockOpen } from "@mui/icons-material";

const icon = (
  <Box
    sx={{
      mb: 2,
      diplay: "flex",
      width: "100%",
    }}
  >
    <Avatar
      sx={{
        bgcolor: "background.default",
        mx: "auto",
        border: 2,
        borderColor: "primary.main",
      }}
    >
      <LockOpen color="primary" />
    </Avatar>
    <Typography sx={{ mx: "auto", width: "fit-content" }} variant="h5">
      Sign up
    </Typography>
  </Box>
);

function SignUpPage() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        width: "100%",
        p: 1,
        display: "flex",
      }}
    >
      <Box sx={{ maxWidth: "500px", width: "100%", m: "auto" }}>
        {icon}
        <SignUpForm />
        <Typography sx={{ mt: 2, textAlign: "center" }}>
          Already have an account?{" "}
          <MuiLink component={Link} color="primary" to="/login">
            Login
          </MuiLink>
        </Typography>
      </Box>
    </Box>
  );
}

export default SignUpPage;
