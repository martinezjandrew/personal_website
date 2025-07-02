import React, { useState } from "react";
import wego_yml from "./wego.yml";
import scriboai from "./scriboai.yml";

interface Project {
  title: string;
  description: string;
  stack: string[];
  integrated_apis: string[];
  demo: string;
  source: string;
}

class ProjectClass implements Project {
  title: string;
  description: string;
  stack: string[];
  demo: string;
  source: string;
  integrated_apis: string[];

  constructor(
    title: string = "",
    description: string = "",
    stack: string[] = [],
    demo: string = "",
    source: string = "",
    integrated_apis: string[] = [],
  ) {
    this.title = title;
    this.description = description;
    this.stack = stack.slice();
    this.demo = demo;
    this.source = source;
    this.integrated_apis = integrated_apis;
  }

  render() {
    const [visible, setVisibile] = useState(false);

    const onClick = () => {
      setVisibile(!visible);
    };

    return (
      <div className="md space-y-4 min-w-full">
        <div
          data-visible={visible}
          className="text-4xl font-cascadia-code cursor-pointer hover:text-5xl hover:duration-300 hover:ease-out duration-300 ease-in data-[visible=true]:text-5xl"
          onClick={onClick}
        >
          {this.title}
        </div>
        <div
          id={this.title}
          data-visible={visible}
          className="
          border-l-4 m-4 pl-4
          transition-[height] overflow-hidden transform h-0 duration-900 ease-in
          data-[visible=true]:h-76 data-[visible=true]:ease-out data-[visible=true]:duration-900 data-[visible=true]:overflow-scroll"
        >
          <div className="text-2xl font-cascadia-code">description</div>
          <p>{this.description}</p>
          <div className="grid grid-cols-2">
            <div>
              <div className="text-2xl font-cascadia-code">stack</div>
              <ul>
                {this.stack.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
            </div>
            <div>
              <div>
                <div className="text-2xl font-cascadia-code">apis</div>
                <div>{this.integrated_apis}</div>
              </div>
              <div className="text-2xl font-cascadia-code">links</div>
              <div>
                <a href={this.demo}>View the demo!</a>
              </div>
              <div>
                <a href={this.source}>View the source code!</a>
              </div>
            </div>
          </div>
        </div>
        {/* )} */}
      </div>
    );
  }
}

function Projects() {
  const object = new ProjectClass(
    wego_yml.title,
    wego_yml.description,
    wego_yml.stack,
    wego_yml.demo,
    wego_yml.sourcecode,
    wego_yml.integrated_apis,
  );
  return (
    <div className="md">
      <h1>Projects</h1>
      <p>
        This page contains a list of my most notable projects across my
        personal, professional, and school areas.
      </p>
      {object.render()}
    </div>
  );
}

export default Projects;
