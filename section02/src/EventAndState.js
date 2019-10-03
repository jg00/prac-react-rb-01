import React, { Component } from "react";

class EventAndState extends Component {
  constructor() {
    super();

    this.state = {
      inputText: ""
    };

    // 1b The other way to handle 'this'
    // The bind() method creates a new function that, when called, has its this keyword set to the provided value,
    // What this says is for this method, we want to bind it's 'this' to point to the current object instance
    // of EventAndState.
    // this.handleChange = this.handleChange.bind(this)
  }

  handleClick = event => {
    console.log("test", this);
    this.setState({
      inputText: ""
    });
  };

  // 1a With arrow function 'this' is inherited from the class itself and
  // therefore we have access to this.state property instance.
  // With regular function() syntax, 'this' is refering to this particular
  // method ie handleChange(event) and not the class EventAndState
  // handleChange(event) {
  //   console.log(event.target);
  //   console.log(this); // undefined

  handleChange = event => {
    // console.log(event.target); // we get represntation of the tag <input type="text" placeholder="Enter some text!">
    // console.dir(event.target.value); // we get all properties of a specified JavaScript object.
    // console.log(this.state.inputText); // lags a step behind after setState() method is called.

    // 2a DO NOT UPDATE state directly
    // this.state.inputText = event.target.value

    // 2b Update the component's state using the Component's setState() method (.setState() method WILL ALSO CAUSE A RERENDER)
    this.setState({
      inputText: event.target.value
    });

    /*
      2c For times when you'll want to calculate state based the component’s previous state.
        - You cannot always trust this.state to hold the correct state immediately after calling setState(), as it is always equal to the state rendered on the screen.
        - setState() should be treated asynchronously — in other words, do not always expect that the state has changed after calling setState()
        - Below is example of calling a function that receives the prevState first and use that to update

        changeCount = () => {
          this.setState((prevState) => {
            return { count: prevState.count - 1}
          })
        }
    */
  };

  handleSubmit = event => {
    console.log("Form submitted", event);
    this.setState({
      inputText: "State is cool"
    });
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <h1>{this.state.inputText}</h1>
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

export default EventAndState;
