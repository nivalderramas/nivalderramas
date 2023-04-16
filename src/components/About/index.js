import React from "react";
import { Container, Divider, Grid, Typography } from "@mui/material";
import Image from "mui-image";
import "./About.css";

function About() {
  return (
    <>
      <section className="about">
        <Divider />
        <div className="sectionTitle">About</div>
        <Container>
          <Grid container spacing={10} alignItems="center">
            <Grid
              item
              md={6}
              display="flex"
              justifyContent="center"
              order={{ xs: 2, md: 1 }}
            >
              <Image
                src="/nivalderramas/img/competitivePhoto.jpg"
                height="60%"
                width="60%"
                fit="contain"
                duration={300}
                easing="cubic-bezier(0.7, 0, 0.6, 1)"
                showLoading={false}
                errorIcon={true}
                shift={"right"}
                distance="100px"
                shiftDuration={900}
                bgColor="inherit"
                sx={{ borderRadius: "0.9%" }}
              />
            </Grid>
            <Grid
              item
              md={6}
              order={{ xs: 1, md: 2 }}
              sx={{ textAlign: "justify" }}
            >
              <Typography variant="h5">
                I'm Nicolás Valderrama, a Systems Engineering student at the
                National University of Colombia and a self-taught software
                developer. I have a background in computer science, competitive
                programming, and online courses from Platzi. I deliver
                high-quality solutions with a focus on efficiency and
                scalability, using the latest technologies. In my free time, I
                stay physically and mentally fit through speed skating and
                calisthenics. I am always seeking new opportunities to grow and
                challenge myself, and I would be happy to hear from you.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
}
export { About };
