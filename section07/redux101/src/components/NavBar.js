import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/frozen-dept">Frozen Dept</Link>
        </li>
        <li>
          <Link to="/meat-dept">Meat Dept</Link>
        </li>
        <li>
          <Link to="/produce-dept">Produce Dept</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;

// continue here 330
