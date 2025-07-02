import React from "react";
import Markdown from "react-markdown";
import aboutme from "./aboutme.md";

function AboutMe() {
  const title = "About Me";
  return (
    <div className="md">
      <h1>{title}</h1>
      <Markdown>{aboutme}</Markdown>
    </div>
  );
}

export default AboutMe;
