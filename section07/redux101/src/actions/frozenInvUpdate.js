export default (operation, index) => {
  console.log(operation, index);
  return {
    type: "updateFrozen",
    payload: { operation, index }
  };
};

/*
  This file is an action creator!
  This is just a function.
  Action creators return actions.
  Action is an object that has at LEAST a property of type
  This action creator is going to handed to the dispatch
*/
