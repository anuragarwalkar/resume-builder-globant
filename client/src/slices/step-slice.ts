import { createSlice } from "@reduxjs/toolkit";

const stepsMapper = {
  profile: 1,
  skills: 2,
  experience: 3,
  projects: 4,
  interests: 5,
  education: 6,
};

const initialState: any = {
  step: 1,
  maxStepCount: 6,
  nextBtnEnabled: true,
  preBtnEnabled: false,
};

const runOnStep = (state: any) => {
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
    nextStep: (state) => {
      state.step++;
      runOnStep(state);
    },
    prevStep: (state) => {
      state.step--;
      runOnStep(state);
    },
    navigateToScrren: (state, action) => {
      const stepName: string = action.payload.toLowerCase();
      const step = (stepsMapper as any)[stepName];
      if (step) {
        state.step = step;
      }
    },
  },
});

export const { nextStep, prevStep, navigateToScrren } = stepSlice.actions;
export default stepSlice.reducer;
