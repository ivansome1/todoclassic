import { TaskRow, getTasks, taskModel } from "@/entities/task";
import { RefreshTasksButton } from "@/features/tasks/refresh-tasks";
import { useSaveTasks } from "@/features/tasks/save-tasks";
import { TaskFiltersMenuButton } from "@/features/tasks/task-filters";
import { ToggleTask } from "@/features/tasks/toggle-task";
import { Task } from "@/shared/api";
import { useAppDispatch, useAppSelector } from "@/shared/model";
import { DockContext } from "@/widgets/dock";
import { TaskMenu } from "@/widgets/task-menu";
import { Add, AssignmentTurnedIn, Save } from "@mui/icons-material";
import {
  Badge,
  Box,
  IconButton,
  Skeleton,
  Tooltip,
  Typography,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";

const tasksSkeleton = (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      gap: 1,
      mt: 1,
    }}
  >
    <Skeleton variant="rounded">
      <Typography variant="caption">Priority 1</Typography>
    </Skeleton>
    <Skeleton variant="rounded" sx={{ height: 60 }} />
    <Skeleton variant="rounded">
      <Typography variant="caption">Priority 2 a</Typography>
    </Skeleton>
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
  const { setOpen } = useContext(DockContext);
  const [taskMenuAnchorEl, setTaskMenuAnchorEl] = useState<HTMLElement | null>(
    null
  );
  const [taskMenuTaskId, setTaskMenuTaskId] = useState("");
  const { saveTasks } = useSaveTasks();

  useEffect(() => {
    if (!tasks[0]) {
      dispatch(getTasks());
    }
  }, []);

  const actions = (
    <Box sx={{ ml: "auto", display: "flex", gap: 1 }}>
      {saveAviable && (
        <Tooltip title="Save">
          <IconButton
            size="large"
            onClick={() => {
              saveTasks();
            }}
          >
            <Badge variant="dot" color="primary">
              <Save />
            </Badge>
          </IconButton>
        </Tooltip>
      )}
      <Tooltip title="Add task">
        <IconButton
          size="large"
          onClick={() => {
            setOpen(true);
          }}
        >
          <Add />
        </IconButton>
      </Tooltip>
      <TaskFiltersMenuButton />
      <RefreshTasksButton />
    </Box>
  );

  interface RenderTaskOptions {
    task: Task;
    index: number;
  }

  function renderTask({ task }: RenderTaskOptions) {
    return (
      <Box key={task.id} sx={{ mb: 0.5 }}>
        <TaskRow
          data={task}
          before={<ToggleTask data={task} />}
          onMenuOpen={(anchorEl) => {
            setTaskMenuTaskId(task.id);
            setTaskMenuAnchorEl(anchorEl);
          }}
        />
      </Box>
    );
  }

  const tasksRoot =
    tasks.length != 0 ? (
      <Box sx={{ display: "flex", flexDirection: "column" }}>
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
      <Box sx={{ display: "flex", flexDirection: "column" }}>
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
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <Typography variant="h6">
              Tasks {filterTitle ? "- " + filterTitle : ""}{" "}
              {"(" + filteredTasks.length + ")"}
            </Typography>
            {actions}
          </Box>
          {loading ? tasksSkeleton : tasksRoot}
        </Box>
      </Box>

      <TaskMenu
        id={taskMenuTaskId}
        anchorEl={taskMenuAnchorEl}
        onClose={() => {
          setTaskMenuAnchorEl(null);
        }}
      />
    </>
  );
};

export default TaskListPage;
