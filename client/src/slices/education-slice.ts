import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

interface EducationType {
  collegeUniversity: "";
  fromYear: "";
  toYear: "";
  qualification: "";
  location: "";
}

interface EducationInitialStateType {
  educations: EducationType[];
}

const initialState: EducationInitialStateType = {
  educations: [],
};
const educationSlice = createSlice({
  name: "education",
  initialState,
  reducers: {
    addEducation: (state, action) => {
      state.educations.unshift({ ...action.payload, id: uuidv4() });
    },
  },
});

export const { addEducation } = educationSlice.actions;
export default educationSlice.reducer;
