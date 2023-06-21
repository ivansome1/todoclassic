import { TaskCard } from "@/entities/task/ui/task-card";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { ToggleTask } from "@/features/toggle-task";
import { useTask } from "@/entities/task/model";
import { TaskDetailsHeader } from "@/widgets/task-details-header";

export const TaskDetails = () => {
  const taskId = Number(useParams().taskId);
  const task = useTask(taskId);

  return (
    <>
      <TaskDetailsHeader title={`Task#${taskId}`} />
      <Box sx={{ p: 2, maxWidth: "700px", width: "100%", mx: "auto" }}>
        {typeof taskId === "number" && task ? (
          <TaskCard
            data={task}
            index={taskId}
            actions={<ToggleTask color={task.color} showStatus id={task.id} />}
          />
        ) : (
          <div>Not found</div>
        )}
      </Box>
    </>
  );
};
