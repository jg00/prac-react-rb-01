import React from "react";

function Headers(props) {
  const { temp, isRaining } = props.weatherInfo;
  return (
    <div>
      <h1>{temp}</h1>
      <h1>{isRaining}</h1>
    </div>
  );
}

export default Headers;
