import { PasswordInput } from "@/shared/ui";
import { Box, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useState } from "react";
import { signIn } from "./api";

export const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  function onSubmit() {
    setLoading(true);
    signIn(email, password).finally(() => {
      setLoading(false);
    });
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 1 }}>
      <Box sx={{ display: "flex", gap: 2 }}></Box>
      <TextField
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        fullWidth
        label="Email"
      />
      <PasswordInput
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <LoadingButton
        disabled={!email || !password}
        type="submit"
        loading={loading}
        onClick={onSubmit}
        variant="contained"
        fullWidth
      >
        Login
      </LoadingButton>
    </Box>
  );
};
