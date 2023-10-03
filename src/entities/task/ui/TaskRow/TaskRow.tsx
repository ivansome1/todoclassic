import { Task } from "@/shared/api";
import { MoreHoriz } from "@mui/icons-material";
import { Box, IconButton, Paper, Typography } from "@mui/material";
import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

interface TaskRowProps {
  data: Task;
  before?: ReactNode;
  onMenuOpen: (anchorEl: HTMLElement) => void;
  editForm: ReactNode;
}

export const TaskRow: FC<TaskRowProps> = (props) => {
  const { data, before, onMenuOpen, editForm } = props;

  if (editForm) {
    return <Paper sx={{ p: 1 }}>{editForm}</Paper>;
  }

  return (
    <Paper
      elevation={1}
      sx={{
        boxShadow: "none",
        display: "flex",
        px: 1,
        py: 0.5,
      }}
    >
      <Box sx={{ pr: 2, my: "auto" }}> {before}</Box>

      <Box
        sx={{
          flexGrow: 1,
          textDecoration: "none",
          minWidth: "3px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
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
          my: "auto",
        }}
      >
        <IconButton
          onClick={(event) => {
            onMenuOpen(event.currentTarget);
          }}
        >
          <MoreHoriz />
        </IconButton>
      </Box>
    </Paper>
  );
};
