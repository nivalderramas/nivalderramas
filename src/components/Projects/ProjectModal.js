import React from "react";
import { Chip, Button, Modal, Box, Typography, Grid } from "@mui/material";
import Image from "mui-image";


function ProjectModal({ selectedProject, setSelectedProject, itemData }) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "90%",
    height: "80vh",
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
          sx={{ p: 2, height: "80%", maxHeight: "100%" }}
        >
          <Grid xs={12} md={6} sx={{ maxHeight: "100%", mb: { md: 0, xs: 2 } }}>
            <Typography gutterBottom variant="h5" component="div" sx={{ mb: 2 }}>
              {data.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              {data.description}
            </Typography>
            {data.url && (
              <Button
                variant="text"
                href={data.url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ mb: 2 }}
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
                sx={{ mb: 2 }}
              >
                Repository
              </Button>
            )}
            <div className="bottomDiv">
              {data.tags.map((tag) => (
                <Chip
                  label={tag}
                  variant="outlined"
                  sx={{ margin: "1px 1rem", mb: 1 }}
                />
              ))}
            </div>
          </Grid>
          <Grid xs={12} md={6} >
            <Image
              src={data.img}
              alt={data.title}
              id={data.title}
              height="70%"
              width="100%"
              fit="fille"
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
