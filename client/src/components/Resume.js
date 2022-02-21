import React, { useState } from "react";
import Education from "./Education";
import Experience from "./Experience";
import Extras from "./Extras";
import Profile from "./Profile";
import Projects from "./Projects";

function Resume() {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep((step) => step + 1);
  };

  const prevStep = () => {
    setStep((step) => step - 1);
  };

  switch (step) {
    case 1:
      return (
        <div>
          <div>
            <Profile nextStep={nextStep} />
          </div>
        </div>
      );
    case 2:
      return (
        <div>
          <div>
            <Education nextStep={nextStep} prevStep={prevStep} />
          </div>
        </div>
      );
    case 3:
      return (
        <div>
          <div>
            <Projects nextStep={nextStep} prevStep={prevStep} />
          </div>
        </div>
      );
    case 4:
      return (
        <div>
          <div>
            <Experience nextStep={nextStep} prevStep={prevStep} />
          </div>
        </div>
      );
    case 5:
      return (
        <div>
          <div>
            <Extras prevStep={prevStep} />
          </div>
        </div>
      );
    default:
      return <div />;
  }
}

export default Resume;
