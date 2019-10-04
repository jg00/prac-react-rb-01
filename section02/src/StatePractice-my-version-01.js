import React, { Component } from "react";

class StatePractice extends Component {
  constructor() {
    super();
    this.state = {
      message: "",
      imageWidth: ""
    };
  }

  focusHandler = () => {
    this.setState({
      message:
        "By entering data you agree to the site terms of service by filling out the form!"
    });
  };

  mouseEnterHandler = () => {
    this.setState({
      message: ""
    });
  };

  onLoadHandler = event => {
    // console.dir(event.target.width);
    if (event.target.width > 100) {
      console.log("Your image is big!");
    }
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Enter a message"
          onFocus={this.focusHandler}
        />
        <h3 onMouseEnter={this.mouseEnterHandler}>{this.state.message}</h3>
        <img
          src="https://picsum.photos/id/1006/700/200"
          alt="Random"
          onLoad={this.onLoadHandler}
        />
      </div>
    );
  }
}

export default StatePractice;
