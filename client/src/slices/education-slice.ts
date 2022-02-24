import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState: any = {
  educations: [],
};
const educationSlice = createSlice({
  name: "education",
  initialState,
  reducers: {
    addEducation: (state: any, action) => {
      state.educations.unshift({ ...action.payload, id: uuidv4() });
    },
  },
});

export const { addEducation } = educationSlice.actions;
export default educationSlice.reducer;
