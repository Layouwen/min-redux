function createStore (reducer) {
  let stateStore;
  let subscribeListens = [];

  const getState = () => {
    return stateStore;
  };

  const dispatch = (action) => {
    stateStore = reducer(stateStore, action);
    subscribeListens.forEach(listen => listen());
  };

  const subscribe = (listen) => {
    subscribeListens.push(listen);
    return () => {
      subscribeListens = subscribeListens.filter(l => l !== listen);
    };
  };

  dispatch({type: '@@redux/INIT'});

  return {
    getState,
    subscribe,
    dispatch,
  };
}

export {
  createStore,
};
