import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import config from "./config";

import Headers from "./Headers";
import Modal from "./Modal";

class App extends Component {
  constructor() {
    console.log("constructor running..");
    super();

    this.state = {
      temp: "",
      cityName: "",
      weather: "",
      high: "",
      low: "",
      icon: "",
      isRaining: "",
      showModal: true
    };
  }

  // React will call componentDidMount() automatically after the first render()
  componentDidMount() {
    console.log("componentDidMount running..");
    this.getCityWeather("London");

    // Materialize trigger modal - Propert lifecycle to initialize
    let elems = document.querySelectorAll(".modal");
    window.M.Modal.init(elems); // Materialize.Modal.Initialize(everything with a class of modal); Remember M exists but it is attached to the window object.
  }

  componentDidUpdate(prevProps, prevState, snapShot) {
    console.log("App.js componentDidUpdate running..");

    if (this.state.weather !== prevState.weather) {
      const isRaining = this.state.weather.includes("rain");
      console.log(isRaining);
      if (isRaining) {
        this.setState({ isRaining: "Rain rain go away" });
      } else {
        this.setState({ isRaining: "" });
      }
    }
  }

  searchCity = e => {
    e.preventDefault();

    const city = document.querySelector("#city").value;
    this.getCityWeather(city);
  };

  getCityWeather = city => {
    console.log(city);

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${config.apiKey}`;

    axios.get(url).then(resp => {
      this.setState({
        temp: resp.data.main.temp,
        high: resp.data.main.temp_max,
        low: resp.data.main.temp_min,
        weather: resp.data.weather[0].description,
        icon: resp.data.weather[0].icon,
        cityName: resp.data.name
      });
    });
  };

  removeModal = e => {
    this.setState({
      showModal: false
    });
  };

  render() {
    console.log("render running..");
    const iconUrl = `http://openweathermap.org/img/wn/${this.state.icon}@2x.png`;

    return (
      <div className="App">
        <div className="row">
          <div className="col s6 offset-s3">
            <button onClick={this.removeModal} className="btn">
              Remove from DOM
            </button>

            <Headers weatherInfo={this.state} />

            {/* <!-- Modal Trigger --> */}
            <a
              className="waves-effect waves-light btn modal-trigger"
              href="#modal1"
            >
              Details
            </a>

            <form onSubmit={this.searchCity}>
              <input type="text" id="city" placeholder="Enter City" />
            </form>
          </div>
        </div>

        {/* <!-- Modal Structure --> */}
        {this.state.showModal ? (
          <Modal iconUrl={iconUrl} weatherInfo={this.state} />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default App;
