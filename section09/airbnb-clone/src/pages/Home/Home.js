import React, { Component } from "react";
import axios from "axios";
import "./Home.css";
import SearchBox from "./SearchBox";
import Spinner from "../../utility/Spinner/Spinner";

class Home extends Component {
  state = {
    cities: []
  };

  async componentDidMount() {
    const citiesUrl = `${window.apiHost}/cities/recommended`;
    console.log(citiesUrl);
    const recommendedCities = await axios.get(citiesUrl);
    // console.log(recommendedCities.data);

    this.setState({
      cities: recommendedCities.data
    });
  }

  render() {
    console.log(this.state.cities);

    if (this.state.cities.length === 0) {
      return <Spinner />;
    }

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="home col s12">
            <div className="upper-fold">
              <SearchBox />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
