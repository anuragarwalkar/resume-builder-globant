import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projects: [{ title: "", link: "", projectDescription: "" }],
};
const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    addAProject: (state, action) => {
      state.project.projects = state.project.projects.shift(action.payload);
    },
  },
});

export const { addAProject } = projectSlice.actions;
export default projectSlice.reducer;
