import React, { Component } from "react";
import { connect } from "react-redux";

class ProduceDept extends Component {
  render() {
    // console.log(this.props.produceData);

    const produceInventory = this.props.produceData.map((item, i) => {
      return (
        <li key={i}>
          {item.food}: {item.quantity}
        </li>
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

export default connect(mapStateToProps)(ProduceDept);
