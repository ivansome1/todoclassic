import { Icon } from "@/shared/ui";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { FC } from "react";

interface TaskDetailsHeaderProps {
  title: string;
}

export const TaskDetailsHeader: FC<TaskDetailsHeaderProps> = (props) => {
  const { title } = props;

  return (
    <AppBar elevation={0} position="sticky">
      <Toolbar sx={{ alignItems: "center", gap: 1 }}>
        <IconButton component={Link} to="/tasks">
          <Icon>arrow_back</Icon>
        </IconButton>
        <Typography variant="h6"> {title}</Typography>
      </Toolbar>
    </AppBar>
  );
};
