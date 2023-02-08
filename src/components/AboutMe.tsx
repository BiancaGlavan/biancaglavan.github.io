import { Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import SectionName from "./SectionName";

const StyledAboutMe = styled("div")`
  background: ${(props) => props.theme.palette.background.default};
  padding-bottom: 150px;

  .aboutme-container {
    margin-left: 200px;
    margin-right: 20px;

    ${(props) => props.theme.breakpoints.down("lg")} {
      margin-left: 100px;
    }

    ${(props) => props.theme.breakpoints.down("md")} {
      margin-left: 80px;
    }
  }

  .aboutme-info {
    display: flex;
    gap: 100px;

    ${(props) =>props.theme.breakpoints.down('md')} {
      flex-direction: column;
      align-items: center;
    }

    .aboutme-text {
      width: 50%;

      ${(props) =>props.theme.breakpoints.down('md')} {
        width: 100%;
      }
    }

    .text {
      margin-top: 30px;
      color: ${(props) => props.theme.palette.text.secondary};
    }

    img {
      width: 250px;
      height: 250px;
      border-radius: 50% 20% / 10% 40%;
      object-fit: cover;
    }
    
  }
`;

const AboutMe = () => {
  return (
    <StyledAboutMe className="AboutMe" id="about">
      <Box className="aboutme-container">
        <SectionName ordering="01." title="About me"/>
        <Box className="aboutme-info">
          <Box className="aboutme-text">
            <Typography variant="body1" className="text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus excepturi totam, obcaecati vero
              error voluptatem! Vero error facere eaque blanditiis fugiat at ullam porro a, cum dolorum modi voluptas
              exercitationem.
            </Typography>
            <Typography variant="body1" className="text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus excepturi totam, obcaecati vero
              error voluptatem! Vero error facere eaque blanditiis fugiat at ullam porro a, cum dolorum modi voluptas
              exercitationem.
            </Typography>
          </Box>
          <img src="./images/cv-photo.jpg" alt="" />
        </Box>
      </Box>
    </StyledAboutMe>
  );
};

export default AboutMe;
