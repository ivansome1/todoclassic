import "./index.css";
import { Routing } from "@/pages";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline, createTheme, ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "./store";
import "@fontsource/roboto";
import { AuthProvider } from "./providers";
import { FooterProvider } from "./providers/footer";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
  components: {
    MuiSkeleton: {
      defaultProps: {
        animation: "wave",
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
              <FooterProvider>
                <Routing />
              </FooterProvider>
            </AuthProvider>
          </CssBaseline>
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
