import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { nextStep, prevStep } from "../../slices/step-slice";
import Education from "../education/Education.component";
import Experience from "../Experience";
import Profile from "../Profile";
import Projects from "../Projects";
import Skills from "../Skills";

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
        return <Education />;
      default:
        return <div />;
    }
  };

  return (
    <div>
      <div>{getComponent()}</div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "20px",
        }}
      >
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
