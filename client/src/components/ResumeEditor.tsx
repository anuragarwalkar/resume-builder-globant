import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { nextStep, prevStep } from "../slices/step-slice";
import Education from "./Education";
import Experience from "./Experience";
import Extras from "./Extras";
import Profile from "./Profile";
import Projects from "./Projects";

function ResumeEditor() {
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
        return <Experience />;
      case 3:
        return <Projects />;
      case 4:
        return <Extras />;
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

export default ResumeEditor;
