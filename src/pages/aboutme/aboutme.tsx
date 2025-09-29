import React from "react";
import aboutme from "./aboutme.md";
import Body from "../../components/body";

function AboutMe() {
  return (
    <div>
      <Body content={aboutme}></Body>
    </div>
  );
}

export default AboutMe;
