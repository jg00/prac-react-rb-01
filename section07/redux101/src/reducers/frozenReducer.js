const seedData = [
  { food: "TV dinners", quantity: 10 },
  { food: "Frozen Veggies", quantity: 21 },
  { food: "Frozen Pizza", quantity: 25 }
];

export default (state = seedData, action) => {
  console.log("Frozen Reducer is running!");
  console.log(action); // {type: in_the_background_redux_perfors_its_own_actions}

  if (action.type === "updateFrozen") {
    console.log("I care about this action in frozenReducer!!");

    // We dont want to mutate state directly
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

/*
  Note regarding dispatch and redux:
  Redux is already performing dispatching actions in the background.
  We just want to dispatch our own actions.
*/
