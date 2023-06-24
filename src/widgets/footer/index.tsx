import { Link, Paper, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Paper sx={{ borderRadius: 0 }}>
      <Typography variant="body2" sx={{ textAlign: "center", py: 1 }}>
        2023, see source code on{" "}
        <Link href="https://github.com/ivansome1/todoclassic">
          github.com/ivansome1/todoclassic
        </Link>
      </Typography>
    </Paper>
  );
};
