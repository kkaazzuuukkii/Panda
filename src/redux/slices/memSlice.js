import { createSlice } from "@reduxjs/toolkit";

export const memSlice = createSlice({
  name: "meme",
  initialState: {
    value: "",
    isMemAct1: false,
    memHref1: "https://youtu.be/RCO5a4r7J90?si=-WklTC7aNAAVapYc",
    memText: "Нажми на меня!!!!",
    isMemAct2: false,
    memHref2: "https://a9fm.github.io/lightshot",
    isMemAct3: false,
    memHref3: "https://www.youtube.com/watch?v=_6oIbrHuoM4",
  },
  reducers: {
    checkValue: (state, action) => {
      state.value = action.payload;

      if (action.payload === "Секретом") {
        state.isMemAct1 = !state.isMemAct1;
      } else if (action.payload === "Лапша") {
        state.isMemAct2 = !state.isMemAct2;
      } else if (action.payload === "Одно") {
        state.isMemAct3 = !state.isMemAct3;
      }
    },
  },
});

export const { checkValue } = memSlice.actions;

export default memSlice.reducer;
