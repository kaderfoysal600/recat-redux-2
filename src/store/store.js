import { configureStore } from "@reduxjs/toolkit";
import PostReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    app: PostReducer,
  },
});
