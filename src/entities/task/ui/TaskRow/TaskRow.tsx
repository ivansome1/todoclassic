import { Task } from "@/shared/api";
import { MoreHoriz } from "@mui/icons-material";
import { Box, IconButton, Paper, Typography } from "@mui/material";
import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";
import styles from "./TaskRow.module.scss";

interface TaskRowProps {
  data: Task;
  before?: ReactNode;
  onMenuOpen: (anchorEl: HTMLElement) => void;
  editForm: ReactNode;
}

export const TaskRow: FC<TaskRowProps> = (props) => {
  const { data, before, onMenuOpen, editForm } = props;

  if (editForm) {
    return <Paper className={styles.editFormPaper}>{editForm}</Paper>;
  }

  return (
    <Paper elevation={1} className={styles.containerPaper}>
      <Box className={styles.beforeBox}>{before}</Box>

      <Box className={styles.linkBox} component={Link} to={"/tasks/" + data.id}>
        <Typography noWrap color="text.primary">
          {data.title}
        </Typography>
        <Typography noWrap color="text.secondary" variant="body2">
          {data.description}
        </Typography>
      </Box>

      <Box className={styles.afterBox}>
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
