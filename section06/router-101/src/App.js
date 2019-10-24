import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./NavBar/NavBar";
import Home from "./Home";
import Help from "./Help";

// const Home = props => <h4>Home - {props.title}</h4>; // Moved to Home.js
// const Help = () => <h4>Help</h4>; // Moved to Help.js
const Host = () => <h4>Host</h4>;
const Login = () => <h4>Log In</h4>;
const Signup = () => <h4>Sign Up</h4>;

function App() {
  return (
    <Router>
      {/* <NavBar /> In order to get props - history, location , match, place below in a path '/' that does not have 'exact' property */}
      <Route path="/" component={NavBar} />
      <Route
        exact
        path="/"
        render={props => {
          return (
            <Home title="Hello" history={props.history} match={props.match} />
          );
        }}
      />
      <Route exact path="/host" component={Host} />
      <Route path="/help" component={Help} />{" "}
      {/* Remove 'exact' prop in order for nested routes to work properly. */}
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
    </Router>
  );
}

export default App;
