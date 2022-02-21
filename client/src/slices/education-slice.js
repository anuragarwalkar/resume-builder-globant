import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  colleges: [
    {
      college: "",
      fromYear: "",
      toYear: "",
      qualification: "",
      description: "",
    },
  ],
  schools: [
    {
      school: "",
      fromYear: "",
      toYear: "",
      qualification: "",
      description: "",
    },
  ],
};
const educationSlice = createSlice({
  name: "education",
  initialState,
  reducers: {
    addEducationSchool: (state, action) => {
      state.education.schools = state.education.schools.shift(action.payload);
    },
    addEducationCollage: (state, action) => {
      state.education.colleges = state.education.colleges.shift(action.payload);
    },
  },
});

export const { addEducationCollage, addEducationSchool } =
  educationSlice.actions;
export default educationSlice.reducer;
