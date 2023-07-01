import { Navigate, Route, Routes } from "react-router-dom";
import { TaskListPage } from "./task-list";
import { TaskDetails } from "./task-details";
import { SignInPage } from "./sign-in";
import { SignUpPage } from "./sign-up";
import { SettingsPage } from "./settings";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/tasks" />} />

      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/signin" element={<SignInPage />} />

      <Route path="/tasks" element={<TaskListPage />} />
      <Route path="/tasks/:taskId" element={<TaskDetails />} />

      <Route path="/settings" element={<SettingsPage />} />
    </Routes>
  );
};
