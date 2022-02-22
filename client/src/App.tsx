import { Toolbar, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { renderToStaticMarkup } from "react-dom/server";
import "./App.css";
import ResumeEditor from "./components/ResumeEditor";
import ResumeView from "./components/ResumeView";

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
  const onDownloadResume = () => {
    const html = renderToStaticMarkup(<ResumeView />);
    console.log(html);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <img
              src="/globant_logo_white.png"
              width="40"
              alt="Globant Logo"
              style={{ marginRight: "5px" }}
            />
            <Typography variant="h6" style={{ color: "white" }}>
              Globant CV Builder
            </Typography>
          </Toolbar>
        </AppBar>
        <div style={{ display: "flex" }}>
          <div style={{ flex: 0.5, marginTop: "5%" }}>
            <ResumeEditor />
          </div>
          <div style={{ flex: 0.5, padding: "20px" }}>
            <ResumeView />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}
