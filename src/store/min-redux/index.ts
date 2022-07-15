import { compose } from "redux";

function createStore(reducer, enhancer) {
  if (enhancer) {
    return enhancer(createStore)(reducer);
  }

  let stateStore;
  let subscribeListens = [];

  const getState = () => {
    return stateStore;
  };

  const dispatch = (action) => {
    stateStore = reducer(stateStore, action);
    subscribeListens.forEach((listen) => listen());
  };

  const subscribe = (listen) => {
    subscribeListens.push(listen);
    return () => {
      subscribeListens = subscribeListens.filter((l) => l !== listen);
    };
  };

  dispatch({ type: "@@redux/INIT" });

  return {
    getState,
    subscribe,
    dispatch,
  };
}

function applyMiddleware(...middlewares) {
  return (createStore) => (reducer) => {
    const store = createStore(reducer);
    const dispatch = store.dispatch;

    const midApi = {
      getState: store.getState,
      dispatch: (action, ...args) => dispatch(action, ...args),
    };

    const middlewareChain = middlewares.map((middleware) => middleware(midApi));

    const dispatchWithMiddleware = compose(...middlewareChain)(dispatch);

    return {
      ...store,
      dispatch: dispatchWithMiddleware,
    };
  };
}

export { createStore, applyMiddleware };
