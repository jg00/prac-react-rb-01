const seedData = [
  { food: "TV dinners", quantity: 10 },
  { food: "Frozen Veggies", quantity: 21 },
  { food: "Frozen Pizza", quantity: 25 }
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
