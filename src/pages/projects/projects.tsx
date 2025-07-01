import React from "react";
import Body from "../../components/body.tsx";
import Markdown from "react-markdown";
import wego from "./wego.md";
import wego_yml from "./wego.yml";

interface Project {
  title: string;
  description: string;
  stack: string[];
  demo: string;
  source: string;
}

class ProjectClass implements Project {
  title: string;
  description: string;
  stack: string[];
  demo: string;
  source: string;

  constructor(
    title: string,
    description: string,
    stack: string[],
    demo: string,
    source: string,
  ) {
    this.title = title;
    this.description = description;
    this.stack = stack.slice();
    this.demo = demo;
    this.source = source;
  }

  render() {
    return (
      <div>
        <div className="text-4xl font-cascadia-code">{this.title}</div>
        <p>{this.description}</p>
        <ul>
          {this.stack.map((tool) => (
            <li>{tool}</li>
          ))}
        </ul>
        <a href={this.demo}>View the demo!</a>
        <a href={this.source}>View the source code!</a>
      </div>
    );
  }
}

function Projects() {
  const title = "Projects";
  const body = "# Hello everyone Testing this out";

  console.log(wego_yml);

  const object = new ProjectClass(
    wego_yml.title,
    wego_yml.description,
    wego_yml.stack,
    wego_yml.demo,
    wego_yml.sourcecode,
  );

  // return <Body title={title} body={body} />;
  // return <Markdown>{wego}</Markdown>;
  // return (
  //   <div className="md">
  //     <Markdown>{wego}</Markdown>
  //   </div>
  // );
  return <div>{object.render()}</div>;
}

export default Projects;
