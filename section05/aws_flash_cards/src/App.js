import React, { Component } from "react";
import "./App.css";
import QuizBar from "./components/QuizBar";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: ""
    };
  }

  render() {
    return (
      <div className="App">
        <h1>sanity checks</h1>
        <QuizBar />
      </div>
    );
  }
}

export default App;
