import { Avatar, Box, BoxProps, Typography } from "@mui/material";
import { useUser } from "./model";
import { FC } from "react";
import { AvatarProps } from "@mui/material";

export const UserAvatar: FC<AvatarProps> = (props) => {
  const { ...other } = props;

  const viewer = useUser();

  return (
    <Avatar
      src={viewer && viewer.photoURL ? viewer.photoURL : undefined}
      {...other}
    />
  );
};

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
          <Typography variant="body2" color="text.secondary">
            {user.email}
          </Typography>
        </Box>
      </Box>
    );
  } else {
    return null;
  }
};
