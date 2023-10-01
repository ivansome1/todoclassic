import { usePriorityColor } from "../../model";
import { Flag } from "@mui/icons-material";
import {
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  ThemeProvider,
  createTheme,
  useTheme,
} from "@mui/material";
import { FC } from "react";

interface PrioritySelectProps {
  value: number;
  onChange: (event: SelectChangeEvent<number>) => void;
  showLabel?: boolean;
}

export const PrioritySelect: FC<PrioritySelectProps> = ({
  value,
  onChange,
  showLabel = true,
}) => {
  const color = usePriorityColor(value);

  const globalTheme = useTheme();
  const localTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: color,
      },
    },
  });

  return (
    <ThemeProvider theme={localTheme}>
      <FormControl>
        {showLabel && <InputLabel>Priority</InputLabel>}

        <Select
          sx={{
            borderRadius: globalTheme.shape.borderRadius / 4,
          }}
          startAdornment={
            <InputAdornment position="start">
              <Flag sx={{ color: color }} />
            </InputAdornment>
          }
          size="small"
          value={value}
          onChange={onChange}
          label={showLabel ? "Priority" : ""}
        >
          <MenuItem value={2}>Priority 1</MenuItem>
          <MenuItem value={1}>Priority 2</MenuItem>
          <MenuItem value={0}>Priority 3</MenuItem>
        </Select>
      </FormControl>
    </ThemeProvider>
  );
};
