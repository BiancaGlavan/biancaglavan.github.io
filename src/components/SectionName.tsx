import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

interface IPropsSectionName {
  ordering: string;
  title: string;
}

const StyledSectionName = styled("div")`
  display: flex;
  align-items: center;
  gap: 10px;

  .section-nr {
    color: ${(props) => props.theme.palette.primary.main};
    font-weight: 600;

    ${(props) => props.theme.breakpoints.down('sm')} {
      font-size: 20px;
    }
  }

  .section-title {
    color: ${(props) => props.theme.palette.text.primary};
    font-weight: 600;

    ${(props) => props.theme.breakpoints.down('sm')} {
      font-size: 20px;
    }
  }

  .line {
    height: 0.3px;
    width: 200px;
    background: ${(props) => props.theme.palette.primary.main};

    ${(props) => props.theme.breakpoints.down('sm')} {
      width: 100px;
    }
  }
`;

const SectionName = ({ ordering, title }: IPropsSectionName) => {
  return (
    <StyledSectionName className="SectionName">
      <Typography variant="h5" className="section-nr">
        {ordering}
      </Typography>
      <Typography variant="h5" className="section-title">
        {title}
      </Typography>
      <Box className="line"></Box>
    </StyledSectionName>
  );
};

export default SectionName;
