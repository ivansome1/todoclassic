import { TaskCard, taskModel } from "@/entities/task";
import { ToggleTask } from "@/features/tasks/toggle-task";
import { Close } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

const TaskDetails = () => {
  const taskId = useParams().taskId;

  if (taskId) {
    const task = taskModel.useTask(taskId);
    const navigate = useNavigate();

    return (
      <Box sx={{ p: 1, maxWidth: "700px", width: "100%", mx: "auto" }}>
        {task ? (
          <>
            <TaskCard
              data={task}
              actions={<ToggleTask data={task} showStatus />}
              afterRow={
                <IconButton
                  onClick={() => {
                    navigate(-1);
                  }}
                >
                  <Close sx={{ color: "text.secondary" }} />
                </IconButton>
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
