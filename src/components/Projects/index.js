import React from "react";
import { ProjectsList } from "./ProjectsList";
import "./Projects.css";

function Projects() {
  return (
    <section className="projects" style={{ maxWidth: "100%" }}>
      <div className="sectionTitle">Projects</div>
      <div>
        <ProjectsList />
      </div>
    </section>
  );
}
export { Projects };
