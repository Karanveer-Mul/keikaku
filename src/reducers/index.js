import { combineReducers } from "redux";
import topReducers from "./topReducer";
import seasonReducer from "./seasonReducer";

const allReducers = combineReducers({
  season: seasonReducer,
  top: topReducers,
});

export default allReducers;
