import React, { Component } from "react";
import { connect } from "react-redux";
import updateProduce from "../actions/produceInvUpdate";
import { bindActionCreators } from "redux";

class ProduceDept extends Component {
  increment = (operation, index) => {
    // console.log(operation, index);
    this.props.updateProduce(operation, index); // call the action creator that returns an action that is handed over to dispatch to notify the reducers
  };

  render() {
    // console.log(this.props.produceData);

    const produceInventory = this.props.produceData.map((item, i) => {
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
        <h1>Produce Dept</h1>
        <ul>{produceInventory}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    produceData: state.produce
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      updateProduce: updateProduce
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProduceDept);
