import React, { Component } from "react";

class Modal extends Component {
  componentDidMount() {
    console.log("Modal.js - componentDidMount running..");

    // You can just make this an attribute of the Modal object
    this.timer = setInterval(() => {
      console.log("test");
    }, 500);
  }

  componentWillUnmount() {
    console.log(
      "Component is about to be history... - Modal.js is about to be removed from App.js and then, App.js componentDidUpdate() will run"
    );

    clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        <div id="modal1" className="modal">
          <div className="modal-content">
            <h4>{this.props.weatherInfo.cityName}</h4>
            <p>
              High: {this.props.weatherInfo.high} - Low:{" "}
              {this.props.weatherInfo.low}
            </p>
            <p>
              {this.props.weatherInfo.weather}{" "}
              <img src={this.props.iconUrl} alt={this.props.weatherInfo.icon} />
            </p>
          </div>
          <div className="modal-footer">
            <a
              href="#!"
              className="modal-close waves-effect waves-green btn-flat"
            >
              Agree
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
