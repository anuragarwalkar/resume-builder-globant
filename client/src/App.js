import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import { blue } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import "./App.css";
import Resume from "./components/Resume";
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
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: {
      main: "#f44336",
    },
  },
});

export function App() {
  const onClick = () => {
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
              src="/favicon.png"
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
          <div style={{ width: "45%" }}>
            <Resume />
          </div>
          <div style={{ width: "55%", padding: "20px" }}>
            <ResumeView />
          </div>
        </div>
        <button onClick={onClick}>download</button>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
