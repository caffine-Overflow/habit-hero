import { createSlice } from "@reduxjs/toolkit";

const subjectSlice = createSlice({
  name: "subjects",
  initialState: {
    selected: [],
  },
  reducers: {
    toggleSubject: (state, action) => {
      const index = state.selected.indexOf(action.payload);
      if (index >= 0) {
        state.selected.splice(index, 1); // Deselect
      } else {
        state.selected.push(action.payload); // Select
      }
    },
    resetSubjects: (state) => {
      state.selected = [];
    },
  },
});

export const { toggleSubject, resetSubjects } = subjectSlice.actions;
export default subjectSlice.reducer;
