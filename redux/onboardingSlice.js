import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  answers: {}, // use object instead of array
  name: "", // user name for contract
};

const onboardingSlice = createSlice({
  name: "onboarding",
  initialState,
  reducers: {
    setAnswer: (state, action) => {
      const { questionId, answer } = action.payload;
      state.answers[questionId] = answer;
    },
    setAnswers: (state, action) => {
      state.answers = typeof action.payload === "object" ? action.payload : {};
    },
    resetAnswers: (state) => {
      state.answers = {};
    },

    setName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { setAnswer, setAnswers, resetAnswers } = onboardingSlice.actions;
export default onboardingSlice.reducer;
