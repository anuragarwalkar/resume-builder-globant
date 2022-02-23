import { createSlice } from "@reduxjs/toolkit";

// { title: "", link: "", description: "" }
const initialState: any = {
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
