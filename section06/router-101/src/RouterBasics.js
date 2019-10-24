import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;

function App() {
  return (
    <Router>
      <h1>Header</h1>
      {/* <div>We don't use a tags because that will take us away from the app</div> */}
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <h1>Footer</h1>
    </Router>
  );
}

export default App;
