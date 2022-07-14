import { createStore } from './min-redux';

const countReducer = (state = 0, action) => {
  switch (action.type) {
    case 'ADD':
      return state + 1;
    case 'SUB':
      return state - 1;
    default:
      return state;
  }
};

const reduxStore = createStore(countReducer);

export default reduxStore;
