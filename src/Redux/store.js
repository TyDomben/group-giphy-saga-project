import { createStoreHook } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";

//reducer "input" if SET_INPUT is reveived set that input as the state
const input = (state = "", action) => {
  if (action.type === "SET_INPUT") {
    return action.payload;
  }
  //else default
  return state;
};

// create a store
const store = createStore(combineReducers({ input }), applyMiddleware(logger));

export default store;
