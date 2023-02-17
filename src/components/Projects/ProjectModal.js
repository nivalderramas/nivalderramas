import React from "react";
import { Chip, Button, Modal, Box, Typography, Grid } from "@mui/material";
import Image from "mui-image";

function ProjectModal({ selectedProject, setSelectedProject, itemData }) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "50%",
    height: "50vh",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 0,
  };
  const data = itemData.filter(
    (project) => project.title === selectedProject
  )[0];
  return (
    <Modal
      open={selectedProject !== ""}
      onClose={() => setSelectedProject("")}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Grid
          container
          spacing={0}
          sx={{ p: 5, height: "100%", maxHeight: "100%" }}
        >
          <Grid xs={6} sx={{ position: "relative", maxHeight: "100%" }}>
            <Typography gutterBottom variant="h5" component="div">
              {data.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {data.description}
            </Typography>
            {data.url && (
              <Button
                variant="text"
                href={data.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Check it out
              </Button>
            )}
            {data.github && (
              <Button
                variant="text"
                href={data.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                Repository
              </Button>
            )}
            <div className="bottomDiv">
              {data.tags.map((tag) => (
                <Chip
                  label={tag}
                  variant="outlined"
                  sx={{ margin: "0px 1px" }}
                />
              ))}
            </div>
          </Grid>
          <Grid xs={6} sx={{ maxHeight: "100%" }}>
            <Image
              src={data.img}
              alt={data.title}
              id={data.title}
              height="100%"
              width="100%"
              fit="cover"
              duration={300}
              easing="cubic-bezier(0.7, 0, 0.6, 1)"
              showLoading={false}
              errorIcon={true}
              shift={null}
              distance="100px"
              shiftDuration={900}
              bgColor="inherit"
            />
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
}

export { ProjectModal };
