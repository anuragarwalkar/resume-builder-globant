import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

// { name: "JavaScript", rating: 4, totalRating: 5 }
const initialState: any = {
  skills: [],
  interests: [],
};

const extraSlice = createSlice({
  name: "extra",
  initialState,
  reducers: {
    addSkills: (state: any, action) => {
      state.skills.unshift({
        ...action.payload,
        id: uuidv4(),
      });
    },
    addIntrests: (state: any, action) => {
      state.interests.push({
        ...action.payload,
        id: uuidv4(),
      });
    },
  },
});

export const { addIntrests, addSkills } = extraSlice.actions;
export default extraSlice.reducer;
