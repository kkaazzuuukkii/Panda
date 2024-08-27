import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./slices/navSlice";
import themeReducer from "./slices/themeSlice";
import memReducer from "./slices/memSlice";

export default configureStore({
  reducer: {
    nav: navReducer,
    theme: themeReducer,
    mem: memReducer,
  },
});
