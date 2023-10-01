import { Box, BoxProps, Typography } from "@mui/material";
import { FC } from "react";
import { useUser } from "../../model";
import { UserAvatar } from "..";

export const UserDataColumn: FC<BoxProps> = (props) => {
  const { sx, ...other } = props;
  const user = useUser();

  if (user) {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          ...sx,
        }}
        {...other}
      >
        <UserAvatar sx={{ width: "52px", height: "52px" }} />
        <Typography sx={{ mt: 2 }}>{user.displayName}</Typography>
        <Typography variant="body2" color="text.secondary">
          {user.email}
        </Typography>
      </Box>
    );
  } else {
    return null;
  }
};
