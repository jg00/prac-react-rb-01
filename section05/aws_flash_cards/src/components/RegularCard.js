import React from "react";

function RegularCard(props) {
  console.log("From RedularCard", props);
  const question = props.questionData;
  return (
    <div>
      <div>RegularCard (front)</div>
      <div className="card-back">{question.service}</div>

      <div className="card-front">
        <div>{question.desc}</div>
        <div>{question.cat}</div>
      </div>
    </div>
  );
}

export default RegularCard;
