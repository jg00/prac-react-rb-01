import { combineReducers } from "redux";
import frozenReducer from "./frozen";

const rootReducer = combineReducers({
  frozen: frozenReducer
});

export default rootReducer;

/*
  This is the root reducer.  It is the store manager for al lthe reducers.

  To make a root reducer:
  1 Get a method from redux, called combineReducers which will combine individual reducers
  into one big store.

  2 Import each individual reducer

  3 Call combineReducers() method and hand it an object.
  Each key in combineReducers will be a piece of state in the redux store and
  each value will be the value of that piece of state in the redux store
  ex: combineReducers({frozen: frozenReducer})
*/
