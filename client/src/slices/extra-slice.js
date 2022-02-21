import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  skills: [],
  interests: [],
};

const extraSlice = createSlice({
  name: "extra",
  initialState,
  reducers: {
    addSkills: (state, action) => {
      state.extra.skills = state.experience.skills.shift(action.payload);
    },
    addIntrests: (state, action) => {
      state.extra.interests = state.extra.interests.shift(action.payload);
    },
  },
});

export const { addIntrests, addSkills } = extraSlice.actions;
export default extraSlice.reducer;
