import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxPromise from "redux-promise"; // The default export is a middleware 'function'.

import rootReducer from "./reducers/rootReducer";

const theStore = applyMiddleware(reduxPromise)(createStore)(rootReducer);

/* 
    const middlewareApplied = applyMiddleware(reduxPromise) // applyMiddleware takes an argument (reduxPromise) that returns a function 
    const storeWithMiddleWare = middlewareApplied(createStore) // returns a function that takes the next argument (createStore)
    const finalStore = storeWithMiddleWare(rootReducer) // returns the store
 */

ReactDOM.render(
  <Provider store={theStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
