import React from "react";
import { ProjectsList } from "./ProjectsList";
import { Typography } from "@mui/material";
import "./Projects.css";

function Projects() {
  return (
    <section className="projects">
      <div>
        <Typography variant="h3">Checkout my work</Typography>
        <ProjectsList />
      </div>
    </section>
  );
}
export { Projects };
