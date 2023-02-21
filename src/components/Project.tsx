import { Box, Chip, IconButton, Tooltip, Typography, useMediaQuery, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import { IProject } from "./Projects";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

interface IPropsProject {
  project: IProject;
}

const StyledProject = styled("div")`
  display: flex;
  flex-direction: column;
  max-width: 470px;
  border: 1px solid ${(props) => props.theme.palette.primary.main};
  margin-bottom: 50px;

  ${(props) => props.theme.breakpoints.down("md")} {
    max-width: 100%;
  }

  .project-img {
    max-width: 470px;
    ${(props) => props.theme.breakpoints.down("md")} {
      max-width: 100%;
    }

    img {
      width: 100%;
      object-fit: cover;
    }
  }

  .project-info-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 10px;
    background-color: ${(props) => props.theme.palette.background.paper};
  }

  .project-title {
    color: ${(props) => props.theme.palette.primary.main};

    ${(props) => props.theme.breakpoints.down('sm')} {
      font-size: 20px;
    }
  }

  .project-desc-container {
    display: flex;

    .project-desc {
      ${(props) => props.theme.breakpoints.down('sm')} {
        font-size: 16px;
      }
    }

    .arrow-icon {
      color: ${(props) => props.theme.palette.text.secondary};
    }
  }

  .project-desc,
  .project-tool {
    color: ${(props) => props.theme.palette.text.secondary};
  }

  .project-tools {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .icon {
    color: ${(props) => props.theme.palette.text.primary};

    &:hover {
      color: ${(props) => props.theme.palette.primary.main};
    }
  }
`;

const Project = ({ project }: IPropsProject) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <StyledProject className="Project">
      <Box className="project-img">
        <img src={project.img} />
      </Box>
      <Box className="project-info-container">
        <a href={project.live_link} target="_blank">
          <Typography className="project-title" variant="h6">
            {project.title}
          </Typography>
        </a>

        <Box>
          {project.desc.map((description, idx) => (
            <Box key={idx} className="project-desc-container">
              <ArrowRightIcon className="arrow-icon" />
              <Typography className="project-desc" variant="body1">
                {description}
              </Typography>
            </Box>
          ))}
        </Box>

        <Box className="project-tools">
          {project.tools.map((tool, idx) => (
            <Chip className="project-tool" key={idx} label={tool} />
          ))}
        </Box>

        <Box className="links">
          <Tooltip title="Code Source" placement="bottom">
            <a href={project.github} target="_blank">
              <IconButton className="icon">
                <GitHubIcon />
              </IconButton>
            </a>
          </Tooltip>
          <Tooltip title="Live link" placement="bottom">
            <a href={project.live_link} target="_blank">
              <IconButton className="icon">
                <OpenInNewIcon />
              </IconButton>
            </a>
          </Tooltip>
        </Box>
      </Box>
    </StyledProject>
  );
};

export default Project;
