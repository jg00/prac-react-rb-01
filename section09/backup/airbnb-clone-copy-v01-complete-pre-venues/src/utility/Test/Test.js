import React, { Component } from "react";

class Test extends Component {
  render() {
    console.log(this.props.match.params.id);
    return (
      <>
        <h1>Test</h1>
      </>
    );
  }
}

export default Test;
