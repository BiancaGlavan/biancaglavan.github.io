import { Box, Divider, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import SectionName from "./SectionName";
import SingleSkill from "./SingleSkill";

const StyledSkills = styled("div")`
  background: ${(props) => props.theme.palette.background.default};
  padding-bottom: 150px;
  padding-left: 200px;
  padding-right: 200px;

  ${(props) => props.theme.breakpoints.down("lg")} {
    padding-left: 100px;
    padding-right: 100px;
  }

  ${(props) => props.theme.breakpoints.down("md")} {
    padding-left: 20px;
    padding-right: 20px;
  }

  .skills-container {
    margin-top: 40px;
    display: flex;
    max-width: 1000px;
    background: ${(props) => props.theme.palette.secondary.main};
    padding: 50px 20px;
    justify-content: space-around;
    gap: 20px;

    ${(props) => props.theme.breakpoints.down("sm")} {
      flex-direction: column;
    }
  }

  .backend-skills,
  .frontend-skills {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .skills-cat {
    margin-bottom: 20px;
  }

  .divider {
    background: ${(props) => props.theme.palette.grey[600]};
  }
`;

const Skills = () => {
  return (
    <StyledSkills className="Skills">
      <SectionName ordering="03." title="Skills" />
      <Box className="skills-container">
        <Box className="frontend-skills">
          <Box>
            <Typography variant="h6" className="skills-cat">
              Front-end
            </Typography>
            <SingleSkill tool="HTML" />
            <SingleSkill tool="SCSS" />
            <SingleSkill tool="Javascript" />
            <SingleSkill tool="Typescript" />
            <SingleSkill tool="React" />
            <SingleSkill tool="Redux Toolkit" />
            <SingleSkill tool="Material UI" />
            <SingleSkill tool="Styled components" />
            <SingleSkill tool="React-router-dom" />
            <SingleSkill tool="Axios" />
            <SingleSkill tool="Swiper JS" />
          </Box>
        </Box>
        <Divider className="divider" orientation="vertical"  flexItem/>
        <Box className="backend-skills">
          <Box>
            <Typography variant="h6" className="skills-cat">
              Back-end
            </Typography>
            <SingleSkill tool="Express JS" />
            <SingleSkill tool="MongoDB" />
            <SingleSkill tool="Mongoose" />
          </Box>
        </Box>
      </Box>
    </StyledSkills>
  );
};

export default Skills;
