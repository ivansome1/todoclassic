import { FC } from "react";
import { Checkbox, FormControlLabel } from "@mui/material";
import { useAppDispatch } from "@/shared/model";
import { taskModel } from "@/entities/task";
import { Task } from "@/shared/api";

interface ToggleTaskProps {
  data: Task;
  showStatus?: boolean;
}

export const ToggleTask: FC<ToggleTaskProps> = (props) => {
  const { data, showStatus } = props;
  const dispatch = useAppDispatch();

  const priorityColor = taskModel.usePriorityColor(data.priority);

  const checkbox = (
    <Checkbox
      checked={data.completed}
      onChange={() => {
        dispatch(taskModel.setSaveAviable(true));
        dispatch(taskModel.toggleTask(data.id));
      }}
      sx={{
        svg: {
          fill: priorityColor,
        },
      }}
    />
  );

  return showStatus ? (
    <FormControlLabel
      control={checkbox}
      label={data.completed ? "Completed" : "Uncompleted"}
    />
  ) : (
    checkbox
  );
};
