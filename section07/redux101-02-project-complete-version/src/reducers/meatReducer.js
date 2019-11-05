const seedData = [
  { food: "checken breast", quantity: 14 },
  { food: "bacon", quantity: 11 },
  { food: "mahi mahi", quantity: 35 },
  { food: "salmon", quantity: 135 }
];

export default (state = seedData, action) => {
  console.log("Meat reducer is running!");
  console.log(action);

  if (action.type === "updateMeat") {
    console.log("I care about this action in meatReducer!!");
    let newState = [...state];
    if (action.payload.operation === "+") {
      newState[action.payload.index].quantity++;
    } else if (action.payload.operation === "-") {
      newState[action.payload.index].quantity--;
    }
    return newState;
  } else if (action.type === "clearInventory") {
    let newState = [...state];
    newState.forEach((item, i) => (item.quantity = 0));
    return newState;
  } else {
    return state;
  }
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
