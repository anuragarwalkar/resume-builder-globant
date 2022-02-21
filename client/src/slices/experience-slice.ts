import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  experiences: [
    { institute: "", position: "", duration: "", experienceDescription: "" },
  ],
};
const experienceSlice = createSlice({
  name: "experience",
  initialState,
  reducers: {
    addAExperience: (state: any, action) => {
      state.experiences.shift(action.payload);
    },
  },
});

export const { addAExperience } = experienceSlice.actions;
export default experienceSlice.reducer;
