import { combineReducers } from "redux";
import frozenReducer from "./frozen";

const rootReducer = combineReducers({
  frozen: frozenReducer
});

export default rootReducer;
