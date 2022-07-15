export default ({ dispatch, getState }) => {
  return (next) => (action) => {
    if (typeof action === "function") {
      return action(dispatch, getState);
    } else {
      return next(action);
    }
  };
};
