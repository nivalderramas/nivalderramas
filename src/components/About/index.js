import React from "react";
import { Box, Container, IconButton, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import "./About.css";
import { AlignHorizontalCenter } from "@mui/icons-material";

function About() {
  return (
    <section className="about">
      <Container>
        <Grid container spacing={0} className="centerText">
          <Grid md={6}>
            <Typography variant="h2">Who Am I?</Typography>
          </Grid>
          <Grid md={6}>
            <Typography variant="h5">
              I'm Nicolás Valderrama, a Systems Engineering student at the
              National University of Colombia and a self-taught software
              developer. I have a background in computer science, competitive
              programming, and online courses from Platzi. I deliver
              high-quality solutions with a focus on efficiency and scalability,
              using the latest technologies. In my free time, I stay physically
              and mentally fit through speed skating and calisthenics. I am
              always seeking new opportunities to grow and challenge myself, and
              I would be happy to hear from you.
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ display: "block", textAlign: "center", paddingTop: "2rem" }}>
          <a href="https://www.instagram.com/nivalderramas/">
            <InstagramIcon sx={{ fontSize: 70 }} />
          </a>
          <a href="https://www.github.com/nivalderramas/">
            <GitHubIcon sx={{ fontSize: 70 }} />
          </a>
          <a href="https://www.linkedin.com/in/nivalderramas/">
            <LinkedInIcon sx={{ fontSize: 70 }} />
          </a>
        </Box>
      </Container>
    </section>
  );
}
export { About };
