import { createSlice } from "@reduxjs/toolkit";

interface ProjectType {
  title: string;
  link: string;
  description: string;
  id: string;
}
interface ProjectInitialStateType {
  projects: ProjectType[];
}
const initialState: ProjectInitialStateType = {
  projects: [],
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    addAProject: (state, action) => {
      state.projects.unshift({ ...action.payload, id: new Date().toString() });
    },
  },
});

export const { addAProject } = projectSlice.actions;
export default projectSlice.reducer;
