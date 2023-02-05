import React from "react";
import { ProjectsList } from "./ProjectsList";
import { Typography } from "@mui/material";
import "./Projects.css";

function Projects() {
  return (
    <section className="projects">
      <Typography variant="h3">Checkout my work</Typography>
      <ProjectsList />
    </section>
  );
}
export { Projects };
