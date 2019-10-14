import React, { Component } from "react";
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { temperature: 20, scale: "C" };
  }

  handleChange(e, scale) {
    this.setState({ temperature: e.target.value, scale: scale });
  }

  render() {
    const temperature = this.state.temperature;
    const scale = this.state.scale;
    let fTemp;
    let cTemp;

    if (scale === "C") {
      // convert C to F
      fTemp = Math.round((temperature * 9) / 5 + 32);
      // we don't need to convert to C... it's already C
      cTemp = temperature;
    } else if (scale === "F") {
      // convert F to C
      cTemp = Math.round(((temperature - 32) * 5) / 9);
      fTemp = temperature;
    }

    return (
      <fieldset>
        <TemperatureInput
          temperature={fTemp}
          scale="F"
          handleChange={this.handleChange}
        />
        <TemperatureInput
          temperature={cTemp}
          scale="C"
          handleChange={this.handleChange}
        />
        {/* <input value={temperature} onChange={this.handleChange} /> */}

        {/* Already assumed it is C */}
        <BoilingVerdict celsius={parseFloat(cTemp)} />
      </fieldset>
    );
  }
}

export default Calculator;
