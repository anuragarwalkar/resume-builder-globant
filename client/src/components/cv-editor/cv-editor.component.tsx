import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import DownloadIcon from "@mui/icons-material/Download";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  IconButton,
  Typography,
} from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import { Box } from "@mui/system";
import axios from "axios";
import { saveAs } from "file-saver";
import { useState } from "react";
import { renderToString } from "react-dom/server";
import { Provider, useDispatch } from "react-redux";
import { useAppSelector } from "../../app/hooks";
import { store } from "../../app/store";
import environment from "../../environment";
import { nextStep, prevStep } from "../../slices/step-slice";
import CVView from "../cv-view/cv-view.component";
import { tempStyles } from "../cv-view/tempStyles";
import Education from "../education/Education.component";
import Experience from "../experience/Experience";
import Interests from "../interets/interest.component";
import Profile from "../profile/Profile";
import Projects from "../projects/Projects";
import Skills from "../skills/Skills";
import "./cv-editor.styles.scss";

function CVEditor({ show, onClick }: { show: boolean; onClick: any }) {
  const { name } = useAppSelector((state) => state.profile.details);
  const { step, preBtnEnabled, nextBtnEnabled } = useAppSelector(
    (state) => state.step
  );
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const onNextStep = () => {
    dispatch(nextStep());
  };

  const onPrevStep = () => {
    dispatch(prevStep());
  };

  const onDownloadResume = async () => {
    setLoading(true);
    const body = renderToString(
      <Provider store={store}>
        <CVView />
      </Provider>
    );

    const res = await axios.post(
      `${environment.url}/create-pdf`,
      {
        body,
        styles: tempStyles,
      },
      { responseType: "blob" }
    );

    function camelCase(str: string) {
      return str
        .replace(/\s(.)/g, function ($1) {
          return $1.toUpperCase();
        })
        .replace(/\s/g, "")
        .replace(/^(.)/, function ($1) {
          return $1.toLowerCase();
        });
    }

    const pdfBlob = new Blob([res.data], { type: "application/pdf" });
    saveAs(pdfBlob, `${camelCase(name)}-globant-cv.pdf`);
    setLoading(false);
  };

  const DynamicComponent = ({ isMobile = false }) => {
    switch (step) {
      case 1:
        return <Profile isMobile={isMobile} />;
      case 2:
        return <Skills isMobile={isMobile} />;
      case 3:
        return <Experience isMobile={isMobile} />;
      case 4:
        return <Projects isMobile={isMobile} />;
      case 5:
        return <Interests isMobile={isMobile} />;
      case 6:
        return <Education isMobile={isMobile} />;
      default:
        return <div />;
    }
  };

  return (
    <div className="cv-editor">
      <div className="cv-editor__desktop">
        <DynamicComponent />
      </div>

      <div className="cv-editor__mobile">
        <Accordion expanded={show}>
          <AccordionSummary
            expandIcon={
              <IconButton onClick={onClick}>
                <ExpandMoreIcon />
              </IconButton>
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography onClick={onClick}>Personal Details</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <DynamicComponent isMobile />
          </AccordionDetails>
        </Accordion>
      </div>

      {show && (
        <div className="cv-editor__buttons">
          <Button
            variant="contained"
            color="secondary"
            onClick={onPrevStep}
            disabled={!preBtnEnabled}
            startIcon={<ArrowBackIosIcon />}
          >
            Back
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={onNextStep}
            endIcon={<ArrowForwardIosIcon />}
            disabled={!nextBtnEnabled}
          >
            Next
          </Button>
        </div>
      )}

      {show && (
        <div className="cv-editor__download-button">
          {!loading && (
            <Button
              variant="contained"
              color="primary"
              onClick={onDownloadResume}
              endIcon={<DownloadIcon />}
            >
              download cv
            </Button>
          )}
        </div>
      )}

      <div className="cv-editor__download-progress">
        {loading && (
          <Box sx={{ width: "25%" }}>
            <LinearProgress />
          </Box>
        )}
      </div>
    </div>
  );
}

export default CVEditor;
