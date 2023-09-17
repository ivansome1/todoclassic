import "./index.css";
import { CssBaseline, createTheme, ThemeProvider, Fade } from "@mui/material";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Routing } from "@/pages";
import { AuthProvider } from "./providers";
import { store } from "./store";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { green, cyan } from "@mui/material/colors";
import { DockProvider } from "@/widgets/dock";
import { UserMenuButton } from "@/widgets/user-menu";

const theme = createTheme({
  shape: { borderRadius: 6 },
  palette: {
    mode: "dark",

    background: {
      default: "#191919",
      paper: "#191919",
    },
    primary: green,
    secondary: cyan,
  },
  components: {
    MuiTouchRipple: {
      styleOverrides: {
        root: {
          anim: 100,
        },
      },
    },
    MuiSkeleton: {
      defaultProps: {
        animation: "wave",
      },
    },
    MuiMenu: {
      defaultProps: {
        PaperProps: {
          sx: {
            border: 1,
            borderColor: "divider",
          },
        },
        TransitionComponent: Fade,
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "center",
        },
        transformOrigin: {
          vertical: "top",
          horizontal: "center",
        },
      },
      styleOverrides: {
        list: {
          paddingTop: 4,
          paddingBottom: 4,
          display: "flex",
          flexDirection: "column",
          gap: 4,
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: { borderRadius: 4 },
        gutters: {
          marginLeft: 4,
          marginRight: 4,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          position: "relative",
          "&:after": {
            content: '""',
            position: "absolute",
            top: "-8px",
            bottom: "-8px",
            left: "-8px",
            right: "-8px",
            display: "block",
            opacity: 0.3,
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          position: "relative",
          "&:after": {
            content: '""',
            position: "absolute",
            top: "-8px",
            bottom: "-8px",
            left: "-8px",
            right: "-8px",
            display: "block",
            opacity: 0.3,
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          position: "relative",
          "&:after": {
            content: '""',
            position: "absolute",
            top: "-8px",
            bottom: "-8px",
            left: "-8px",
            right: "-8px",
            display: "block",
            opacity: 0.3,
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          position: "relative",
          "&:after": {
            content: '""',
            position: "absolute",
            top: "-8px",
            bottom: "-8px",
            left: "-8px",
            right: "-8px",
            display: "block",
            opacity: 0.3,
          },
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        root: {
          position: "relative",
          "&:after": {
            content: '""',
            position: "absolute",
            top: "-8px",
            bottom: "-8px",
            left: "-8px",
            right: "-8px",
            display: "block",
            opacity: 0.3,
          },
        },
      },
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline>
            <AuthProvider>
              <DockProvider after={<UserMenuButton />}>
                <Routing />
              </DockProvider>
            </AuthProvider>
          </CssBaseline>
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
