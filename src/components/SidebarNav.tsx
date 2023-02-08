import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";

const StyledSidebarNav = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  justify-content: center;
  margin-top: 70px;

  .menu-link {
    display: flex;
    flex-direction: column;
    align-items: center;

    .section-nr {
      color: ${(props) => props.theme.palette.primary.main};
      font-weight: 600;
    }

    .section {
      color: ${(props) => props.theme.palette.secondary.main};
      font-weight: 600;

      &:hover {
        color: ${(props) => props.theme.palette.primary.main};
      }
    }
  }
`;

const SidebarNav = () => {

  return (
    <StyledSidebarNav className="SidebarNav">
      <a href="#about">
        <Box className="menu-link">
          <Typography variant="subtitle1" className="section-nr">
            01.
          </Typography>
          <Typography variant="subtitle1" className="section">
            About me
          </Typography>
        </Box>
      </a>
      <a href="#work">
        <Box className="menu-link">
          <Typography variant="subtitle1" className="section-nr">
            02.
          </Typography>
          <Typography variant="subtitle1" className="section">
            Work
          </Typography>
        </Box>
      </a>
      <a href="#skills">
        <Box className="menu-link">
          <Typography variant="subtitle1" className="section-nr">
            03.
          </Typography>
          <Typography variant="subtitle1" className="section">
            Skills
          </Typography>
        </Box>
      </a>
      <a href="#about">
        <Box className="menu-link">
          <Typography variant="subtitle1" className="section-nr">
            04.
          </Typography>
          <Typography variant="subtitle1" className="section">
            Contact
          </Typography>
        </Box>
      </a>
    </StyledSidebarNav>
  );
};

export default SidebarNav;
