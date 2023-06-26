import { Avatar, Box, BoxProps, Typography } from "@mui/material";
import { useViewer } from "./model";
import { ReactNode, FC } from "react";
import { AvatarProps } from "@mui/material";

interface ViewerDataProps extends BoxProps {
  after?: ReactNode;
}

export const ViewerData: FC<ViewerDataProps> = (props) => {
  const { after, sx, ...other } = props;
  const viewer = useViewer();

  if (viewer) {
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
        <Avatar
          sx={{ width: 50, height: 50 }}
          src={viewer.photoURL ? viewer.photoURL : undefined}
        />
        <Typography sx={{ mt: 2 }}>{viewer.displayName}</Typography>
        <Typography variant="body2" color="text.secondary">
          {viewer.email}
        </Typography>
      </Box>
    );
  } else {
    return null;
  }
};

export const ViewerAvatar: FC<AvatarProps> = (props) => {
  const { ...other } = props;

  const viewer = useViewer();

  return (
    <Avatar
      src={viewer && viewer.photoURL ? viewer.photoURL : undefined}
      {...other}
    />
  );
};
