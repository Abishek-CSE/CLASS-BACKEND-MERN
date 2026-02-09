import React from "react";

const Service = () => {
  return (
    <div>
      <h2>Service</h2>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <Service />
    </div>
  );
};

export default About;
export { Service };
