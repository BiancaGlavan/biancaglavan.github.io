import { Box, Button, Container, IconButton, Tooltip, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Icon } from "@iconify/react";
import { useState } from "react";
import classNames from "classnames";
import CodewarsIcon from "./CodewarsIcon";

const StyledGreetings = styled("div")`
  background: ${(props) => props.theme.palette.background.default};
  height: 700px;
  padding-top: 100px;
  display: flex;

  .social-links {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    position: fixed;
    top: 300px;
    left: 20px;

    .icon {
      color: ${(props) => props.theme.palette.text.primary};

      &:hover {
        color: ${(props) => props.theme.palette.primary.main};
      }
    }

    .codewars-icon {
      &.isHovered {
        color: ${(props) => props.theme.palette.primary.main};
      }
    }
  }

  .greetings-container {
    margin-left: 200px;
    margin-right: 20px;

    ${(props) => props.theme.breakpoints.down("lg")} {
      margin-left: 100px;
    }

    ${(props) => props.theme.breakpoints.down("md")} {
      margin-left: 80px;
    }
  }

  .text {
    font-weight: 700;
    color: ${(props) => props.theme.palette.text.primary};
  }

  .button-link {
    color: ${(props) => props.theme.palette.primary.main};
    font-weight: 600;
    margin-top: 30px;
  }
`;

const Greetings = () => {
  return (
    <StyledGreetings className="Greetings">
      <Box className="social-links">
        <Tooltip title="GitHub" placement="right">
          <a href="https://github.com/BiancaGlavan" target="_blank">
            <IconButton className="icon">
              <GitHubIcon />
            </IconButton>
          </a>
        </Tooltip>
        <Tooltip title="LinkedIn" placement="right">
          <IconButton className="icon">
            <LinkedInIcon />
          </IconButton>
        </Tooltip>
        {
          <Tooltip title="Codewars" placement="right">
            <a href="https://www.codewars.com/users/BiancaMaria" target="_blank">
              <IconButton className="icon">
                <CodewarsIcon />
              </IconButton>
            </a>
          </Tooltip>
        }
      </Box>
      <Box className="greetings-container">
        <Typography className="text" variant="h3">
          Hi, I'm Bianca.
        </Typography>
        <Typography className="text" variant="h3">
          I build things for the web.
        </Typography>
        <a href="#resume" target="_blank">
          <Button size="large" variant="outlined" className="button-link">
            Check out my Resume
          </Button>
        </a>
      </Box>
    </StyledGreetings>
  );
};

export default Greetings;
