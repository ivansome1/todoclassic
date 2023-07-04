import { useTheme } from "@mui/material";

export * from "./slice";
export * from "./selectors";

export function usePriorityColor(priority: number): string {
  const theme = useTheme();

  switch (priority) {
    case 0:
      return theme.palette.success.main;
    case 1:
      return theme.palette.warning.main;
    case 2:
      return theme.palette.error.main;
  }

  return theme.palette.primary.main;
}
