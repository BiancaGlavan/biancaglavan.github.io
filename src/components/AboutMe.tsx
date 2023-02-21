import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import SectionName from "./SectionName";

const StyledAboutMe = styled("div")`
  padding-bottom: 150px; 
  padding-top: 40px;

  ${(props) => props.theme.breakpoints.down("sm")} {
    padding-bottom: 100px;
  }

  .aboutme-container {
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

  .aboutme-info {
    margin-top: 40px;
    display: flex;
    align-items: center;
    gap: 100px;

    ${(props) => props.theme.breakpoints.down("md")} {
      flex-direction: column;
      align-items: center;
      gap: 50px;
    }  
  }

    .img-container {
      width: 250px;
      height: 250px;

      img {
        width: 100%;
        height: 100%;
        border-radius: 50% 20% / 10% 40%;
        object-fit: contain;
      }
    }
    

    .aboutme-text {
      width: 60%;

      ${(props) => props.theme.breakpoints.down("md")} {
        width: 100%;
      }
    }

    .text {
      margin-bottom: 20px;
      color: ${(props) => props.theme.palette.text.secondary};

      ${(props) => props.theme.breakpoints.down("sm")} {
        font-size: 16px;
      }
    }
  }
`;

const AboutMe = () => {
  return (
    <StyledAboutMe className="AboutMe" id="about">
      <Box className="aboutme-container">
        <SectionName ordering="01." title="About me" />
        <Box className="aboutme-info">
          <Box className="aboutme-text">
            <Typography variant="body1" className="text">
              As a self-taught programmer with a background in history, I am a hardworking and determined individual who
              has honed their skills in front-end web development through independent study and practical application. I
              possess a solid foundation in JavaScript, TypeScript, React, and Material UI, as well as other tools and
              technologies commonly used in front-end web development.
            </Typography>
            <Typography variant="body1" className="text">
              During my studies, I developed excellent research, analytical, and critical thinking skills that proved to
              be assets in my transition to programming. Additionally, my experience in communicating complex ideas in a
              clear and concise manner will be valuable when working on team projects.
            </Typography>
          </Box>

          <Box className="img-container">
            <img src="./images/poza-cv.jpeg" alt="" />
          </Box>
        </Box>
      </Box>
    </StyledAboutMe>
  );
};

export default AboutMe;
