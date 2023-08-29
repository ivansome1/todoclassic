import { SignUpForm } from "@/features/auth/sign-up";
import { Avatar, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Lock } from "@mui/icons-material";

const icon = (
  <Box
    sx={{
      mb: 2,
      diplay: "flex",
      width: "100%",
    }}
  >
    <Avatar sx={{ bgcolor: "primary.main", mx: "auto" }}>
      <Lock />
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
          <Typography component={Link} color="primary" to="/signin">
            Sign in
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
}

export default SignUpPage;
