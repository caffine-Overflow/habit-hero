import { configureStore } from "@reduxjs/toolkit";
import onboardingReducer from "./onboardingSlice";
import subjectReducer from "./subjectSlice";
import selectedTasksReducer from "./selectedTasksSlice";

export const store = configureStore({
  reducer: {
    onboarding: onboardingReducer,
    // add other slices like habit:
    subjects: subjectReducer,
    selectedTasks: selectedTasksReducer,
  },
});
