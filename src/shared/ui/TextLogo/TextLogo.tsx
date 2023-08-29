import { Box, BoxProps } from "@mui/material";
import { FC } from "react";
import logoColor from "./logo-color.svg";
import logoFlat from "./logo-flat.svg";

interface TextLogoProps extends BoxProps {
  variant?: "color" | "flat";
}

export const TextLogo: FC<TextLogoProps> = ({
  variant = "color",
  ...other
}) => {
  return (
    <Box
      component="img"
      {...other}
      src={variant === "color" ? logoColor : logoFlat}
    />
  );
};
