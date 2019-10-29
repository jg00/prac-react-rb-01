import React, { Component } from "react";
import { connect } from "react-redux";

class MeatDept extends Component {
  render() {
    const meatInventory = this.props.meatData.map((item, i) => {
      return (
        <li key={i}>
          {item.food}: {item.quantity}
        </li>
      );
    });

    return (
      <div>
        <h1>Meat Department</h1>
        <ul>{meatInventory}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    meatData: state.meat
  };
}

export default connect(mapStateToProps)(MeatDept);
