import React, { Component } from "react";
import { connect } from "react-redux";
import updateFrozen from "../actions/frozenInvUpdate";
import { bindActionCreators } from "redux";

class FrozenDept extends Component {
  increment = (operation, index) => {
    // console.log(operation, index);
    this.props.updateFrozen(operation, index); // we want to connect this to the dispatch so that it will go to every single reducer
  };

  render() {
    // console.log(this.props.frozenData);
    // console.log(this.props.meatData);

    const frozenInventory = this.props.frozenData.map((item, i) => {
      return (
        <div key={i}>
          <li>
            {item.food}: {item.quantity}
          </li>
          <input
            type="button"
            onClick={() => this.increment("+", i)}
            value="+"
          />
          <input
            type="button"
            onClick={() => this.increment("-", i)}
            value="-"
          />
        </div>
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
  };
}

function mapDispatchToProps(dispatch) {
  // this function returns "bindActionCreators"
  // and we hand "bindActionCreators" an object:
  // each property will be a local prop
  // each value will be a function that is dispatch when run.
  // 2nd arg for bindActionCreators is the dispatch

  return bindActionCreators(
    {
      updateFrozen: updateFrozen
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FrozenDept);

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


  6 function mapDispatchToProps()
  - is how we tie our component to the dispatch
  - it takes one arg which is the 'dispatch' function

  (important) Remember that in the background
  - redux is already sending it's own actions to dispatch.
  - we just wnat to tie our own actions tot he same dispatch.
*/
