import { FC, ReactNode } from "react";
import { Task } from "@/shared/api";
import { Paper, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

interface TaskRowProps {
  data: Task;
  before?: ReactNode;
  after?: ReactNode;
}

export const TaskRow: FC<TaskRowProps> = (props) => {
  const { data, before, after } = props;

  return (
    <Paper
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box sx={{ p: 1 }}> {before}</Box>

      <Box
        sx={{
          py: 1,
          flexGrow: 1,
          textDecoration: "none",
          minWidth: "3px",
        }}
        component={Link}
        to={"/tasks/" + data.id}
      >
        <Typography noWrap color="text.primary">
          {data.title}
        </Typography>
        <Typography noWrap color="text.secondary" variant="body2">
          {data.description}
        </Typography>
      </Box>
      <Box sx={{ mr: 1, ml: 3 }}>{after}</Box>
    </Paper>
  );
};
