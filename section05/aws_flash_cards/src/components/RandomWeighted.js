import React from "react";

function RandomWeighted(props) {
  console.log("From RandomWeighted", props);
  const question = props.questionData;
  return (
    <div>
      <div>RandomWeighted (front)</div>
      <div className="card-back">
        <div>{question.service}</div>
        <div className="commonality">{question.common}</div>
      </div>
      <div className="card-front">
        <div>{question.cat}</div>
      </div>
    </div>
  );
}

export default RandomWeighted;
