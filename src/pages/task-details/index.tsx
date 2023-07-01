import { useParams } from "react-router-dom";
import { ToggleTask } from "@/features/tasks/toggle-task";
import { taskModel, TaskCard } from "@/entities/task";
import { TaskDetailsHeader } from "@/widgets/task-details-header";
import { useAppSelector } from "@/shared/model";
import { Box } from "@mui/material";

export const TaskDetails = () => {
  const taskId = useParams().taskId;

  if (taskId) {
    const task = taskModel.useTask(taskId);
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
