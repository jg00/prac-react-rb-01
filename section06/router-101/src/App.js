import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./NavBar/NavBar";

const Home = () => <h4>Home</h4>;
const Host = () => <h4>Host</h4>;
const Help = () => <h4>Help</h4>;
const Login = () => <h4>Log In</h4>;
const Signup = () => <h4>Sign Up</h4>;

function App() {
  return (
    <Router>
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route path="/host" component={Host} />
      <Route path="/help" component={Help} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
    </Router>
  );
}

export default App;
