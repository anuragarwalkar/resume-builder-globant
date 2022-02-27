import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

interface ExperienceType {
  organization: string;
  position: string;
  description: string;
  to: string;
  from: string;
  location: string;
  id: string;
}
interface ExperiencesInitialStateType {
  experiences: ExperienceType[];
}
const initialState: ExperiencesInitialStateType = {
  experiences: [],
};
const experienceSlice = createSlice({
  name: "experience",
  initialState,
  reducers: {
    addAExperience: (state, action) => {
      state.experiences.unshift({ ...action.payload, id: uuidv4() });
    },
  },
});

export const { addAExperience } = experienceSlice.actions;
export default experienceSlice.reducer;
