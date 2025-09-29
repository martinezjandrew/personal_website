import React, { useEffect, useState } from "react";
import projectsData from "./projects.yml";

interface Project {
  title: string;
  description: string;
  stack: string[];
  integrated_apis: string[];
  demo: string;
  source_code: string;
}

class ProjectClass implements Project {
  title: string;
  description: string;
  stack: string[];
  demo: string;
  source_code: string;
  integrated_apis: string[];

  constructor({
    title = "",
    description = "",
    stack = [],
    demo = "",
    source_code = "",
    integrated_apis = [],
  }: Partial<Project>) {
    this.title = title;
    this.description = description;
    this.stack = stack.slice();
    this.demo = demo;
    this.source_code = source_code;
    this.integrated_apis = integrated_apis;
  }
}

function Projects() {
  const [projects, setProjects] = useState<ProjectClass[]>([]);

  useEffect(() => {
    const holdProjects = (projectsData as Project[]).map(
      (proj) => new ProjectClass(proj),
    );
    setProjects(holdProjects);
  }, []);

  function toggleVisibility(title: string) {
    const projectBodyId = document.getElementById(title.concat("- body"));
    const projectHeaderId = document.getElementById(title.concat("- header"));
    const visible2 = projectBodyId?.dataset.visible == "true";
    if (projectBodyId && projectHeaderId) {
      projectBodyId.setAttribute("data-visible", `${!visible2}`);
      projectHeaderId.setAttribute("data-visible", `${!visible2}`);
    }
  }

  return (
    <div className="md">
      <h1>Projects</h1>
      <p>
        This page contains a list of my most notable projects across my
        personal, professional, and school areas.
      </p>
      <i>Click on any project title to learn more.</i>
      {projects.map((project) => (
        <div key={project.title} className="md space-y-4 min-w-full">
          <div
            id={project.title.concat("- header")}
            data-visible={false}
            className="text-4xl font-cascadia-code cursor-pointer hover:text-5xl hover:duration-300 hover:ease-out duration-300 ease-in data-[visible=true]:text-5xl"
            onClick={() => {
              toggleVisibility(project.title);
            }}
          >
            {project.title}
          </div>
          <div
            id={project.title.concat("- body")}
            data-visible={false}
            className="
          border-l-4 m-4 pl-4
          transition-[height] overflow-hidden transform h-0 duration-900 ease-in
          data-[visible=true]:h-76 data-[visible=true]:ease-out data-[visible=true]:duration-900 data-[visible=true]:overflow-scroll"
          >
            <div className="text-2xl font-cascadia-code">description</div>
            <p>{project.description}</p>
            <div className="grid grid-cols-2">
              <div>
                <div className="text-2xl font-cascadia-code">stack</div>
                <ul>
                  {project.stack.map((tool) => (
                    <li key={tool}>{tool}</li>
                  ))}
                </ul>
              </div>
              <div>
                <div>
                  <div className="text-2xl font-cascadia-code">apis</div>
                  <div>{project.integrated_apis}</div>
                </div>
                <div className="text-2xl font-cascadia-code">links</div>
                <div>
                  <a href={project.demo}>View the demo!</a>
                </div>
                <div>
                  <a href={project.source_code}>View the source code!</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
