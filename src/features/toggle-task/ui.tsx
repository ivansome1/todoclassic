import { FC } from "react";
import { Checkbox, FormControlLabel } from "@mui/material";
import { useAppDispatch } from "@/app/store";
import { taskModel } from "@/entities/task";

interface ToggleTaskProps {
  id: number;
  color?: string;
  showStatus?: boolean;
}

export const ToggleTask: FC<ToggleTaskProps> = (props) => {
  const { id, color, showStatus } = props;
  const dispatch = useAppDispatch();

  const task = taskModel.useTask(id);

  if (task) {
    const checkbox = (
      <Checkbox
        checked={task.completed}
        onChange={() => {
          dispatch(taskModel.toggleTask(id));
        }}
        sx={{
          "&.Mui-checked": {
            color: color,
          },
        }}
      />
    );

    return showStatus ? (
      <FormControlLabel
        control={checkbox}
        label={task.completed ? "Completed" : "Uncompleted"}
      />
    ) : (
      checkbox
    );
  } else {
    return null;
  }
};
