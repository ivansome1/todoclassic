import { Box, Link, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Box>
      <Typography variant="body2" sx={{ textAlign: "center", py: 1, px: 3 }}>
        v1.0.0.{" "}
        <Link target="_blank" href="https://github.com/ivansome1/todoclassic">
          github.com/ivansome1/todoclassic
        </Link>
      </Typography>
    </Box>
  );
};
