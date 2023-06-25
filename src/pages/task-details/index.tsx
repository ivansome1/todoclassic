import { TaskCard } from "@/entities/task/ui/task-card";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { ToggleTask } from "@/features/toggle-task";
import { useTask } from "@/entities/task/model";
import { TaskDetailsHeader } from "@/widgets/task-details-header";
import { useAppSelector } from "@/app/store";

export const TaskDetails = () => {
  const taskId = useParams().taskId;

  if (taskId) {
    const task = useTask(taskId);
    const tasks = useAppSelector((state) => state.task.data);
    const taskIndex = tasks.findIndex((el) => el.id === task?.id);

    return (
      <>
        <TaskDetailsHeader title={`Task#${taskIndex}`} />
        <Box sx={{ p: 2, maxWidth: "700px", width: "100%", mx: "auto" }}>
          {task ? (
            <TaskCard
              data={task}
              actions={
                <ToggleTask color={task.color} showStatus id={task.id} />
              }
            />
          ) : (
            <div>Not found</div>
          )}
        </Box>
      </>
    );
  }

  return <TaskDetailsHeader title="Not found" />;
};
