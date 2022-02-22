import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import Home from "./components/home/home.component";
import Login from "./components/login/Login.component";

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
  let user = null;
  const onDownloadResume = () => {
    // const html = renderToStaticMarkup(<ResumeView />);
    // console.log(html);
  };
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={!user ? <Navigate to="/login" /> : <Home />}
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
