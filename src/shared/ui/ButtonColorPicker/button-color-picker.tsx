import { ExpandMore } from "@mui/icons-material";
import { Button, ThemeProvider, createTheme } from "@mui/material";
import { FC, ChangeEvent, useId } from "react";

interface ButtonColorPickerProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const ButtonColorPicker: FC<ButtonColorPickerProps> = (props) => {
  const { value, onChange } = props;

  const id = useId();

  const theme = createTheme({
    palette: {
      primary: {
        main: value,
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Button
          component="label"
          htmlFor={id}
          variant="contained"
          endIcon={<ExpandMore />}
          sx={{ boxShadow: "none", "&:hover": { boxShadow: "none" } }}
        >
          Color: {value}
          <input
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              opacity: 0,
              cursor: "inherit",
            }}
            type="color"
            id={id}
            value={value}
            onChange={onChange}
          ></input>
        </Button>
      </ThemeProvider>
    </>
  );
};
