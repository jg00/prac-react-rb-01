import React, { Component } from "react";
import { connect } from "react-redux";

class FrozenDept extends Component {
  render() {
    // console.log(this.props.frozenData);
    // console.log(this.props.meatData);

    const frozenInventory = this.props.frozenData.map((item, i) => {
      return (
        <li key={i}>
          {item.food}: {item.quantity}
        </li>
      );
    });

    return (
      <div>
        <h1>The frozen food department!</h1>
        <ul>{frozenInventory}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    frozenData: state.frozen
    // meatData: state.meat
  };
}

export default connect(mapStateToProps)(FrozenDept);

/* 
  1 Connect this component to redux
  We want this component to know about redux.
  To do that, we need some help or some glue.
  The glue is react-redux. We need the connect() function.


  2 Reference - idea behind connect()(FrozenDept)

  function x(n) {
    return m => {
      console.log(n + m);
      return j => {
        console.log(n + m + j);
      };
    };
  }

  x(1)(2)(3);


  3 connect() function should return a function which will take the class component as an argument
  console.log(connect);
  connect(mapStateToProps, mapDispatchToProps, mergeProps, _ref2) {..}


  4 connect takes two arguments:
    a First one is a function that is going to map a piece of redux state
    to this components props.

  
  5 function mapStateToProps(state)
  - mapStateToProps takes one arg "state" and that is the rootReducer/Store
  - returns an object {key:value} where 
    key - is the local prop name to this component
    value - is the piece of the redux store we want accessible as props to this component

*/
