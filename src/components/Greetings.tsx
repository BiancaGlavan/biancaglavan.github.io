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

  ${(props) => props.theme.breakpoints.down("sm")} {
    padding-bottom: 150px;
    padding-top: 100px;
  }

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

    ${(props) => props.theme.breakpoints.down("sm")} {
      font-size: 26px;
    }
  }

  .button-link {
    color: ${(props) => props.theme.palette.primary.main};
    font-weight: 600;
    margin-top: 30px;

    ${(props) => props.theme.breakpoints.down("sm")} {
      font-size: 16px;
    }
  }

  .text-details {
    color: ${(props) => props.theme.palette.text.secondary};
    margin-top: 20px;
    margin-bottom: 20px;
    max-width: 1000px;

    ${(props) => props.theme.breakpoints.down("sm")} {
      font-size: 16px;
    }
  }
`;

const Greetings = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <StyledGreetings className="Greetings">
      {!isMobile && (
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
      )}
      <Box className="greetings-container">
        <Typography className="text" variant="h3">
          Hi, I'm Bianca.
        </Typography>
        <Typography className="text" variant="h4">
          A self-taught front-end developer.
        </Typography>
        <Typography className="text-details" variant="body1">
          Please take a look at my portfolio to see examples of my work and feel free to reach out to me to discuss
          opportunities to collaborate.
        </Typography>
        <a href="https://biancaglavan.github.io/portfolio/CV-BiancaGlavan.pdf" target="_blank">
          <Button size="large" variant="outlined" className="button-link">
            Check out my Resume
          </Button>
        </a>
      </Box>
    </StyledGreetings>
  );
};

export default Greetings;
