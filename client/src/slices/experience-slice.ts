import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

// { institute: "", position: "", duration: "", experienceDescription: "" }
const initialState: any = {
  experiences: [],
};
const experienceSlice = createSlice({
  name: "experience",
  initialState,
  reducers: {
    addAExperience: (state: any, action) => {
      state.experiences.unshift({ ...action.payload, id: uuidv4() });
    },
  },
});

export const { addAExperience } = experienceSlice.actions;
export default experienceSlice.reducer;
