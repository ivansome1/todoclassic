import { Avatar, AvatarProps } from "@mui/material";
import { FC } from "react";
import { useViewer } from "../../model";

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
