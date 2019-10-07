import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import config from "./config";

class App extends Component {
  constructor() {
    super();

    this.state = {
      temp: ""
    };
  }

  // React will call componentDidMount() automatically after the first render()
  componentDidMount() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=London&units=imperial&appid=${config.apiKey}`;

    axios.get(url).then(resp => {
      console.log(resp.data);
      this.setState({ temp: resp.data.main.temp });
    });
  }

  render() {
    console.log(this.state.temp);
    return (
      <div className="App">
        <h1>{this.state.temp}</h1>
      </div>
    );
  }
}

export default App;
