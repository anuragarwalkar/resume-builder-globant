import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  step: 1,
  maxStepCount: 5,
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
  },
});

export const { nextStep, prevStep } = stepSlice.actions;
export default stepSlice.reducer;
