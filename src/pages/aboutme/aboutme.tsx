import React from "react";
import Markdown from "react-markdown";
import aboutme from "./aboutme.md";

function AboutMe() {
  return (
    <div>
      <Markdown>{aboutme}</Markdown>
    </div>
  );
}

export default AboutMe;
