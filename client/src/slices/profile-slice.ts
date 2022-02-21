import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  github: "",
  linkedin: "",
  description: "",
};
const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    addProfileDetails: (state, action) => {
      state = action.payload;
    },

    addProfileDetailsByName: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
  },
});

export const { addProfileDetails, addProfileDetailsByName } =
  profileSlice.actions;
export default profileSlice.reducer;
