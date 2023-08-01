import { useAppDispatch, useAppSelector } from "@/shared/model";
import { TaskRow, getTasks, taskModel } from "@/entities/task";
import { RefreshTasksButton } from "@/features/tasks/refresh-tasks";
import { SaveTasksButton, SaveTasksFab } from "@/features/tasks/save-tasks";
import { TaskFiltersMenuButton } from "@/features/tasks/task-filters";
import { ToggleTask } from "@/features/tasks/toggle-task";
import { TaskMenuButton } from "@/widgets/task-menu";
import { AssignmentTurnedIn } from "@mui/icons-material";
import { Box, Skeleton, Typography } from "@mui/material";
import { useEffect } from "react";
import { AddTaskDialogButton, AddTaskFab } from "@/features/tasks/add-task";

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
  const filterTitle = useAppSelector((state) => state.task.filter?.title);

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
              before={<ToggleTask data={task} />}
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
            <AssignmentTurnedIn sx={{ color: "text.disabled" }} />
          </Box>
          <Typography color="text.disabled">
            You have no tasks to do!
          </Typography>
        </Box>
      </Box>
    );

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
        <Box
          sx={{
            p: 1,
            maxWidth: "700px",
            width: "100%",
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography sx={{ fontWeight: "500" }}>
              {filterTitle ? filterTitle : ""}{" "}
              {"(" + filteredTasks.length + ")"}
            </Typography>
            {actions}
          </Box>
          {loading ? tasksSkeleton : tasksRoot}
        </Box>
      </Box>

      <Box
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
          display: "flex",
          gap: 2,
          alignItems: "center",
        }}
      >
        <SaveTasksFab animationIn={saveAviable} />

        <AddTaskFab />
      </Box>
    </>
  );
};

export default TaskListPage;
