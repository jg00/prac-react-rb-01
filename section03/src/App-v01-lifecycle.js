/*
  File notes:
  01 App-v01-lifecycle.js
    - Rename to App.js to run
    - Kept for reference of lifecycle
*/

import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import config from "./config";

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
      isRaining: ""
    };

    /*
    // Materialize trigger modal - consturctor is not the proper place to initialize
    let elems = document.querySelectorAll(".modal");
    let instances = window.M.Modal.init(elems); // Materialize.Modal.Initialize(everything with a class of modal); Remember M exists but it is attached to the window object.
    */
  }

  // React will call componentDidMount() automatically after the first render()
  componentDidMount() {
    console.log("componentDidMount running..");
    this.getCityWeather("London");
    // const url = `https://api.openweathermap.org/data/2.5/weather?q=London&units=imperial&appid=${config.apiKey}`;

    // axios.get(url).then(resp => {
    //   // console.log(resp.data);

    //   this.setState({
    //     temp: resp.data.main.temp,
    //     high: resp.data.main.temp_max,
    //     low: resp.data.main.temp_min,
    //     weather: resp.data.weather[0].description,
    //     icon: resp.data.weather[0].icon,
    //     cityName: resp.data.name
    //   });
    // });

    // Materialize trigger modal - Propert lifecycle to initialize
    let elems = document.querySelectorAll(".modal");
    window.M.Modal.init(elems); // Materialize.Modal.Initialize(everything with a class of modal); Remember M exists but it is attached to the window object.
  }

  componentDidUpdate(prevProps, prevState, snapShot) {
    console.log("componentDidUpdate running..");
    // console.log(prevProps);
    // console.log(prevState);
    // console.log(snapShot);
    // console.log(this.state);

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
    // const city = document.querySelector("#city").value;
    // console.log(city);

    // const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${config.apiKey}`;

    // axios.get(url).then(resp => {
    //   // console.log(resp.data);

    //   this.setState({
    //     temp: resp.data.main.temp,
    //     high: resp.data.main.temp_max,
    //     low: resp.data.main.temp_min,
    //     weather: resp.data.weather[0].description,
    //     icon: resp.data.weather[0].icon,
    //     cityName: resp.data.name
    //   });
    // });
  };

  getCityWeather = city => {
    console.log(city);

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${config.apiKey}`;

    axios.get(url).then(resp => {
      // console.log(resp.data);

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

  render() {
    console.log("render running..");
    // console.log(this.state.temp);
    const iconUrl = `http://openweathermap.org/img/wn/${this.state.icon}@2x.png`;

    return (
      <div className="App">
        <div className="row">
          <div className="col s6 offset-s3">
            <h1>{this.state.temp}</h1>
            <h1>{this.state.isRaining}</h1>

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
        <div id="modal1" className="modal">
          <div className="modal-content">
            <h4>{this.state.cityName}</h4>
            <p>
              High: {this.state.high} - Low: {this.state.low}
            </p>
            <p>
              {this.state.weather} <img src={iconUrl} alt={this.state.icon} />
            </p>
          </div>
          <div className="modal-footer">
            <a
              href="#!"
              className="modal-close waves-effect waves-green btn-flat"
            >
              Agree
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
