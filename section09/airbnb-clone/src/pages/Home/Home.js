import React, { Component } from "react";
import axios from "axios";
import "./Home.css";
import SearchBox from "./SearchBox";
import Spinner from "../../utility/Spinner/Spinner";
import Cities from "../../utility/City/Cities";

class Home extends Component {
  state = {
    cities: [],
    europeCities: {},
    asiaCities: {},
    exoticCities: {}
  };

  componentDidMount() {
    const citiesUrl = `${window.apiHost}/cities/recommended`;
    const europeCitiesUrl = `${window.apiHost}/cities/europe`;
    const asiaCitiesUrl = `${window.apiHost}/cities/asia`;
    const exoticCitiesUrl = `${window.apiHost}/cities/exotic`;

    const citiesPromises = [];

    // Issue all requests (will not wait for each to complete before issuing)
    citiesPromises.push(axios.get(citiesUrl));
    citiesPromises.push(axios.get(europeCitiesUrl));
    citiesPromises.push(axios.get(asiaCitiesUrl));
    citiesPromises.push(axios.get(exoticCitiesUrl));

    // Wait for all promises to complete
    // data is the resolved value of each request and remain in order regardless of when they actually finish
    Promise.all(citiesPromises).then(data => {
      console.log(data[0].data); // index 0 will always be data from recommended cities
      console.log(data[1].data); // index 1 will always be data from european cities
      console.log(data[2].data); // index 2 will always be data from asian cities
      console.log(data[3].data); // index 3 will always be data from exotic cities

      const recommendedCities = data[0].data;
      const europeCities = data[1].data;
      const asiaCities = data[2].data;
      const exoticCities = data[3].data;

      this.setState({
        cities: recommendedCities,
        europeCities,
        asiaCities,
        exoticCities
      });
    });
  }

  /* One approach for single async request is to issue the request and wait
    async componentDidMount() {
      const citiesUrl = `${window.apiHost}/cities/recommended`;
      console.log(citiesUrl);
      const recommendedCities = await axios.get(citiesUrl);
      // console.log(recommendedCities.data);

      this.setState({
        cities: recommendedCities.data
      });
    }
  */

  render() {
    // console.log(this.state.cities);

    if (this.state.cities.length === 0) {
      return <Spinner />;
    }

    return (
      <>
        <div className="container-fluid">
          <div className="row">
            <div className="home col s12">
              <div className="upper-fold">
                <SearchBox />
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid lower-fold">
          <div className="row">
            <div className="col s12">
              <Cities
                cities={this.state.cities}
                header="Recommended Cities For You"
              />
              <Cities
                cities={this.state.europeCities.cities}
                header={this.state.europeCities.header}
              />
              <Cities
                cities={this.state.asiaCities.cities}
                header={this.state.asiaCities.header}
              />
              <Cities
                cities={this.state.exoticCities.cities}
                header={this.state.exoticCities.header}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
