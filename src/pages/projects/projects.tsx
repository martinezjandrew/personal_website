import React, { useEffect, useState } from "react";

import { createClient } from "@supabase/supabase-js";
import { Database } from "../../database.types.ts";

const supabase = createClient<Database>(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY,
);

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

  constructor(
    title: string = "",
    description: string = "",
    stack: string[] = [],
    demo: string = "",
    source_code: string = "",
    integrated_apis: string[] = [],
  ) {
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
    getProjects();
  }, []);

  async function getProjects() {
    const holdProjects: ProjectClass[] = [];
    const { data } = await supabase.from("projects").select();
    if (data) {
      data.forEach((project) => {
        const projectInstance = new ProjectClass(
          project.title ?? "",
          project.description ?? "",
          project.stack ?? [],
          project.demo ?? "",
          project.source_code ?? "",
          project.integrated_apis ?? [],
        );
        holdProjects.push(projectInstance);
      });
    }
    setProjects(holdProjects);
  }

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
      {projects.map((project) => (
        <div className="md space-y-4 min-w-full">
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
