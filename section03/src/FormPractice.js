import React, { Component } from "react";

class FormPractice extends Component {
  constructor() {
    super();
    this.state = {
      name: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log("Form submitted");
    // console.log(e.target.value); // You could traverse the DOM but as another way to fetch the value
    const name = document.getElementById("name").value; // This would work directly from the DOM but the state of our component is not being handled by React.
    console.log(name);
    console.log(this.state.name); // We want to get the name from react state and not directly from the DOM.  Advantage is we don't need to get the value from the DOM.
  };

  changeName = e => {
    console.log(e.target.value);
    this.setState({
      name: e.target.value
    });
  };

  render() {
    return (
      <div className="Container">
        <div className="row">
          <div className="col s6 offset-sm-3">
            <form onSubmit={this.handleSubmit}>
              <input
                value={this.state.name}
                onChange={this.changeName}
                type="text"
                id="name"
                placeholder="Enter name"
              />
              <input type="submit" value="submit" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default FormPractice;

/*
  Ref Reactjs.org forms
  HTML form elements work a little bit differently from other DOM elements in React,
  because form elements naturally keep some internal state.

  However this is bad because in React we want to control state in the state property and updated
  only with setState().

  In React, we want to get the value via the component's state.  To do that, 
  1 control the value of our input box by setting it's value to our component's state.  
    <input value="this.state.name" />
  2 onChange event to properly set the component's state 
*/
