import { createSlice } from "@reduxjs/toolkit";

const stepsMapper = {
  profile: 1,
  skills: 2,
  experience: 3,
  projects: 4,
  interests: 5,
  education: 6,
};

const initialState = {
  step: 1,
  maxStepCount: 6,
  nextBtnEnabled: true,
  preBtnEnabled: false,
};

type StepInitialStateType = typeof initialState;
type stepMapperType = typeof stepsMapper;

const runOnStep = (state: StepInitialStateType) => {
  if (state.step === 1) {
    state.preBtnEnabled = false;
    state.nextBtnEnabled = true;
  } else if (state.step === state.maxStepCount) {
    state.preBtnEnabled = true;
    state.nextBtnEnabled = false;
  } else if (state.step < state.maxStepCount) {
    state.preBtnEnabled = true;
    state.nextBtnEnabled = true;
  }
};

const stepSlice = createSlice({
  name: "step",
  initialState,
  reducers: {
    nextStep: (state: any) => {
      state.step++;
      runOnStep(state);
    },
    prevStep: (state: any) => {
      state.step--;
      runOnStep(state);
    },
    navigateToScrren: (state: any, action: any) => {
      const stepName = action.payload.toLowerCase() as keyof stepMapperType;
      const step = stepsMapper[stepName];
      if (step) {
        state.step = step;
        runOnStep(state);
      }
    },
  },
});

export const { nextStep, prevStep, navigateToScrren } = stepSlice.actions;
export default stepSlice.reducer;
