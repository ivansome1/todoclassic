import { useAppDispatch, useAppSelector } from "@/app/store";
import { TaskRow, getTasksThunk, taskModel } from "@/entities/task";
import { RefreshTasksButton } from "@/features/refresh-tasks";
import { SaveTasksButton } from "@/features/save-tasks";
import { TaskFiltersMenuButton } from "@/features/task-filters";
import { ToggleTask } from "@/features/toggle-task";
import { AddTaskDialogButton } from "@/widgets/add-task-dialog";
import { TaskListDrawer } from "@/widgets/task-list-drawer";
import { TaskListHeader } from "@/widgets/task-list-header";
import { TaskMenuButton } from "@/widgets/task-menu";
import { UserMenuButton } from "@/widgets/user-menu";
import { SentimentNeutral } from "@mui/icons-material";
import { Box, Skeleton, Typography } from "@mui/material";
import { useEffect } from "react";

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

export const TaskListPage = () => {
  const tasks = useAppSelector((state) => state.task.data);
  const loading = useAppSelector((state) => state.task.loading);
  const saveAviable = useAppSelector((state) => state.task.saveAviable);

  const filteredTasks = taskModel.useFilteredTasks();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!tasks[0]) {
      dispatch(getTasksThunk());
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
          height: "100%",
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
    <>
      <TaskListHeader before={<TaskListDrawer />} after={<UserMenuButton />} />

      <Box
        sx={{
          p: 2,
          maxWidth: "700px",
          width: "100%",
          mx: "auto",
          display: "flex",
          flexDirection: "column",
          height: "100%",
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
    </>
  );
};
