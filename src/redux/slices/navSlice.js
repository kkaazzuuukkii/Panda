import { createSlice } from "@reduxjs/toolkit";

export const navSlice = createSlice({
  name: "navigation",

  initialState: {
    isNavVisible: false,
  },

  reducers: {
    navReducer: (state) => {
      state.isNavVisible = !state.isNavVisible;
    },
  },
});

export const { navReducer } = navSlice.actions;

export default navSlice.reducer;
