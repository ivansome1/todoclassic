import { Box, BoxProps } from "@mui/material";
import { FC } from "react";
import logoColor from "./logo-color.svg";
import logoFlat from "./logo-flat.svg";

interface TextLogoProps extends BoxProps {
  variant?: "color" | "flat";
}

export const TextLogo: FC<TextLogoProps> = ({
  variant = "color",
  sx,
  ...other
}) => {
  return (
    <Box
      component="img"
      sx={{ display: "block", ...sx }}
      {...other}
      src={variant === "color" ? logoColor : logoFlat}
    />
  );
};
