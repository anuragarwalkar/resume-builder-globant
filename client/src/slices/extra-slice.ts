import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

interface SkillType {
  name: string;
  rating: number;
  totalRating: number;
  id: string;
}

interface InterestType {
  name: string;
  id: string;
}

interface ExtraInitialStateType {
  skills: SkillType[];
  interests: InterestType[];
}
const initialState: ExtraInitialStateType = {
  skills: [],
  interests: [],
};

const extraSlice = createSlice({
  name: "extra",
  initialState,
  reducers: {
    addSkills: (state, action) => {
      state.skills.unshift({
        ...action.payload,
        id: uuidv4(),
      });
    },
    addIntrests: (state, action) => {
      state.interests.push({
        ...action.payload,
        id: uuidv4(),
      });
    },
  },
});

export const { addIntrests, addSkills } = extraSlice.actions;
export default extraSlice.reducer;
