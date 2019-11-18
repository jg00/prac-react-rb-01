/*
  Thunk is a function that wraps an expression to delay its execution.
  Redux-thunk - instead of return an action {type, payload}, with redux-thunk it allows us to return an action creator function.
  With Redux-thunk we get two arguments (dispatch, getState) functions.
  Inside of our thunk we have access to our entire store and dispatch.
*/

// Action creator
// Redux-thunk benefit is "it allow us to write action creators that return a function instead of an action".
// Also gets access to dispatch(), getState() as parameters.
export default () => {
  // Return function.  Also gets access to dispatch(), getState() as parameters.
  return (dispatch, getState) => {
    setTimeout(() => {
      // console.log("I waited for 2 seconds");

      // 1 Access to state
      const reduxState = getState();

      // Let's say there is a component that is 'dependent' on the user already having grabbed the weathe
      if (reduxState.weather.main) {
        // 2 Access to dispatch
        // This will wait two seconds before it is sent out to all of the reducers
        dispatch({
          type: "testThunk"
        });
        console.log("reduxState", reduxState);
      }
    }, 2000);
  };
};
