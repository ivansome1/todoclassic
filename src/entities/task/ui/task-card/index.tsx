import { Task } from "@/shared/api";
import { FC, ReactNode } from "react";
import { Card, CardContent, CardActions, Typography, Box } from "@mui/material";

interface TaskCardProps {
  data: Task;
  actions?: ReactNode;
}

export const TaskCard: FC<TaskCardProps> = (props) => {
  const { data, actions } = props;

  return (
    <Card sx={{ position: "relative" }}>
      <Box
        sx={{
          backgroundColor: data.color ? data.color : "primary.main",
          position: "absolute",
          height: "100%",
          width: "5px",
        }}
      ></Box>
      <CardContent>
        <Typography> {data.title}</Typography>
        <Typography color="text.secondary" variant="body2">
          {data.description}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>{actions}</CardActions>
    </Card>
  );
};
