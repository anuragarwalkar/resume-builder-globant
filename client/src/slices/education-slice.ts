import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
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
    addEducationSchool: (state: any, action) => {
      state.schools = state.education.schools.shift(action.payload);
    },
    addEducationCollage: (state: any, action) => {
      state.colleges = state.education.colleges.shift(action.payload);
    },
  },
});

export const { addEducationCollage, addEducationSchool } =
  educationSlice.actions;
export default educationSlice.reducer;
