import { SignInForm } from "@/features/auth/sign-in";
import { Lock } from "@mui/icons-material";
import { Avatar, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { FC } from "react";

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
      Login
    </Typography>
  </Box>
);

const SignInPage: FC = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        width: "100%",
        p: 1,
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

        <Typography sx={{ mt: 2, textAlign: "center" }}>
          Don't have an account?{" "}
          <Typography component={Link} color="primary" to="/signup">
            Create new one
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
};

export default SignInPage;
