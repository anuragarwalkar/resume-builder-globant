import { createSlice } from "@reduxjs/toolkit";

export type DetailsOptions = {
  name: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  description: string;
};

interface ProfileInitialStateType {
  details: DetailsOptions;
  auth: {
    token: string | null;
  };
}

const initialState: ProfileInitialStateType = {
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

interface customType {
  payload: {
    name: keyof DetailsOptions;
    value: string;
  };
}

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    addProfileDetails: (state, action) => {
      state.details = action.payload;
    },
    addProfileDetailsByName: (state, action: customType) => {
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
