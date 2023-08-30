import { Box, CircularProgress, Paper } from "@mui/material";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { FC, PropsWithChildren, useEffect } from "react";
import { userModel } from "@/entities/user";
import { taskModel } from "@/entities/task";
import { app } from "@/shared/api";
import { useAppDispatch, useAppSelector, useThemeColor } from "@/shared/model";
import { Logo } from "@/shared/ui";

const auth = getAuth(app);

export const AuthProvider: FC<PropsWithChildren> = (props) => {
  const { children } = props;

  const loading = useAppSelector((state) => state.user.loading);

  const dispatch = useAppDispatch();
  const setThemeColor = useThemeColor()[1];

  useEffect(() => {
    dispatch(userModel.setLoading(true));
    setThemeColor("#252525");

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(userModel.setUser(userModel.normalizeUser(user)));
        dispatch(taskModel.clearTasks());
      } else {
        dispatch(userModel.setUser(undefined));
      }
      setTimeout(() => {
        dispatch(userModel.setLoading(false));
        setThemeColor("#191919");
      }, 2000);
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <>
        <Paper sx={{ borderRadius: 0, height: "100dvh", display: "flex" }}>
          <Box
            sx={{ display: "flex", m: "auto", flexDirection: "column", gap: 3 }}
          >
            <Logo
              sx={{ width: "60px", height: "60px", mx: "auto" }}
              variant="flat"
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
