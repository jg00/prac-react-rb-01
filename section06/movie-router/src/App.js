import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

import Home from "./Home";
import About from "./About";

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>

        <Route exact path="/" component={Home} />

        <Route exact path="/about/:who" component={About} />
        {/* <Route exact path="/about/us" component={About} /> */}
        {/* <Route exact path="/about/company" component={About} /> */}
        {/* <Route exact path="/about/investors" component={About} /> */}
      </div>
    </Router>
  );
}

export default App;
