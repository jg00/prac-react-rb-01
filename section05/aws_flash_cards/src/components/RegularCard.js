import React from "react";

function RegularCard(props) {
  return (
    <div>
      <div className="card-back">AWS Service</div>

      <div className="card-front">
        <div>Description</div>
        <div>Category</div>
      </div>
    </div>
  );
}

export default RegularCard;
