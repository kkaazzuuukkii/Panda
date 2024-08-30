import { createSlice } from "@reduxjs/toolkit";

export const memSlice = createSlice({
  name: "meme",
  initialState: {
    memHref1: "https://youtu.be/RCO5a4r7J90?si=-WklTC7aNAAVapYc",
    memHref2: "https://a9fm.github.io/lightshot",
    memHref3: "https://www.youtube.com/watch?v=_6oIbrHuoM4",
    link: "",
  },
  reducers: {
    checkValue: (state, action) => {
      switch (action.payload) {
        case "Секретом":
          state.link = state.memHref1;
          break;
        case "Лапша":
          state.link = state.memHref2;
          break;
        case "Одно":
          state.link = state.memHref3;
          break;
      }
    },
  },
});

export const { checkValue } = memSlice.actions;

export default memSlice.reducer;
