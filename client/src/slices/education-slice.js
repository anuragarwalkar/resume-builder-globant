import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  colleges: [
    {
      college: "",
      fromyear1: "",
      toyear1: "",
      qualification1: "",
      description1: "",
    },
  ],
  schools: [
    {
      school: "",
      fromyear2: "",
      toyear2: "",
      qualification2: "",
      description2: "",
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
