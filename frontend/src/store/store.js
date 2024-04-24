import { configureStore } from "@reduxjs/toolkit";
import { subjectsApi } from "./subjects/subjectApi";
export const store = configureStore({
  reducer: {
    [subjectsApi.reducerPath]: subjectsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(subjectsApi.middleware),
});
