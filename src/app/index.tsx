import "./index.css";
import { Routing } from "@/pages";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline, createTheme, ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "./store";
import { AuthProvider } from "./providers";
import { FooterProvider } from "./providers/footer";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

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
