import { Box, BoxProps } from "@mui/material";
import logoColor from "./logo-color.svg";
import logoFlat from "./logo-flat.svg";
import { FC } from "react";

interface LogoProps extends BoxProps {
  variant?: "color" | "flat";
}

export const Logo: FC<LogoProps> = ({ variant = "color", ...other }) => {
  return (
    <Box
      component="img"
      {...other}
      src={variant === "color" ? logoColor : logoFlat}
    />
  );
};
