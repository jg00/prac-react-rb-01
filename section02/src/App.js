import React from "react";
import "./App.css";
// import StateInAction from "./StateInAction";
// import SimpleEvents from "./SimpleEvents";
// import EventAndState from "./EventAndState";
// import StatePractice from "./StatePractice-my-version-01";
import CardSet from "./CardSet";
import cards from "./cards"; // Different from before where we use <Script> tabs which added it to the global scope

console.log(cards);

/*
  1 Why would we import cards here and then pass it down to CardSet.js
    instead of importing directly inside of CardSet.js?
  a. Component reusability
  b. Another reason to pass is because 'props' are immutable so CardSet.js
     does not have to manage that state.  It is responsibility of calling code.
*/

function App() {
  return (
    <div className="App">
      {/* <StateInAction name="Rob" /> */}
      {/* <SimpleEvents /> */}
      {/* <EventAndState /> */}
      {/* <StatePractice /> */}
      <div className="row">
        <CardSet cards={cards} />
      </div>
    </div>
  );
}

export default App;
