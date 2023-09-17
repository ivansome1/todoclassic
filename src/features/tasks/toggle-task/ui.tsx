import { FC } from "react";
import { Checkbox, FormControlLabel } from "@mui/material";
import { useAppDispatch } from "@/shared/model";
import { taskModel } from "@/entities/task";
import { Task } from "@/shared/api";
import { CheckCircle, RadioButtonUnchecked } from "@mui/icons-material";

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
      icon={<RadioButtonUnchecked />}
      checkedIcon={<CheckCircle />}
      checked={data.completed}
      onChange={() => {
        dispatch(taskModel.setSaveAviable(true));
        dispatch(taskModel.toggleTask(data.id));
      }}
      color={
        data.priority === 0
          ? "primary"
          : data.priority === 1
          ? "warning"
          : "error"
      }
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
