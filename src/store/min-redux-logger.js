export default ({ getState }) => {
  return (next) => (action) => {
    console.log("----------------------");
    console.log("old value", getState());
    console.log("action", action);
    const returnValue = next(action);
    console.log("new value", getState());
    console.log("----------------------");
    return returnValue;
  };
};
