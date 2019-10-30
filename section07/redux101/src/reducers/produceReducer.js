const seedData = [
  { food: "lettuce", quantity: 14 },
  { food: "turnips", quantity: 11 },
  { food: "apples", quantity: 35 },
  { food: "cilantro", quantity: 135 }
];

export default (state = seedData, action) => {
  console.log("Produce reducer is running!");
  console.log(action);

  if (action.type === "updateProduce") {
    console.log("I care about this action in produceReducer!!");
    const newState = [...state];
    if (action.payload.operation === "+") {
      newState[action.payload.index].quantity++;
    } else if (action.payload.operation === "-") {
      newState[action.payload.index].quantity--;
    }
    return newState;
  } else {
    return state;
  }

  /* Confirms that a dispatched action is sent to 'all' reducers.
  if (action.type === "updateFrozen") {
    console.log("I care about this action inside produceReducer also!!");
    return state;
  } else {
    return state;
  }
  */
};

/*
  Reducer is just a function that returns state.

  It takes two parameters:
  1 Current state (usually provide default state)
  2 Action - this will be an object that has type property and any payload
*/

/*
  // Same as above
  function frozen(state=[], action){
    return state
  }
  export default frozen
*/
