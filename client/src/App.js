import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import "./App.css";
import ResumeEditor from "./components/ResumeEditor";
import ResumeView from "./components/ResumeView";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "white",
    fontSize: "1.4rem",
  },
}));

const theme = createMuiTheme({
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
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <img
              src="/globant_logo_white.png"
              width="40"
              alt="Globant Logo"
              style={{ marginRight: "5px" }}
            />
            <Typography variant="h6" className={classes.title}>
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
    </MuiThemeProvider>
  );
}

export default App;
