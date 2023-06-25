import { IconButton, Menu, MenuItem } from "@mui/material";
import { useState, useEffect } from "react";
import { DEFAULT_FILTER_ID, Filter, filterList } from "./config";
import { useAppDispatch, useAppSelector } from "@/app/store";
import { taskModel } from "@/entities/task";
import { Sort } from "@mui/icons-material";

export const TaskFiltersMenu = () => {
  const [anchor, setAnchor] = useState<HTMLElement | null>(null);
  const open = Boolean(anchor);

  const dispatch = useAppDispatch();
  const queryConfig = useAppSelector((state) => state.task.queryConfig);

  function onFilterClick(filter: Filter) {
    dispatch(taskModel.setQueryConfig(filter.config));
  }

  useEffect(() => {
    onFilterClick(filterList[DEFAULT_FILTER_ID]);
  }, []);

  return (
    <>
      <IconButton
        onClick={(e) => {
          setAnchor(e.currentTarget);
        }}
      >
        <Sort />
      </IconButton>
      <Menu
        open={open}
        anchorEl={anchor}
        onClose={() => {
          setAnchor(null);
        }}
      >
        {filterList.map((filter) => {
          return (
            <MenuItem
              selected={filter.config === queryConfig}
              onClick={() => {
                onFilterClick(filter);
              }}
              key={filter.id}
            >
              {filter.title}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};
