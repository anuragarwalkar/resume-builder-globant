import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { nextStep, prevStep } from "../../slices/step-slice";
import Education from "../education/Education.component";
import Experience from "../experience/Experience";
import Interests from "../interets/interest.component";
import Profile from "../profile/Profile";
import Projects from "../projects/Projects";
import Skills from "../skills/Skills";
import "./cv-editor.styles.scss";

function CVEditor() {
  const { step, preBtnEnabled, nextBtnEnabled } = useSelector(
    (state: any) => state.step
  );
  const dispatch = useDispatch();

  const onNextStep = () => {
    dispatch(nextStep());
  };

  const onPrevStep = () => {
    dispatch(prevStep());
  };

  const getComponent = () => {
    switch (step) {
      case 1:
        return <Profile />;
      case 2:
        return <Skills />;
      case 3:
        return <Experience />;
      case 4:
        return <Projects />;
      case 5:
        return <Interests />;
      case 6:
        return <Education />;
      default:
        return <div />;
    }
  };

  return (
    <div className="cv-editor">
      <div>{getComponent()}</div>
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
    </div>
  );
}

export default CVEditor;
