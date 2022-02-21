import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import educationSlice from "../slices/education-slice";
import experianceSlice from "../slices/experience-slice";
import profileSlice from "../slices/profile-slice";
import projectSlice from "../slices/project-slice";

const reducer = combineReducers({
  profile: profileSlice,
  education: educationSlice,
  experience: experianceSlice,
  project: projectSlice,
});

const store = configureStore({
  reducer,
});

export default store;
