import { Task } from "@/shared/api";
import { FC, ReactNode } from "react";
import { Card, CardContent, CardActions, Typography, Box } from "@mui/material";
import { usePriorityColor } from "../../model";

interface TaskCardProps {
  data: Task;
  actions?: ReactNode;
}

export const TaskCard: FC<TaskCardProps> = (props) => {
  const { data, actions } = props;
  const color = usePriorityColor(data.priority);

  return (
    <Card sx={{ position: "relative", boxShadow: "none" }}>
      <Box
        sx={{
          backgroundColor: color,
          position: "absolute",
          height: "100%",
          width: "5px",
        }}
      ></Box>
      <CardContent>
        <Typography sx={{ wordBreak: "break-word" }}> {data.title}</Typography>
        <Typography
          sx={{ wordBreak: "break-word" }}
          color="text.secondary"
          variant="body2"
        >
          {data.description}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>{actions}</CardActions>
    </Card>
  );
};
