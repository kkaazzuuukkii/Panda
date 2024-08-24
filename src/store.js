import { createStore } from "redux";
import navReducer from "./reducer.js";

const store = createStore(navReducer);

export default store;
