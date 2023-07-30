import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";
import { Box, Button, ButtonGroup } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import { userModel } from "@/entities/user";
import { UserMenuButton } from "@/widgets/user-menu";

export const MainLayout = () => {
  const isAuth = userModel.useAuth();

  const authNavigation = (
    <>
      <ButtonGroup>
        <Button component={Link} to="signup" sx={{ ml: 2 }}>
          Sign up
        </Button>

        <Button component={Link} to="signin">
          Sign in
        </Button>
      </ButtonGroup>
    </>
  );

  return (
    <Box
      sx={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <Header after={isAuth ? <UserMenuButton /> : authNavigation} />
      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};
