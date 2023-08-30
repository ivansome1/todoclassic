import { useThemeColor } from "@/shared/model";
import { TextLogo } from "@/shared/ui";
import { AppBar, Box, Toolbar, useScrollTrigger } from "@mui/material";
import { FC, ReactNode, useEffect } from "react";
import { Link } from "react-router-dom";

interface HeaderProps {
  after?: ReactNode;
  before?: ReactNode;
}

export const Header: FC<HeaderProps> = ({ after, before }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 20,
  });

  const setThemeColor = useThemeColor()[1];

  useEffect(() => {
    setThemeColor(trigger ? "#2E2E2E" : "#191919");
  }, [trigger]);

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

        <Box sx={{ textDecoration: "none" }} component={Link} to={"/"}>
          <TextLogo sx={{ height: "32px" }} />
        </Box>
        <Box sx={{ ml: "auto" }}>{after}</Box>
      </Toolbar>
    </AppBar>
  );
};
