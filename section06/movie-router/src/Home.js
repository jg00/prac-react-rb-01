import React, { Component } from "react";
import axios from "axios";
import config from "./config";
import urlEndPoints from "./urlEndPoints";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      movieList: []
    };
  }

  componentDidMount() {
    const nowPlayingUrl = `${urlEndPoints.nowPlayingUrl}?api_key=${config.api_key}`;
    axios(nowPlayingUrl).then(response => {
      this.setState({
        movieList: response.data.results // [{},{},..]
      });
    });
  }

  render() {
    console.log(this.state.movieList);

    // const movieList = this.state.movieList.map((movie, i) => {
    //   return <li key={i}>{movie.title}</li>;
    // });

    const imageUrl = urlEndPoints.imageUrl;
    const movieGrid = this.state.movieList.map((movie, index) => {
      return (
        <div className="col s3" key={index}>
          <img src={`${imageUrl}${movie.poster_path}`} alt="" />
        </div>
      );
    });

    return (
      <div className="row">
        <h1>Home</h1>
        {movieGrid}
      </div>
    );
  }
}

export default Home;
