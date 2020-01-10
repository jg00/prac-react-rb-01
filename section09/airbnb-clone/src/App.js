import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import "./App.css";

import NavBar from "./utility/NavBar/NavBar";
import Home from "./pages/Home/Home";
// import Test from "./utility/Test/Test"; // Test link only

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" component={NavBar} />
        <Route exact path="/" component={Home} />

        {/* <Route path="/activity/:id" component={Test} /> */}
      </Router>
    );
  }
}

export default App;
