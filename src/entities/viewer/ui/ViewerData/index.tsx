import { Avatar, Box, BoxProps, Typography } from "@mui/material";
import { useViewer } from "../../model";
import { ReactNode, FC } from "react";

interface ViewerDataProps extends BoxProps {
  after?: ReactNode;
  fullWidth?: boolean;
}

export const ViewerData: FC<ViewerDataProps> = (props) => {
  const { after, fullWidth, sx, ...other } = props;
  const viewer = useViewer();

  if (viewer) {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          width: fullWidth ? "100%" : undefined,
          ...sx,
        }}
        {...other}
      >
        <Avatar src={viewer.photoURL ? viewer.photoURL : undefined} />
        <Box sx={{ flexGrow: fullWidth ? 1 : 0 }}>
          <Typography>{viewer.displayName}</Typography>
          <Typography variant="body2" color="text.secondary">
            {viewer.email}
          </Typography>
        </Box>
        {after}
      </Box>
    );
  } else {
    return null;
  }
};
