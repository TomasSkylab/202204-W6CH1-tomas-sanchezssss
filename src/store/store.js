import { configureStore } from "@reduxjs/toolkit";
import projectsSlice from "../redux/features/projects/projectsSlice";

const store = configureStore({
  reducer: {
    toDo: projectsSlice,
  },
});

export default store;
