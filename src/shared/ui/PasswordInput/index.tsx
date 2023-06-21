import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  OutlinedInputProps,
} from "@mui/material";
import { useState, useId, FC } from "react";
import { Icon } from "..";

export const PasswordInput: FC<OutlinedInputProps> = (props) => {
  const { ...other } = props;
  const [exposed, setExposed] = useState(false);

  const inputId = useId();

  return (
    <FormControl variant="outlined">
      <InputLabel htmlFor={inputId}>Password</InputLabel>
      <OutlinedInput
        type={exposed ? "text" : "password"}
        label="Password"
        id={inputId}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              onClick={() => {
                setExposed((prev) => !prev);
              }}
            >
              <Icon>{exposed ? "visibility_off" : "visibility"}</Icon>
            </IconButton>
          </InputAdornment>
        }
        {...other}
      />
    </FormControl>
  );
};
