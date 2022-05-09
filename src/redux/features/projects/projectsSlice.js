import { createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({
  name: "toDo",
  initialState: [],
  reducers: {
    loadToDo: (toDo, action) => [...action.payload],
  },
});

export const { loadToDo: loadToDoActionCreator } = projectSlice.actions;

export default projectSlice.reducer;
