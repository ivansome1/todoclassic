import { Link, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Typography variant="body2" sx={{ textAlign: "center", py: 1, px: 4 }}>
      2023, see source code on{" "}
      <Link target="_blank" href="https://github.com/ivansome1/todoclassic">
        github.com/ivansome1/todoclassic
      </Link>
    </Typography>
  );
};
