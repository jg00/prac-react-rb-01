import React, { Component } from "react";
import { connect } from "react-redux";
import clearInventory from "../actions/clearInventory";
import { bindActionCreators } from "redux";

class Main extends Component {
  /* 
    Using a function to call the dispatch gives your more flexiblity prior to dispatch
    Here you could add a Modal that could confirm if you really want to clear inventory.
  */
  // Commented for now.  Reference only.
  // clearInventoryAction = () => {
  //   this.props.clearInventory();
  // };

  render() {
    // console.log(this.props.frozenData); // {food:"TV Dinners", quantity:10}

    const fronzenQuantity = this.props.frozenData.reduce(
      (accumulator, frozenItem) => accumulator + frozenItem.quantity,
      0
    );
    const meatQuantity = this.props.meatData.reduce(
      (accumulator, meatItem) => accumulator + meatItem.quantity,
      0
    );
    const produceQuantity = this.props.produceData.reduce(
      (accumulator, produceItem) => accumulator + produceItem.quantity,
      0
    );

    return (
      <div>
        <h2>FrozenDept: {fronzenQuantity}</h2>
        <h2>MeatDept: {meatQuantity}</h2>
        <h2>ProduceDept: {produceQuantity}</h2>

        {/* Will also work calling dispatch directly or create function to do more stuff */}
        <button onClick={this.props.clearInventory}>Clear All Inventory</button>
        {/* <button onClick={this.clearInventoryAction}>Clear All Inventory</button> */}
      </div>
    );
  }
}

// Pass mapStateToProps(state), mapDispatchToProps(dispatch) to connect()
// state.frozen, state.meat, state.produce are all coming from the rootReducer properties
function mapStateToProps(state) {
  return {
    frozenData: state.frozen,
    meatData: state.meat,
    produceData: state.produce
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      clearInventory: clearInventory
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);

/*
  In this component we want to render all the data that exists.
  Instead of having to pass state up to App from each of the child components like FrozenDept
  we can now access the redux state.
*/
