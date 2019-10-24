// From App.js -> const Help = () => <h4>Help</h4>;

import React from "react";
import { Route, Link } from "react-router-dom";

const HelpCustomer = () => <h4>Help Customer</h4>;
const HelpHost = () => <h4>Help Host</h4>;

function Help() {
  return (
    <div>
      <div>
        <Link to="/help/customer">I am a customer</Link> |{" "}
        <Link to="/help/host">I am a host</Link>
      </div>
      <p>An image goes here</p>
      <Route path="/help/customer" component={HelpCustomer} />
      <Route path="/help/host" component={HelpHost} />
      <h4>Footer for Help</h4>
    </div>
  );
}

export default Help;
