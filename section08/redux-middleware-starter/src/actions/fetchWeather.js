import axios from "axios";
const weatherApi = "http://api.openweathermap.org/data/2.5/weather";
const weatherAPIKey = "6f3f23c0f1a2fcb7edee25d08cb9cf62";
const scale = "imperial"; //metric

// This is our action creator that returns an action but we returned a promise to be dispatched when the async code is completed.
// Async/Await version
export default async city => {
  const weatherUrl = `${weatherApi}?q=${city}&units=${scale}&appid=${weatherAPIKey}`;
  const response = await axios.get(weatherUrl); // Note what is returned here is a promise (either "resolved"/"reject")

  // Because of await, anything below will wait for the response above.
  console.log("HERE", response);

  // -> Here we return the action but it also has a property of payload which is a promise.
  return {
    type: "cityUpdate",
    payload: response.data // response.data is a promise.  If 'resolved', the middleware 'redux-promise' will automatically fire the dispatch to the reducer (but will wait for the promise to resolve before it is dispatch). ( Important: response.data won't run until the .then runs.)
  };

  // Side note: with redux-thunk it allows you to return a function instead. return ()=>{}
};

/*
  redux-promise (middleware)
  If it receives a promise it will dispatch the resolved value of the promise, it will not dispatch anything if the promise rejects.
*/

/* 
  // Ref only - version not using Async/Await
  export default city => {
    const weatherUrl = `${weatherApi}?q=${city}&units=${scale}&appid=${weatherAPIKey}`;
    // console.log(city);
    // console.log(weatherUrl);

    // Can we run async/http request here in the action creator? NO.
    // -> What is happening is redux runs synchornously meaning
    // "it immediately sends the action to the dispatch and the dispatch immediately sends it to the reducer."
    // -> So we need to 'intercept' the process here via middleware
    // "and then dispatch the action when we are ready".
    // Our goal here is to be able to return our action {type, payload}
    // If you return a promise, 'redux-promise' will automatically call dispatch for "resolve" but will not for 'reject'.
    return axios
      .get(weatherUrl)
      .then(response => {
        console.log("HERE", response);
        return {
          type: "cityUpdate",
          payload: response.data
        };
      })
      .catch(err => {
        console.log(err);
      });
  };
 */
/* 
    Error for above axios call:
    Uncaught Error: Actions must be plain objects. Use custom middleware for async actions. 
*/

/* Ref original before axios call
export default city => {
  const weatherUrl = `${weatherApi}?q=${city}&units=${scale}&appid=${weatherAPIKey}`;
  console.log(city);
  console.log(weatherUrl);
  return {
    type: "cityUpdate",
    payload: {}
  };
};
*/
