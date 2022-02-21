import { Button } from "@material-ui/core";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextStep, prevStep } from "../slices/step-slice";
import Education from "./Education";
import Experience from "./Experience";
import Extras from "./Extras";
import Profile from "./Profile";
import Projects from "./Projects";

function ResumeEditor() {
  const { step, preBtnEnabled, nextBtnEnabled } = useSelector(
    (state) => state.step
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
        return <Profile nextStep={onNextStep} />;
      case 2:
        return <Education nextStep={onNextStep} prevStep={onPrevStep} />;
      case 3:
        return <Projects nextStep={onNextStep} prevStep={onPrevStep} />;
      case 4:
        return <Experience nextStep={onNextStep} prevStep={onPrevStep} />;
      case 5:
        return <Extras prevStep={onPrevStep} />;
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
          startIcon={<NavigateBeforeIcon />}
        >
          Back
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={onNextStep}
          endIcon={<NavigateNextIcon />}
          disabled={!nextBtnEnabled}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default ResumeEditor;
