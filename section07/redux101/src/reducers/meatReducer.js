const seedData = [
  { food: "checken breast", quantity: 14 },
  { food: "bacon", quantity: 11 },
  { food: "mahi mahi", quantity: 35 },
  { food: "salmon", quantity: 135 }
];

export default (state = seedData, action) => {
  return state;
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
