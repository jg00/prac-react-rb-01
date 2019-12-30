import React from "react";
import City from "./City";
import SlickSlider from "../Slider/Slider";

function Cities(props) {
  const cities = props.cities.map((city, i) => {
    return (
      <div className="col s3" key={i}>
        <City city={city} />
      </div>
    );
  });

  return <SlickSlider elements={cities} />;
  // return <SlickSlider>{cities}</SlickSlider>;
}

export default Cities;
