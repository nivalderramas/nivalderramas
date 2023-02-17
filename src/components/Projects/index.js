import React from "react";
import { ProjectsList } from "./ProjectsList";
import { Typography } from "@mui/material";
import "./Projects.css";

function Projects() {
  return (
    <section className="projects">
      <div className="workSectionTitle">Projects</div>
      <div>
        <ProjectsList />
      </div>
    </section>
  );
}
export { Projects };
