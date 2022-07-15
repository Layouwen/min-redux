import thunk from "redux-thunk";
import logger from "redux-logger";
import { createStore, applyMiddleware } from "./min-redux";

const countReducer = (state = 0, action) => {
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "SUB":
      return state - 1;
    default:
      return state;
  }
};

const reduxStore = createStore(countReducer, applyMiddleware(thunk, logger));

export default reduxStore;
