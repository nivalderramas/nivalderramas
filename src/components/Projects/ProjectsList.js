import React, { useState } from "react";
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import Image from "mui-image";
import { Container } from "@mui/system";
import { ProjectModal } from "./ProjectModal";

function ProjectsList() {
  const [selectedProject, setSelectedProject] = useState("");
  return (
    <Container>
      <ImageList
        sx={{ width: "90%", p: 0 }}
        cols={3}
        rowHeight={"300"}
        gap={20}
      >
        {itemData.map((item) => (
          <ImageListItem
            className="projectImage"
            key={item.img}
            onClick={(e) => setSelectedProject(e.target.id)}
          >
            <Image
              src={item.img}
              alt={item.title}
              id={item.title}
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
            <ImageListItemBar
              title={item.title}
              subtitle={item.author}
              position="bottom"
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${item.title}`}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
      {selectedProject !== "" && (
        <ProjectModal
          selectedProject={selectedProject}
          itemData={itemData}
          setSelectedProject={setSelectedProject}
        />
      )}
    </Container>
  );
}

const itemData = [
  {
    img: "/nivalderramas/img/projects/3DTetris.png",
    title: "3DTetris",
    description:
      "Enter the ultimate Tetris experience with my custom 3D version, showcasing advanced shaders and WebGL technology. Featuring intricate geometric shapes that fit seamlessly into each other, strategic gameplay mechanics, and cutting-edge coding techniques, this project highlights my extensive knowledge of 3D graphics, web development, and WebGL programming. Experience my innate creativity and talent to invent new ideas, resulting in a unique and captivating gameplay experience that will keep you coming back for more.",
    tags: ["p5", "WebGL", "3D", "Shaders", "Graphics", "React"],
    url: "https://visual-computing-2022-2.github.io/Talleres/docs/Workshop/workshop_2/tetris/",
    github:
      "https://github.com/Visual-Computing-2022-2/Talleres/blob/main/content/sketches/taller2/tetris.js",
  },
  {
    img: "/nivalderramas/img/projects/donut.gif",
    title: "Revolution Solid",
    description:
      "Discover the beauty of mathematical concepts in motion with my toroid-rendering application, created in Java using the Processing framework. This project showcases my expert knowledge in math and algorithmic thinking, allowing users to effortlessly render a toroid as a solid of revolution by manipulating various variables. Witness the power of computer-generated imagery and explore the infinite possibilities of geometric shapes with this unique application that blends mathematics and coding into a seamless experience.",
    tags: ["Processing", "Java", "Graphics", "Maths"],
    github: "https://github.com/nivalderramas/donut_processing",
  },
  {
    img: "/nivalderramas/img/projects/awesomePalettes.png",
    title: "Create color palettes from a given wallpaper",
    description:
      "Bring your computer to life with my Python project that generates a custom color scheme based on any image. Using the K-means clustering algorithm, this project extracts the dominant colors from an image to create a personalized color scheme for your computer. With customizable parameters for clusters, color space, and image sampling, this project demonstrates my expertise in Python programming and my ability to apply complex algorithms to practical applications. Add a personal touch to your computer with this visually stunning and highly customizable project.",
    tags: ["Python", "K-means", "Machine Learning", "Maths", "Linux"],
    github: "https://github.com/nivalderramas/awesomePalettes",
  },
  {
    img: "/nivalderramas/img/projects/redboard.jpg",
    title: "Redboard UN",
    description:
      "Make studying easier with our web application designed for the National University's community. Our platform allows students to upload and share study resources, which are then organized and classified based on their subject and professor. Our user-friendly interface is responsive, and data is securely hosted on Firebase. Developed collaboratively by our team, this web application demonstrates our expertise in web development and database management. We're proud to contribute to the National University's community and invite students to join us in simplifying their study experience.",
    tags: ["React", "Material-UI", "Figma", "Firebase", "NodeJS", "Express"],
    url: "https://redboardun.com/",
    github: "https://github.com/jumorap/Chopin",
  },
];

export { ProjectsList };
