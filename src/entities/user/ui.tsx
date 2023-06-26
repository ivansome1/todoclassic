import { Avatar, Box, BoxProps, Typography } from "@mui/material";
import { useUser } from "./model";
import { ReactNode, FC } from "react";
import { AvatarProps } from "@mui/material";

interface UserDataProps extends BoxProps {
  after?: ReactNode;
}

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

export const UserData: FC<UserDataProps> = (props) => {
  const { after, sx, ...other } = props;
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
        <UserAvatar />
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
