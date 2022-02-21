import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  experiences: [
    { institute: "", position: "", duration: "", experienceDescription: "" },
  ],
};
const experienceSlice = createSlice({
  name: "experience",
  initialState,
  reducers: {
    addAExperience: (state, action) => {
      state.experience.experiences = state.experience.experiences.shift(
        action.payload
      );
    },
  },
});

export const { addAExperience } = experienceSlice.actions;
export default experienceSlice.reducer;
