import { configureStore } from "@reduxjs/toolkit";
import languageSlice from "./languageSlice";
export default configureStore({
  reducer: {
    language: languageSlice,
  },
});
