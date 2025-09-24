import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import Header from "./components/header.tsx";
import Footer from "./components/footer.tsx";
import Status from "./components/status.tsx";
import Navigation from "./components/navigation.tsx";
import { PageClass } from "./components/navigation.tsx";
import Home from "./pages/home.tsx";
import Projects from "./pages/projects/projects.tsx";
import AboutMe from "./pages/aboutme/aboutme.tsx";
import Resume from "./pages/aboutme/resume.tsx";
import "./style.css";
import Blog from "./pages/blog/blog.tsx";
import BlogPost from "./pages/blog/BlogPost.tsx";
import Changelog from "./pages/log/changelog.tsx";
import Log from "./pages/log/log.tsx";

const home = new PageClass("Home", "/");
const projects = new PageClass("Projects", "/projects");
const resume = new PageClass("Resume", "/resume");
const aboutme = new PageClass("AboutMe", "/about-me", [resume]);
const blog = new PageClass("Blog", "/blog");
const changelog = new PageClass("Changelog", "/changelog");
const log = new PageClass("Log", "/log", [changelog]);
const navigation = new PageClass("Navigation", "/navigvation", [
  home,
  aboutme,
  projects,
  blog,
  log,
]);

export function App() {
  return (
    <HashRouter>
      {" "}
      <div
        className="
      pt-10 
      w-screen h-screen
      flex
      justify-center
      bg-[url(/bg-tile.png)] bg-center bg-repeat-round
      font-display
      "
      >
        <div
          className="
        grid grid-flow-row auto-rows-max gap-4
        max-w-5/6 min-w-2/3
       "
        >
          <div
            className="
          pt-8 
          flex justify-center
        "
          >
            <Header />
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div className="max-w-xs hidden sm:flex flex flex-col">
              <Navigation page={navigation} />
            </div>
            <div className="max-w-5xl col-span-4 sm:col-span-2 flex justify-center bg-floral-white border-taupe-gray border-8 text-taupe-gray border-double">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/about-me" element={<AboutMe />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/log" element={<Log />} />
                <Route path="/changelog" element={<Changelog />} />
              </Routes>
            </div>
            <div className="max-w-xs hidden sm:flex flex flex-col">
              <Status />
            </div>
          </div>
          <div className="flex justify-center">
            <Footer />
          </div>
        </div>
      </div>
    </HashRouter>
  );
}
