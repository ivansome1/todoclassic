import { taskModel } from "@/entities/task";
import { useAppDispatch, useAppSelector } from "@/shared/model";
import { FilterAlt } from "@mui/icons-material";
import { IconButton, Menu, MenuItem, Tooltip } from "@mui/material";
import { useEffect, useState } from "react";
import { DEFAULT_FILTER_ID, filterList } from "./config";
export const TaskFiltersMenuButton = () => {
  const [anchor, setAnchor] = useState<HTMLElement | null>(null);
  const open = Boolean(anchor);

  const dispatch = useAppDispatch();
  const config = useAppSelector((state) => state.task.filter?.config);

  function onFilterClick(filter: taskModel.Filter) {
    dispatch(taskModel.setFilter(filter));
  }

  useEffect(() => {
    if (!config) {
      onFilterClick(filterList[DEFAULT_FILTER_ID]);
    }
  }, []);

  return (
    <>
      <Tooltip title="Filters">
        <IconButton
          size="large"
          onClick={(e) => {
            setAnchor(e.currentTarget);
          }}
        >
          <FilterAlt />
        </IconButton>
      </Tooltip>

      <Menu
        open={open}
        anchorEl={anchor}
        onClose={() => {
          setAnchor(null);
        }}
        PaperProps={{
          sx: {
            border: 1,
            borderColor: "divider",
          },
        }}
      >
        {filterList.map((filter) => {
          return (
            <MenuItem
              selected={filter.config === config}
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
