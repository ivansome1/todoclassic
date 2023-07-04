import { useAppDispatch, useAppSelector } from "@/shared/model";
import { TaskRow, getTasks, taskModel } from "@/entities/task";
import { RefreshTasksButton } from "@/features/tasks/refresh-tasks";
import { SaveTasksButton } from "@/features/tasks/save-tasks";
import { TaskFiltersMenuButton } from "@/features/tasks/task-filters";
import { ToggleTask } from "@/features/tasks/toggle-task";
import { TaskMenuButton } from "@/widgets/task-menu";
import { SentimentNeutral } from "@mui/icons-material";
import { Box, Skeleton, Typography } from "@mui/material";
import { useEffect } from "react";
import { AddTaskDialogButton } from "@/features/tasks/add-task";

const tasksSkeleton = (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      gap: 1,
      mt: 1,
    }}
  >
    <Skeleton variant="rounded" sx={{ height: 60 }} />
    <Skeleton variant="rounded" sx={{ height: 60 }} />
    <Skeleton variant="rounded" sx={{ height: 60 }} />
  </Box>
);

const TaskListPage = () => {
  const tasks = useAppSelector((state) => state.task.data);
  const loading = useAppSelector((state) => state.task.loading);
  const saveAviable = useAppSelector((state) => state.task.saveAviable);

  const filteredTasks = taskModel.useFilteredTasks();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!tasks[0]) {
      dispatch(getTasks());
    }
  }, []);

  const actions = (
    <Box sx={{ ml: "auto" }}>
      {saveAviable && <SaveTasksButton />}
      <AddTaskDialogButton />
      <TaskFiltersMenuButton />
      <RefreshTasksButton />
    </Box>
  );

  const tasksRoot =
    tasks.length != 0 ? (
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mt: 1 }}>
        {filteredTasks.map((task) => {
          return (
            <TaskRow
              key={task.id}
              data={task}
              before={<ToggleTask color={task.color} id={task.id} />}
              after={<TaskMenuButton id={task.id} />}
            />
          );
        })}
      </Box>
    ) : (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          m: "auto",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box sx={{ mx: "auto" }}>
            <SentimentNeutral sx={{ color: "text.disabled" }} />
          </Box>
          <Typography color="text.disabled">No tasks here</Typography>
        </Box>
      </Box>
    );

  return (
    <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
      <Box
        sx={{
          p: 2,
          maxWidth: "700px",
          width: "100%",
          mx: "auto",
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h6">
            Tasks {"(" + filteredTasks.length + ")"}
          </Typography>
          {actions}
        </Box>
        {loading ? tasksSkeleton : tasksRoot}
      </Box>
    </Box>
  );
};

export default TaskListPage;
