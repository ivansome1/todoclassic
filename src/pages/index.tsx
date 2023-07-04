import { Navigate, Route, Routes } from "react-router-dom";
import { FC, ReactNode, ElementType, Suspense, lazy } from "react";
import { userModel } from "@/entities/user";
import { MainLayout } from "./layouts";
import { Box, CircularProgress } from "@mui/material";

const Loadable = (Component: ElementType) => {
  return () => (
    <Suspense
      fallback={
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexGrow: 1,
          }}
        >
          <CircularProgress size={30} color="inherit" sx={{ m: "auto" }} />
        </Box>
      }
    >
      <Component />
    </Suspense>
  );
};

const GuestGuard: FC<{ children: ReactNode }> = (props) => {
  const { children } = props;
  const isAuth = userModel.useAuth();

  if (!isAuth) return <Navigate to="/signin" />;

  return <> {children} </>;
};

const AuthGuard: FC<{ children: ReactNode }> = (props) => {
  const { children } = props;
  const isAuth = userModel.useAuth();

  if (isAuth) return <Navigate to="/" />;

  return <> {children} </>;
};

const SignInPage = Loadable(lazy(() => import("./sign-in")));
const SignUpPage = Loadable(lazy(() => import("./sign-up")));
const TaskListPage = Loadable(lazy(() => import("./task-list")));
const TaskDetailsPage = Loadable(lazy(() => import("./task-details")));

export const Routing = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Navigate to="/tasks" />} />

        <Route
          path="/signup"
          element={
            <AuthGuard>
              <SignUpPage />
            </AuthGuard>
          }
        />
        <Route
          path="/signin"
          element={
            <AuthGuard>
              <SignInPage />
            </AuthGuard>
          }
        />

        <Route
          path="/tasks"
          element={
            <GuestGuard>
              <TaskListPage />
            </GuestGuard>
          }
        />
        <Route
          path="/tasks/:taskId"
          element={
            <GuestGuard>
              <TaskDetailsPage />
            </GuestGuard>
          }
        />
      </Route>
    </Routes>
  );
};
