import React, { Component } from "react";
import "./Activity.css";
import Activity from "./Activity";

class Activities extends Component {
  render() {
    /*
    Map through activities and build a list of <Activity> compnents
    and pass to <SlickSlider> as props
  */
    console.log(this.props.activities);

    const activities = this.props.activities.map((activity, i) => {
      // console.log(activity);
      return (
        <div className="col s2" key={i}>
          <Activity activity={activity} />
        </div>
      );
    });

    return (
      <div className="activities">
        <h1 className="main-header-text">{this.props.header}</h1>
        {activities}
      </div>
    );
  }
}

export default Activities;
