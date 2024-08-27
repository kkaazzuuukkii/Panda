import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    isThemeAct: false,
  },
  reducers: {
    themeReducer: (state) => {
      state.isThemeAct = !state.isThemeAct;
    },
  },
});

export const { themeReducer } = themeSlice.actions;

export default themeSlice.reducer;
