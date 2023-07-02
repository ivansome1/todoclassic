import { useParams } from "react-router-dom";
import { ToggleTask } from "@/features/tasks/toggle-task";
import { taskModel, TaskCard } from "@/entities/task";
import { useAppSelector } from "@/shared/model";
import { Box, Typography } from "@mui/material";

export const TaskDetails = () => {
  const taskId = useParams().taskId;

  if (taskId) {
    const task = taskModel.useTask(taskId);
    const tasks = useAppSelector((state) => state.task.data);
    const taskIndex = tasks.findIndex((el) => el.id === task?.id);

    return (
      <Box sx={{ p: 2, maxWidth: "700px", width: "100%", mx: "auto" }}>
        {task ? (
          <>
            <Typography sx={{ mb: 1 }} variant="h6">
              Task#{taskIndex}
            </Typography>
            <TaskCard
              data={task}
              actions={
                <ToggleTask color={task.color} showStatus id={task.id} />
              }
            />
          </>
        ) : (
          <div>Not found</div>
        )}
      </Box>
    );
  }

  return <div>Not found</div>;
};
