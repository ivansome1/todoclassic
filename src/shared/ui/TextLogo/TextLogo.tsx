import { Box, BoxProps, Typography } from "@mui/material";
import logoColor from "./logo-color.svg";
import logoFlat from "./logo-flat.svg";
import { FC } from "react";

interface TextLogoProps extends BoxProps {
  variant?: "color" | "flat";
}

export const TextLogo: FC<TextLogoProps> = ({
  variant = "color",
  ...other
}) => {
  return (
    <Box sx={{ display: "flex", gap: 1 }}>
      <Box
        component="img"
        {...other}
        src={variant === "color" ? logoColor : logoFlat}
      />
      <Typography sx={{ letterSpacing: 1 }} color="text.primary" variant="h6">
        Classic
      </Typography>
    </Box>
  );
};
