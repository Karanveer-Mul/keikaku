import { combineReducers } from "redux";
import showReducers from "./showReducers";

const allReducers = combineReducers({
  show: showReducers,
});

export default allReducers;
