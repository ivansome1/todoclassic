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

  const color = data.color ? data.color : "primary.main";

  return (
    <Paper
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box sx={{ p: 1 }}> {before}</Box>

      <Box sx={{ py: 1 }}>
        <Typography color={color} component={Link} to={"/tasks/" + data.id}>
          {data.title}
        </Typography>
        <Typography color="text.secondary" variant="body2">
          {data.description}
        </Typography>
      </Box>
      <Box sx={{ ml: "auto", mr: 1 }}>{after}</Box>
    </Paper>
  );
};
