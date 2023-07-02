import { Box, CircularProgress, Paper } from "@mui/material";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { FC, PropsWithChildren, useEffect } from "react";
import { userModel } from "@/entities/user";
import { taskModel } from "@/entities/task";
import { User, app } from "@/shared/api";
import { useAppDispatch, useAppSelector } from "@/shared/model";
import logo from "./logo.svg";

const auth = getAuth(app);

export const AuthProvider: FC<PropsWithChildren> = (props) => {
  const { children } = props;

  const loading = useAppSelector((state) => state.user.loading);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userModel.setLoading(true));
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const viewer: User = {
          displayName: user.displayName as string,
          email: user.email as string,
          photoURL: user.photoURL,
          uid: user.uid,
        };

        dispatch(userModel.setUser(viewer));
        dispatch(taskModel.clearTasks());
      } else {
        dispatch(userModel.setUser(undefined));
      }
      setTimeout(() => {
        dispatch(userModel.setLoading(false));
      }, 2000);
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <>
        <Paper sx={{ borderRadius: 0, height: "100vh", display: "flex" }}>
          <Box
            sx={{ display: "flex", m: "auto", flexDirection: "column", gap: 3 }}
          >
            <Box
              sx={{ width: "60px", height: "60px", mx: "auto" }}
              component="img"
              src={logo}
            />
            <CircularProgress
              color="inherit"
              size={20}
              sx={{
                mx: "auto",
                width: "10px",
                height: "10px",
                circle: {
                  backgroundColor: "red",
                },
              }}
            />
          </Box>
        </Paper>
      </>
    );
  }

  return <>{children}</>;
};
