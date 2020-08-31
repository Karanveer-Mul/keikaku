import { combineReducers } from "redux";
import animeReducer from "./animeReducer";

const allReducers = combineReducers({
  anime: animeReducer,
});

export default allReducers;
