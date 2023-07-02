import { Navigate, Route, Routes } from "react-router-dom";
import { TaskListPage } from "./task-list";
import { TaskDetails } from "./task-details";
import { SignInPage } from "./sign-in";
import { SignUpPage } from "./sign-up";
import { FC, ReactNode } from "react";
import { userModel } from "@/entities/user";

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

export const Routing = () => {
  return (
    <Routes>
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
            <TaskDetails />
          </GuestGuard>
        }
      />
    </Routes>
  );
};
