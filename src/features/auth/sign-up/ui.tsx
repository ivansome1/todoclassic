import { PasswordInput } from "@/shared/ui";
import { LoadingButton } from "@mui/lab";
import { Box, TextField } from "@mui/material";
import { useState } from "react";
import { signUp } from "./api";

export const SignUpForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  function onSubmit() {
    setLoading(true);
    signUp(`${firstName} ${lastName}`, email, password).finally(() => {
      setLoading(false);
    });
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 1 }}>
      <Box sx={{ display: "flex", gap: 2 }}>
        <TextField
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
          sx={{ flexGrow: 1 }}
          label="First name"
        />
        <TextField
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
          sx={{ flexGrow: 1 }}
          label="Last name"
        />
      </Box>
      <TextField
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
        loading={loading}
        onClick={onSubmit}
        variant="contained"
        fullWidth
      >
        Sign Up
      </LoadingButton>
    </Box>
  );
};
