import { Toolbar, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import React from "react";
import CVEditor from "../cv-editor/cv-editor.component";
import ResumeView from "../cv-view/ResumeView";

function Home() {
  return (
    <div>
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
          <CVEditor />
        </div>
        <div style={{ flex: 0.5, padding: "20px" }}>
          <ResumeView />
        </div>
      </div>
    </div>
  );
}

export default Home;
