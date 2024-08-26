import { TOGGLE_NAV, TOGGLE_THEME } from "./action.js";

const initialState = {
  isNavVisible: false,
  isThemeAct: false,
};

const navReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_NAV:
      return { ...state, isNavVisible: !state.isNavVisible };
    case TOGGLE_THEME:
      return { ...state, isThemeAct: !state.isThemeAct };
    default:
      return state;
  }
};

export default navReducer;
