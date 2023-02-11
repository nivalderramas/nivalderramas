import React from "react";
import { Typography } from "@mui/material";
import "./WelcomeBanner.css";

function WelcomeBanner() {
  return (
    <div className="WelcomeBanner">
      <Typography variant="h1" className="mainTitle">
        Nicolás Valderrama
      </Typography>
      <Typography variant="h3">
        A Full-Stack Engineer and Competitive Programmer
      </Typography>
      <Typography variant="overline">
        Crafting high-quality solutions with a focus on efficiency and
        scalability
      </Typography>
    </div>
  );
}

export { WelcomeBanner };
