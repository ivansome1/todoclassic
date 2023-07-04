import { useNavigate, useParams } from "react-router-dom";
import { ToggleTask } from "@/features/tasks/toggle-task";
import { taskModel, TaskCard } from "@/entities/task";
import { useAppSelector } from "@/shared/model";
import { Box, Typography, IconButton } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";

const TaskDetails = () => {
  const taskId = useParams().taskId;

  if (taskId) {
    const task = taskModel.useTask(taskId);
    const tasks = useAppSelector((state) => state.task.data);
    const taskIndex = tasks.findIndex((el) => el.id === task?.id);

    const navigate = useNavigate();

    return (
      <Box sx={{ p: 2, maxWidth: "700px", width: "100%", mx: "auto" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
          <IconButton
            onClick={() => {
              navigate(-1);
            }}
            size="small"
          >
            <ArrowBack />
          </IconButton>
          <Typography variant="h6">Task#{taskIndex}</Typography>
        </Box>
        {task ? (
          <>
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

export default TaskDetails;
