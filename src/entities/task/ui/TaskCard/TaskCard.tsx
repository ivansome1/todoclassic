import { Task } from "@/shared/api";
import { Box, Card, CardActions, CardContent, Typography } from "@mui/material";
import { FC, ReactNode } from "react";
import { usePriorityColor } from "../../model";

interface TaskCardProps {
  data: Task;
  actions?: ReactNode;
  afterRow?: ReactNode;
}

export const TaskCard: FC<TaskCardProps> = (props) => {
  const { data, actions, afterRow } = props;
  const color = usePriorityColor(data.priority);

  return (
    <Card
      sx={{
        position: "relative",
        boxShadow: "none",
      }}
    >
      <Box
        sx={{
          backgroundColor: color,
          position: "absolute",
          height: "80%",
          width: "4px",
          borderRadius: 1,
          top: 0,
          bottom: 0,
          marginY: "auto",
        }}
      ></Box>

      <CardContent
        sx={{
          ml: "4px",
          display: "flex",
          alignItems: "start",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography sx={{ wordBreak: "break-word" }}>{data.title}</Typography>
          <Typography
            sx={{ wordBreak: "break-word" }}
            color="text.secondary"
            variant="body2"
          >
            {data.description}
          </Typography>
        </Box>
        {afterRow}
      </CardContent>

      <CardActions sx={{ justifyContent: "center" }}>{actions}</CardActions>
    </Card>
  );
};
