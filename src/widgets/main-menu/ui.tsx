import { taskModel } from "@/entities/task";
import { useAppDispatch, useAppSelector } from "@/shared/model";
import { Menu } from "@mui/icons-material";
import { IconButton, Menu as MaterialMenu, MenuItem } from "@mui/material";
import { MouseEvent, useEffect, useState } from "react";

export const MainMenuButton = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const dispatch = useAppDispatch();
  const sortByCompleted = useAppSelector((state) => state.task.sortByCompleted);
  const sortByPriority = useAppSelector((state) => state.task.sortByPriority);

  useEffect(() => {
    dispatch(
      taskModel.setSortByCompleted(!!localStorage.getItem("sortCompleted"))
    );
  }, []);

  useEffect(() => {
    dispatch(taskModel.setSortByPriority(!!localStorage.getItem("sortPrior")));
  }, []);

  return (
    <>
      <IconButton
        onClick={(event: MouseEvent<HTMLButtonElement>) => {
          setAnchorEl(event.currentTarget);
        }}
      >
        <Menu />
      </IconButton>

      <MaterialMenu
        elevation={20}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={!!anchorEl}
        anchorEl={anchorEl}
        onClose={() => {
          setAnchorEl(null);
        }}
      >
        <MenuItem
          onClick={() => {
            dispatch(taskModel.setSortByPriority(!sortByPriority));
            localStorage.setItem("sortPrior", sortByPriority ? "" : "e");
            setAnchorEl(null);
          }}
        >
          {sortByPriority ? "Disable" : "Enable"} sort by priority
        </MenuItem>
        <MenuItem
          onClick={() => {
            dispatch(taskModel.setSortByCompleted(!sortByCompleted));
            localStorage.setItem("sortCompleted", sortByCompleted ? "" : "e");
            setAnchorEl(null);
          }}
        >
          {sortByCompleted ? "Disable" : "Enable"} sort by completed
        </MenuItem>
      </MaterialMenu>
    </>
  );
};
