import { Task } from "@/shared/api";
import { Box, Divider, Typography } from "@mui/material";
import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

interface TaskRowProps {
  data: Task;
  before?: ReactNode;
  after?: ReactNode;
}

export const TaskRow: FC<TaskRowProps> = (props) => {
  const { data, before, after } = props;

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box sx={{ pr: 1 }}> {before}</Box>

        <Box
          sx={{
            py: 0.5,
            flexGrow: 1,
            textDecoration: "none",
            minWidth: "3px",
          }}
          component={Link}
          to={"/tasks/" + data.id}
        >
          <Typography noWrap color="text.primary">
            {data.title}
          </Typography>
          <Typography noWrap color="text.secondary" variant="body2">
            {data.description}
          </Typography>
        </Box>

        <Box
          sx={{
            ml: 3,
          }}
        >
          {after}
        </Box>
      </Box>
      <Divider sx={{ my: 0.5 }} />
    </Box>
  );
};
