import React from "react";

function Card(props) {
  return (
    <div className="card hoverable small" onClick={props.cl}>
      <div className="card-image">
        <img src={props.card.image} alt="card" />
      </div>
      <div className="card-content">
        <p>{props.card.course}</p>
        <p>{props.card.instructor}</p>
      </div>
      <div className="card-action">
        {/* <a href="#">$9.99</a> */}
        <span>$9.99</span>
      </div>
    </div>
  );
}

export default Card;
