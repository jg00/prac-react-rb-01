import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import { createStore } from "redux";

import rootReducer from "./reducers/rootReducer";

const theStore = createStore(rootReducer);

ReactDOM.render(
  <Provider store={theStore}>
    <App />
  </Provider>,

  document.getElementById("root")
);

/*
  1 In order to wire up a redux/react app, we need react-redux.
  We need the Provider React Component to be around everything!

  2 Provider component requires a redux store.  Create the redux store, so that
  redux exists, and the provider has a store!

  3 Now what makes the the redux store? The store is just the aggregate of the reducers.
  We have to have at least one reducer in order to have any store.
  We need reducers to populate the store.

  3a We always start with a rootReducer.  This will behave as a store manager that imports
  all other reducers.

  4 Make individual reducers to hand to the rootReducer. (ex: frozen.js is an individual reducer we created).

  5 Create the store by passing it the rootReducer (ex: const theStore = createStore(rootReducer)) which
  is made up of the reducers.

  6 Provider is the glue between react and redux.  Give it the store!
  <Provider store={theStore} <- Provider component takes the store prop and we provide theStore made up of combined reducers.
*/
