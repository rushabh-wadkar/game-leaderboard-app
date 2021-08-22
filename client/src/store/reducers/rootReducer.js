import { combineReducers } from "redux";
import reducer from "./reducer";

const rootReducer = combineReducers({
  leaderboard: reducer,
});

export default rootReducer;
