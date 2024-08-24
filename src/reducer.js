import { TOGGLE_NAV } from "./action.js";

const initialState = {
  isNavVisible: false,
};

const navReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_NAV:
      return { ...state, isNavVisible: !state.isNavVisible };
    default:
      return state;
  }
};

export default navReducer;
