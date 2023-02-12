import { Box, Typography } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { styled } from "@mui/material/styles";

interface IPropsSingleSkill {
  tool: string;
}

const StyledSingleSkill = styled("div")`
  display: flex;
  gap: 10px;

  .tool {
    color: ${(props) => props.theme.palette.text.secondary};
  }
`;

const SingleSkill = ({ tool }: IPropsSingleSkill) => {
  return (
    <StyledSingleSkill className="Skill">
      <ArrowRightIcon className="arrow-icon" />
      <Typography className="tool" variant="body1">
        {tool}
      </Typography>
    </StyledSingleSkill>
  );
};

export default SingleSkill;
