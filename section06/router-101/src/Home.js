// From App.js -> const Home = props => <h4>Home - {props.title}</h4>;

import React from "react";

function Home(props) {
  console.log(props);

  // Example 1
  // setTimeout(() => {
  // props.history.push("/help");
  // props.history.goBack();
  // }, 3000);

  // Example 2
  // props.history.block("Are you sure you want to leave?");

  return <h4>{props.title}</h4>;
}

export default Home;
