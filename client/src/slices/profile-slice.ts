import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  details: {
    name: "",
    email: "",
    phone: "",
    github: "",
    linkedin: "",
    description: "",
  },
  auth: {
    token: null,
  },
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    addProfileDetails: (state, action) => {
      state.details = action.payload;
    },
    addProfileDetailsByName: (state, action) => {
      const { name, value } = action.payload;
      state.details[name] = value;
    },
    addUserAuth: (state, action) => {
      if (action.payload) {
        const { token, name, email } = action.payload;
        if (token) {
          state.auth.token = token;
          state.details.name = name;
          state.details.email = email;
        }
      }
    },
  },
});

export const { addProfileDetails, addProfileDetailsByName, addUserAuth } =
  profileSlice.actions;

export default profileSlice.reducer;
