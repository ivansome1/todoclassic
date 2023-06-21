import { AppBar, Toolbar, useScrollTrigger } from "@mui/material";
import { ReactNode, FC } from "react";

interface TaskListHeaderProps {
  after?: ReactNode;
  before?: ReactNode;
}

export const TaskListHeader: FC<TaskListHeaderProps> = ({ after, before }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 20,
  });

  return (
    <AppBar
      position="sticky"
      elevation={trigger ? 4 : 0}
      sx={{
        borderBottom: trigger ? 1 : 0,
        borderBottomColor: "divider",
      }}
    >
      <Toolbar sx={{ alignItems: "center", justifyContent: "space-between" }}>
        <div>{before}</div>
        <div>{after}</div>
      </Toolbar>
    </AppBar>
  );
};
