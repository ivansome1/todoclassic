import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";
import { Box, Typography } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import { userModel } from "@/entities/user";
import { UserMenuButton } from "@/widgets/user-menu";
import { Logo } from "@/shared/ui";

export const MainLayout = () => {
  const isAuth = userModel.useAuth();

  const authNavigation = (
    <>
      <Typography color="primary" component={Link} to="signup" sx={{ ml: 2 }}>
        Sign up
      </Typography>

      <Typography color="primary" component={Link} to="signin" sx={{ ml: 2 }}>
        Sign in
      </Typography>
    </>
  );

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header
        before={
          <Box
            sx={{ textDecoration: "none" }}
            component={Link}
            to={isAuth ? "tasks" : "signin"}
          >
            <Logo sx={{ width: "32px", height: "32px" }} />
          </Box>
        }
        after={isAuth ? <UserMenuButton /> : authNavigation}
      />
      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};
