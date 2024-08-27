import { createSlice } from "@reduxjs/toolkit";

export const memSlice = createSlice({
  name: "meme",
  initialState: {
    value: "",
    isMemAct: false,
    memHref: "https://youtu.be/RCO5a4r7J90?si=-WklTC7aNAAVapYc",
    memText: "Нажми на меня!!!!",
  },
  reducers: {
    checkValue: (state, action) => {
      state.value = action.payload;

      if (action.payload === "Секретом") {
        state.isMemAct = !state.isMemAct;
      }
    },
  },
});

export const { checkValue } = memSlice.actions;

export default memSlice.reducer;
