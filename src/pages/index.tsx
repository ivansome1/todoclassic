import { taskModel } from "@/entities/task";
import { userModel } from "@/entities/user";
import { Box, CircularProgress } from "@mui/material";
import {
  ElementType,
  FC,
  PropsWithChildren,
  ReactNode,
  Suspense,
  lazy,
  useEffect,
} from "react";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { MainLayout } from "./layouts";

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

  if (!isAuth) return <Navigate to="/greeting" />;

  return <> {children} </>;
};

const AuthGuard: FC<{ children: ReactNode }> = (props) => {
  const { children } = props;
  const isAuth = userModel.useAuth();

  if (isAuth) return <Navigate to="/" replace />;

  return <> {children} </>;
};

const Page: FC<{ title: string } & PropsWithChildren> = ({
  title,
  children,
}) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return <>{children}</>;
};

const LoginPage = Loadable(lazy(() => import("./sign-in")));
const SignUpPage = Loadable(lazy(() => import("./sign-up")));
const TaskListPage = Loadable(lazy(() => import("./task-list")));
const TaskDetailsPage = Loadable(lazy(() => import("./task-details")));
const GreetingPage = Loadable(lazy(() => import("./greeting")));

const TaskDetailsPageWithTaskId = () => {
  const taskId = useParams().taskId;
  const task = taskModel.useTask(taskId || "");

  if (task) {
    return (
      <Page title={task.title}>
        <GuestGuard>
          <TaskDetailsPage />
        </GuestGuard>
      </Page>
    );
  }
  return null;
};

export const Routing = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Navigate to="/tasks" replace />} />

        <Route
          path="/greeting"
          element={
            <Page title="Welcome!">
              <AuthGuard>
                <GreetingPage />
              </AuthGuard>
            </Page>
          }
        />
        <Route
          path="/signup"
          element={
            <Page title="Sign up">
              <AuthGuard>
                <SignUpPage />
              </AuthGuard>
            </Page>
          }
        />
        <Route
          path="/login"
          element={
            <Page title="Login">
              <AuthGuard>
                <LoginPage />
              </AuthGuard>
            </Page>
          }
        />

        <Route
          path="/tasks"
          element={
            <Page title="Home">
              <GuestGuard>
                <TaskListPage />
              </GuestGuard>
            </Page>
          }
        />

        <Route path="/tasks/:taskId" element={<TaskDetailsPageWithTaskId />} />
      </Route>
    </Routes>
  );
};
