import { Box, Typography } from "@mui/material";

export const Logo = () => {
  return (
    <Typography
      component="span"
      sx={{ fontFamily: "monospace", display: "flex", gap: 1 }}
      variant="h6"
    >
      <Box>✅</Box>
      ToDo Classic
    </Typography>
  );
};
