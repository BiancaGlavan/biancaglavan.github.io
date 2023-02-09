import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import SectionName from "./SectionName";
import data from "../../data.json";
import Project from "./Project";

export interface IProject {
  id: number;
  title: string;
  img: string;
  desc: string[];
  tools: string[];
  github: string;
  live_link: string;
}

const StyledProjects = styled("div")`
  background: ${(props) => props.theme.palette.background.default};
  padding-bottom: 150px;

  .projects-container {
    margin-left: 200px;
    margin-right: 200px;

    ${(props) => props.theme.breakpoints.down("lg")} {
      margin-left: 100px;
      margin-right: 100px;
    }

    ${(props) => props.theme.breakpoints.down("md")} {
      margin-left: 20px;
      margin-right: 20px;
    }
  }

  .my-projects {
    margin-top: 40px;
  }
`;

const Projects = () => {
  const projects: IProject[] = data;

  return (
    <StyledProjects className="Projects">
      <Box className="projects-container">
        <SectionName ordering="02." title="My Projects" />
        {projects && (
          <Grid className="my-projects" container spacing={2}>
            {projects.map((project, idx) => (
              <Grid key={project.id} item xs={12} md={6}>
                <Project project={project} />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </StyledProjects>
  );
};

export default Projects;
