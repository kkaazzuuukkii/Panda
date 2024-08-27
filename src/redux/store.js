import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./slices/navSlice";
import themeReducer from "./slices/themeSlice";

export default configureStore({
  reducer: {
    nav: navReducer,
    theme: themeReducer,
  },
});
