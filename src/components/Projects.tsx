import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import SectionName from "./SectionName";

const StyledProjects = styled("div")`
  background: ${(props) => props.theme.palette.background.default};
  padding-bottom: 150px;

  .projects-container {
    margin-left: 200px;
    margin-right: 20px;

    ${(props) => props.theme.breakpoints.down("lg")} {
      margin-left: 100px;
    }

    ${(props) => props.theme.breakpoints.down("md")} {
      margin-left: 80px;
    }
  }
`;

const Projects = () => {
  return (
    <StyledProjects className="Projects" id="projects">
      <Box className="projects-container">
        <SectionName ordering="02." title="My Projects"/>
      </Box>
    </StyledProjects>
  );
};

export default Projects;
