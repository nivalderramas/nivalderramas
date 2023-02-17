import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Divider } from "@mui/material";
import { WelcomeBanner } from "../WelcomeBanner";
import { PictureBanner } from "../PictureBanner";
import { NavBar } from "../NavBar";
import "./Home.css";

function Home() {
  return (
    <section className="homeElement">
      <Grid container spacing={0}>
        <Grid md={6}>
          <Grid md={12}>{/*<NavBar />*/}</Grid>
          <WelcomeBanner />
        </Grid>
        <Grid md={6}>
          <PictureBanner />
        </Grid>
      </Grid>
    </section>
  );
}

export { Home };
