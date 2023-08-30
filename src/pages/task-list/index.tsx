import { TaskRow, getTasks, taskModel } from "@/entities/task";
import { AddTaskDialogButton, AddTaskFab } from "@/features/tasks/add-task";
import { RefreshTasksButton } from "@/features/tasks/refresh-tasks";
import { SaveTasksButton, SaveTasksFab } from "@/features/tasks/save-tasks";
import { TaskFiltersMenuButton } from "@/features/tasks/task-filters";
import { ToggleTask } from "@/features/tasks/toggle-task";
import { Task } from "@/shared/api";
import { useAppDispatch, useAppSelector } from "@/shared/model";
import { TaskMenuButton } from "@/widgets/task-menu";
import { AssignmentTurnedIn } from "@mui/icons-material";
import { Box, Divider, Skeleton, Typography } from "@mui/material";
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

  interface RenderTaskOptions {
    task: Task;
    index: number;
  }

  function renderTask({ task, index }: RenderTaskOptions) {
    const showCaption = filteredTasks[index - 1]?.priority != task.priority;

    const taskPriority =
      task.priority === 0
        ? 3
        : task.priority === 1
        ? 2
        : task.priority === 2
        ? 1
        : 0;

    return (
      <Box key={task.id}>
        {showCaption && (
          <>
            <Typography variant="caption" color="textSecondary">
              Priority {taskPriority}
            </Typography>
            <Divider sx={{ mb: 0.5 }} />
          </>
        )}

        <TaskRow
          data={task}
          before={<ToggleTask data={task} />}
          after={<TaskMenuButton id={task.id} />}
        />
      </Box>
    );
  }

  const tasksRoot =
    tasks.length != 0 ? (
      <Box sx={{ display: "flex", flexDirection: "column", mt: 1 }}>
        {filteredTasks.map((task, index) => {
          return renderTask({ task, index });
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
            <Typography variant="h6">
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
