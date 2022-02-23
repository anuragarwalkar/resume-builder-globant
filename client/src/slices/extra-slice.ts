import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  skills: [{ id: 1, name: "JavaScript", rating: 4, totalRating: 5 }],
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
