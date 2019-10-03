import React, { Component } from "react";

class SimpleEvents extends Component {
  constructor() {
    super();

    this.state = {};
  }

  handleClick(event) {
    console.log("test", this);
  }

  handleChange = event => {
    console.log("User changed the input");
  };

  handleSubmit = event => {
    console.log("Form submitted", event);
    event.preventDefault();
  };

  render() {
    // 1 Will not work because button hasn't been added to the DOM yet.
    // document.querySelector(".btn").addEventListener("click", () => {
    //   console.log("clicked");
    // });

    // 2 DOM event objects are available but unlike native JavaScript,
    // in React, instead of invoking code ex:
    // onClick={console.log("Test")} is immediately evaluated,
    // we pass a callback function

    // 3 console.log(this); // 'this' references SimpleEvents {}

    // 4 Normally in our <form> we have an action and method.  But in
    // in this case we don't have one and we want to explicitly stop
    // the form from going forward.

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <button onClick={this.handleClick.bind(this)} className="btn">
            Click Me!
          </button>

          <input
            onChange={this.handleChange}
            type="text"
            placeholder="Enter some text!"
          />
        </form>
      </div>
    );
  }
}

export default SimpleEvents;
