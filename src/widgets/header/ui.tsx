import {
  AppBar,
  Box,
  Toolbar,
  useMediaQuery,
  useScrollTrigger,
  useTheme,
} from "@mui/material";
import { ReactNode, FC } from "react";
import { Logo, TextLogo } from "@/shared/ui";
import { Link } from "react-router-dom";
import { userModel } from "@/entities/user";

interface HeaderProps {
  after?: ReactNode;
  before?: ReactNode;
}

export const Header: FC<HeaderProps> = ({ after, before }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 20,
  });

  const isAuth = userModel.useAuth();

  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));

  const logo = sm ? (
    <Logo sx={{ height: "32px" }} />
  ) : (
    <TextLogo sx={{ height: "32px" }} />
  );

  return (
    <AppBar
      position="sticky"
      elevation={trigger ? 4 : 0}
      sx={{
        borderBottom: trigger ? 1 : 0,
        borderBottomColor: "divider",
      }}
    >
      <Toolbar sx={{ alignItems: "center" }}>
        <div>{before}</div>

        <Box
          sx={{ textDecoration: "none" }}
          component={Link}
          to={isAuth ? "tasks" : "signin"}
        >
          {logo}
        </Box>
        <Box sx={{ ml: "auto" }}>{after}</Box>
      </Toolbar>
    </AppBar>
  );
};
