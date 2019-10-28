import React, { Component } from "react";
import axios from "axios";

import config from "./config";
import urlEndPoints from "./urlEndPoints";

class Movie extends Component {
  constructor() {
    super();
    this.state = {
      movie: {}
    };
  }

  componentDidMount() {
    // console.log('Movie.js_componentDidMount()', this.props.match.params.movieId);
    const movieId = this.props.match.params.movieId;
    const singleMovieUrl = `${urlEndPoints.singleMovieUrl}${movieId}?api_key=${config.api_key}`;
    axios.get(singleMovieUrl).then(response => {
      console.log("Movie.js_componentDidMount()_response", response.data);
      this.setState({
        movie: response.data
      });
    });
  }

  render() {
    // console.log("Movie.js_render()", this.props.match);

    // Cut off render if no data yet.  Spinner can be added here.
    if (this.state.movie.title === undefined) {
      return <h1>Loading...</h1>;
    }

    const movie = this.state.movie;
    const imageUrl = `${urlEndPoints.imageUrl}${movie.poster_path}`;
    return (
      <div>
        <img src={imageUrl} alt="" />
        <p>{movie.title}</p>
        <p>Budget: {movie.budget}</p>
        <p>Tagline: {movie.tagline}</p>
        <p>Overview: {movie.overview}</p>
      </div>
    );
  }
}

export default Movie;
