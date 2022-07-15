import thunk from "./min-redux-thunk.js";
import logger from "./min-redux-logger.js";
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
