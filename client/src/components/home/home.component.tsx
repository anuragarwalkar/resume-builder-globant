import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  IconButton,
  Typography,
} from "@mui/material";
import { useState } from "react";
import CVEditor from "../cv-editor/cv-editor.component";
import CVView from "../cv-view/cv-view.component";
import Navbar from "../navbar/navbar.component";
import "./home.styles.scss";

function Home() {
  const [show, setShow] = useState(false);

  return (
    <div className="home">
      <div className="home__header">
        <Navbar />
      </div>
      <div className="home__content">
        <div className="home__cv-editor">
          <CVEditor
            show={show}
            onClick={() => {
              setShow(!show);
            }}
          />
        </div>
        <div className="home__cv-view">
          <CVViewContainer />
        </div>
      </div>
    </div>
  );
}

export default Home;

function CVViewContainer() {
  const [showCV, setShowCV] = useState(false);

  return (
    <div className="cv-view">
      <div className="cv-view__mobile-view">
        <Accordion expanded={showCV}>
          <AccordionSummary
            expandIcon={
              <IconButton
                onClick={(e) => {
                  setShowCV(!showCV);
                }}
              >
                <ExpandMoreIcon />
              </IconButton>
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Resume Preview</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <CVView />
          </AccordionDetails>
        </Accordion>
      </div>

      <div className="cv-view__desktop-view">
        <CVView />
      </div>
    </div>
  );
}
