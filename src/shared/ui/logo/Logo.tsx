import { Box, BoxProps, Typography } from "@mui/material";
import logo from "./logo.svg";
import { FC } from "react";

export const Logo: FC<BoxProps> = (props) => {
  return (
    <Box sx={{ display: "flex", gap: 1 }}>
      <Box component="img" {...props} src={logo} />
      <Typography sx={{ letterSpacing: 1 }} color="text.primary" variant="h6">
        Classic
      </Typography>
    </Box>
  );
};
