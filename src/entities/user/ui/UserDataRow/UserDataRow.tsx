import { Box, BoxProps, Typography } from "@mui/material";
import { FC } from "react";
import { useUser } from "../../model";
import { UserAvatar } from "..";

export const UserDataRow: FC<BoxProps> = (props) => {
  const { sx, ...other } = props;
  const user = useUser();

  if (user) {
    return (
      <Box
        sx={{
          display: "flex",
          gap: 2,
          ...sx,
        }}
        {...other}
      >
        <UserAvatar sx={{ my: "auto" }} />
        <Box sx={{ my: "auto" }}>
          <Typography>{user.displayName}</Typography>
        </Box>
      </Box>
    );
  } else {
    return null;
  }
};
