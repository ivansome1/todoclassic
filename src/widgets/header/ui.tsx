import { TextLogo } from "@/shared/ui";
import { AppBar, Box, Toolbar } from "@mui/material";
import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

interface HeaderProps {
  after?: ReactNode;
  before?: ReactNode;
}

export const Header: FC<HeaderProps> = ({ after, before }) => {
  return (
    <AppBar position="relative" elevation={0}>
      <Toolbar sx={{ alignItems: "center" }}>
        <div>{before}</div>

        <Box sx={{ textDecoration: "none" }} component={Link} to={"/"}>
          <TextLogo sx={{ height: "32px" }} />
        </Box>
        <Box sx={{ ml: "auto" }}>{after}</Box>
      </Toolbar>
    </AppBar>
  );
};
