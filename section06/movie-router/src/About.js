import React from "react";

function About(props) {
  console.log("About", props);
  return (
    <div>
      <h1>About</h1>
    </div>
  );
}

export default About;

/*
  path="about/:who"
  http://localhost:3000/about/us

  props.match.params  > {who:"us"}
  props.match.path    > /about/:who
  props.match.url     > /about/us
*/
