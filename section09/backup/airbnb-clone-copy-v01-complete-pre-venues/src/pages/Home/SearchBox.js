import React, { Component } from "react";
import "./SearchBox.css";

class SearchBox extends Component {
  state = {
    where: "",
    checkIn: "",
    checkOut: "",
    guests: 0
  };

  changeWhere = e => {
    this.setState({
      where: e.target.value
    });
  };

  changeCheckIn = e => {
    this.setState({
      checkIn: e.target.value
    });
  };

  changeCheckOut = e => {
    this.setState({
      checkOut: e.target.value
    });
  };

  changeGuests = e => {
    this.setState({
      guests: e.target.value
    });
  };

  render() {
    return (
      <div className="home-search-box col m4">
        <h1>Book unique places to stay and things to do.</h1>

        <form className="search-box-form">
          <div className="col m12">
            <div className="form-label">Where</div>
            <div className="input-field" id="where">
              <input
                type="text"
                placeholder="Anywhere"
                className="browser-default"
                onChange={this.changeWhere}
                value={this.state.where}
              />
            </div>
          </div>

          <div className="col m6">
            <div className="form-label">Check-In</div>
            <div className="input-field" id="check-in">
              <input
                type="date"
                placeholder="Anywhere"
                className="browser-default"
                onChange={this.changeCheckIn}
                value={this.state.checkIn}
              />
            </div>
          </div>

          <div className="col m6">
            <div className="form-label">Check-Out</div>
            <div className="input-field" id="check-out">
              <input
                type="date"
                placeholder="Anywhere"
                className="browser-default"
                onChange={this.changeCheckOut}
                value={this.state.checkOut}
              />
            </div>
          </div>

          <div className="col m12">
            <div className="form-label">Guests</div>
            <div className="input-field" id="guests">
              <input
                type="number"
                placeholder="Anywhere"
                className="browser-default"
                onChange={this.changeGuests}
                value={this.state.guests}
              />
            </div>
          </div>

          <div className="col m12 submit-btn">
            <div className="input-field" id="submit-btn">
              <input
                type="submit"
                className="btn-large waves-effect waves-light red accent-2"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBox;
