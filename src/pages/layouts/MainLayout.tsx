import { userModel } from "@/entities/user";
import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";
import { UserMenuButton } from "@/widgets/user-menu";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  const isAuth = userModel.useAuth();

  return (
    <Box
      sx={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <Header after={isAuth ? <UserMenuButton /> : undefined} />
      <Box
        sx={{ flexGrow: 1, display: "flex", flexDirection: "column", mb: 4 }}
      >
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};
