import { Box, Button, IconButton, Tooltip, Typography, useMediaQuery, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CodewarsIcon from "./CodewarsIcon";

const StyledGreetings = styled("div")`
  background: ${(props) => props.theme.palette.background.default};
  padding-top: 150px;
  display: flex;
  padding-bottom: 230px;

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

  .text {
    font-weight: 700;
    color: ${(props) => props.theme.palette.text.primary};
  }

  .button-link {
    color: ${(props) => props.theme.palette.primary.main};
    font-weight: 600;
    margin-top: 30px;
  }

  .text-details {
    color: ${(props) => props.theme.palette.text.secondary};
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

const Greetings = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <StyledGreetings className="Greetings">
      {!isMobile && <Box className="social-links">
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
      </Box>}
      <Box className="greetings-container">
        <Typography className="text" variant="h3">
          Hi, I'm Bianca.
        </Typography>
        <Typography className="text" variant="h3">
          I build things for the web.
        </Typography>
        <Typography className="text-details" variant="body1">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, ex eius, ad non doloremque magnam
          officiis fugiat deserunt sint nisi animi aperiam sequi quia voluptate asperiores culpa, qui odio nam?
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
