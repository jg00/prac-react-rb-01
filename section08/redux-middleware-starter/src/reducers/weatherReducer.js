export default (state = {}, action) => {
  console.log("weatherReducer.js", action.type); // We are logging this everytime a dispatch action is sent to 'all' reducers

  if (action.type === "cityUpdate") {
    console.log(action.payload);
    return action.payload;
  } else {
    return state;
  }
};
