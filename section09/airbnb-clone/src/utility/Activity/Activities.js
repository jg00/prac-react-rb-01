import React, { Component } from "react";
import "./Activity.css";

class Activities extends Component {
  // CONTINUE HERE

  /*
    Map through activities and build a list of <Activity> compnents
    and pass to <SlickSlider> as props
  */

  render() {
    console.log(this.props.activities);
    return <h1>Activities</h1>;
  }
}

export default Activities;
