import { Box, IconButton, Tooltip, useMediaQuery, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CodewarsIcon from "./CodewarsIcon";

const StyledFooter = styled("div")`

  .icon {
    color: ${(props) => props.theme.palette.text.primary};

    &:hover {
      color: ${(props) => props.theme.palette.primary.main};
    }
  }

  .social-links {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-left: 200px;
    margin-right: 200px;
    padding-bottom: 100px;

    ${(props) => props.theme.breakpoints.down("lg")} {
      margin-left: 100px;
      margin-right: 100px;
    }

    ${(props) => props.theme.breakpoints.down("md")} {
      margin-left: 20px;
      margin-right: 20px;
    }
  }
`;

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <StyledFooter className="Footer">
      {isMobile && (
        <Box className="social-links">
          <Tooltip title="GitHub" placement="top">
            <a href="https://github.com/BiancaGlavan" target="_blank">
              <IconButton className="icon">
                <GitHubIcon />
              </IconButton>
            </a>
          </Tooltip>
          <Tooltip title="LinkedIn" placement="top">
          <a href="https://www.linkedin.com/in/bianca-glavan/" target="_blank">
            <IconButton className="icon">
              <LinkedInIcon />
            </IconButton>
            </a>
          </Tooltip>

          <Tooltip title="Codewars" placement="top">
            <a href="https://www.codewars.com/users/BiancaMaria" target="_blank">
              <IconButton className="icon">
                <CodewarsIcon />
              </IconButton>
            </a>
          </Tooltip>
        </Box>
      )}
    </StyledFooter>
  );
};

export default Footer;
