import React from "react";
import { Container, Typography } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import "./Experience.css";

function Experience() {
  return (
    <>
      <section className="experience">
        <Container>
          <div className="experienceSectionTitle">Work</div>
          <Timeline position="alternate">
            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent></TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                Software Engineer - Premio medio ambiente Caracol Televisión
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                FrontEnd Developer - Horus National University of Colombia
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Container>
      </section>
    </>
  );
}
export { Experience };
