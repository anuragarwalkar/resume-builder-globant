import { Toolbar, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import CVEditor from "../cv-editor/cv-editor.component";
import CVView from "../cv-view/cv-view.component";
import "./home.styles.scss";

function Home() {
  return (
    <div className="home">
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
      <div className="home__content">
        <div style={{ flex: 0.47, marginTop: "2%" }}>
          <CVEditor />
        </div>
        <div style={{ flex: 0.5, padding: "20px" }}>
          <CVView />
        </div>
      </div>
    </div>
  );
}

export default Home;
