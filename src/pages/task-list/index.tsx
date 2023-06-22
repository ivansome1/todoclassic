import { useAppDispatch, useAppSelector } from "@/app/store";
import { TaskRow, getTasksThunk } from "@/entities/task";
import { taskModel } from "@/entities/task";
import { RefreshTasksButton } from "@/features/refresh-tasks";
import { SaveTasksButton } from "@/features/save-tasks";
import { TaskFiltersMenu } from "@/features/task-filters";
import { ToggleTask } from "@/features/toggle-task";
import { Icon } from "@/shared/ui";
import { AddTaskDialog } from "@/widgets/add-task-dialog";
import { TaskListHeader } from "@/widgets/task-list-header";
import { TaskMenu } from "@/widgets/task-menu";
import { ViewerMenu } from "@/widgets/viewer-menu";
import {
  Box,
  Fab,
  Fade,
  IconButton,
  Skeleton,
  Tooltip,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import { useEffect, useId } from "react";

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
      <AddTaskDialog />
      <TaskFiltersMenu />
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
              after={<TaskMenu id={task.id} />}
            />
          );
        })}
      </Box>
    ) : (
      <Box>No tasks here</Box>
    );

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 20,
  });

  const backToTopAnchorId = useId();

  const backToTop = (
    <Fade in={trigger}>
      <Fab
        onClick={() => {
          document
            .getElementById(backToTopAnchorId)
            ?.scrollIntoView({ block: "center" });
        }}
        size="small"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        <Icon>expand_less</Icon>
      </Fab>
    </Fade>
  );

  return (
    <>
      <div id={backToTopAnchorId}></div>
      <TaskListHeader
        before={
          <Tooltip title="Coming soon">
            <span>
              <IconButton disabled>
                <Icon>menu</Icon>
              </IconButton>
            </span>
          </Tooltip>
        }
        after={<ViewerMenu />}
      />

      <Box
        sx={{
          p: 2,
          maxWidth: "700px",
          width: "100%",
          mx: "auto",
          display: "flex",
          flexDirection: "column",
          mb: 7,
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

      {backToTop}
    </>
  );
};
