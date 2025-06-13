import { createSlice } from "@reduxjs/toolkit";

const selectedTasksSlice = createSlice({
  name: "selectedTasks",
  initialState: {}, // { [subjectId]: [taskId, ...] }

  reducers: {
    addSelectedTask: (state, action) => {
      const { subjectId, taskId } = action.payload;
      if (!state[subjectId]) {
        state[subjectId] = [];
      }
      if (!state[subjectId].includes(taskId)) {
        state[subjectId].push(taskId);
      }
    },

    removeSelectedTask: (state, action) => {
      const { subjectId, taskId } = action.payload;
      if (state[subjectId]) {
        state[subjectId] = state[subjectId].filter((id) => id !== taskId);
        // If subject has no tasks left, you may optionally delete the key
        if (state[subjectId].length === 0) {
          delete state[subjectId];
        }
      }
    },

    clearSubjectTasks: (state, action) => {
      const { subjectId } = action.payload;
      delete state[subjectId];
    },

    clearAllTasks: () => {
      return {};
    },

    logState: (state) => {
      console.log("Current selectedTasks state:", state);
    },
  },
});

export const {
  addSelectedTask,
  removeSelectedTask,
  clearSubjectTasks,
  clearAllTasks,
  logState,
} = selectedTasksSlice.actions;

export default selectedTasksSlice.reducer;
