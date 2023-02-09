import { styled } from "@mui/material/styles";
import SectionName from "./SectionName";

const StyledSkills = styled("div")`
  background: ${(props) => props.theme.palette.background.default};

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
`;

const Skills = () => {
  return (
    <StyledSkills className="Skills">
      <SectionName ordering="03." title="Skills" />
      
    </StyledSkills>
  );
};

export default Skills;
