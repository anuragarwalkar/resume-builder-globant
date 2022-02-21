import {
  Action,
  combineReducers,
  configureStore,
  ThunkAction,
} from "@reduxjs/toolkit";
import educationSlice from "../slices/education-slice";
import experianceSlice from "../slices/experience-slice";
import profileSlice from "../slices/profile-slice";
import projectSlice from "../slices/project-slice";
import stepSlice from "../slices/step-slice";

const reducer = combineReducers({
  step: stepSlice,
  profile: profileSlice,
  education: educationSlice,
  experience: experianceSlice,
  project: projectSlice,
});

export const store = configureStore({
  reducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
