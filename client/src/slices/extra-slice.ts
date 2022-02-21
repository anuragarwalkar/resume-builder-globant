import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  skills: [],
  interests: [],
};

const extraSlice = createSlice({
  name: "extra",
  initialState,
  reducers: {
    addSkills: (state: any, action) => {
      state.extra.skills = state.experience.skills.shift(action.payload);
    },
    addIntrests: (state: any, action) => {
      state.extra.interests = state.extra.interests.shift(action.payload);
    },
  },
});

export const { addIntrests, addSkills } = extraSlice.actions;
export default extraSlice.reducer;
