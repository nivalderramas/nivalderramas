import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { WelcomeBanner } from "../WelcomeBanner";
import { PictureBanner } from "../PictureBanner";
import { NavBar } from "../NavBar";
import "./Home.css";
import { color } from "@mui/system";

function Home() {
  return (
    <section>
      <Grid container spacing={0} className="homeElement">
        <Grid md={6}>
          <Grid md={12}>
            <NavBar />
          </Grid>
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
