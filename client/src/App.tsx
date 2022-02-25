import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./app.styles.scss";
import Home from "./components/home/home.component";
import { PrivateRoute, PublicRoute } from "./components/utils/util.component";
import useGoogleAuth from "./hooks/useGoogleAuth";

const theme = createTheme({
  palette: {
    primary: {
      main: "#bfd731",
    },
    secondary: {
      main: "#78A9CD",
    },
  },
});

export function App() {
  const [{ token }] = useGoogleAuth();

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<PrivateRoute Component={Home} token={token} />}
          />
          <Route path="/login" element={<PublicRoute token={token} />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
