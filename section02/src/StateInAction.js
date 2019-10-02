/*
  Class component
  - Initialize state
  - Update state
  - Render state
  - Render props
  - Use of () => {} function to inherit 'this' from the containing object
*/
import React, { Component } from "react";

class StateInAction extends Component {
  constructor() {
    super();
    this.state = { text: "State In Action!", text2: "Another text" };

    // 'this' references the class object with arrow function
    setTimeout(() => {
      console.log(
        'Needs to be a ()=>{} and not function() which will create a new "this"',
        this
      );
      this.setState({
        text: "State CHANGED!!"
      });
    }, 5000);

    // 'this' References the Window object with regular function
    setTimeout(function() {
      console.log("here", this);
    }, 2000);
  }

  render() {
    return (
      <h1>
        {this.state.text} - {this.state.text2} - {this.props.name}
      </h1>
    );
  }
}

export default StateInAction;
