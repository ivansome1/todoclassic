import { Avatar, AvatarProps } from "@mui/material";
import { useUser } from "../../model";
import { FC } from "react";

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
