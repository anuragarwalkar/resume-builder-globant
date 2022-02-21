import React from "react";
import "./App.css";
import Resume from "./components/Resume";
import "bootstrap/dist/css/bootstrap.min.css";

import { makeStyles } from "@material-ui/core/styles";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { blue, green, purple } from "@material-ui/core/colors";
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
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <img src="/favicon.png" width="40" style={{marginRight: '5px'}} />
            <Typography variant="h6" className={classes.title}>
              Globant CV Builder
            </Typography>
          </Toolbar>
        </AppBar>
        <div style={{display: 'flex'}}>
        <div style={{ width: "45%" }}>
          <Resume />
        </div>
        <div style={{ width: "55%", padding:'20px' }}>
          <ResumeView />
        </div>
        </div>
        
      </div>
    </MuiThemeProvider>
  );
}

export default App;
