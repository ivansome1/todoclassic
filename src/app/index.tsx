import "./index.css";
import { CssBaseline, createTheme, ThemeProvider } from "@mui/material";
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

const theme = createTheme({
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
    MuiSkeleton: {
      defaultProps: {
        animation: "wave",
      },
    },
    MuiMenu: {
      defaultProps: {
        transitionDuration: 0,
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
          gap: 0,
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
  },
});

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline>
            <AuthProvider>
              <Routing />
            </AuthProvider>
          </CssBaseline>
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
