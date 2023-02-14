import { Box, Container, Drawer, IconButton, styled, Typography, useMediaQuery, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useState } from "react";
import SidebarNav from "./SidebarNav";
import CloseIcon from "@mui/icons-material/Close";
import { useScrollDirection } from "react-use-scroll-direction";
import classNames from "classnames";

const StyledNavigation = styled("div")`
  background: ${(props) => props.theme.palette.background.default};
  padding: 20px;
  position: sticky;
  top: 0;
  height: 68px;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 500ms;

  &.show {
    top: 0;
    opacity: 0.8;
  }

  &.hide {
    top: -68px;
  }

  .navigation-container {
    display: flex;
    gap: 30px;
    justify-content: flex-end;
    align-items: center;
  }

  .menu-link {
    display: flex;
    align-items: center;
    gap: 5px;

    .section-nr {
      color: ${(props) => props.theme.palette.primary.main};
      font-weight: 600;
    }

    .section {
      color: ${(props) => props.theme.palette.text.secondary};
      font-weight: 600;

      &:hover {
        color: ${(props) => props.theme.palette.primary.main};
      }
    }
  }

  .menu-icon {
    color: ${(props) => props.theme.palette.text.primary};
  }
`;

const StyledDrawer = styled(Drawer)`
  .close-icon {
    color: ${(props) => props.theme.palette.text.primary};
  }
`;

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isScrolling, isScrollingUp, isScrollingDown } = useScrollDirection();
  const [scrollDirection, setScrollDirection] = useState("up");

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    if (isScrolling === true && isScrollingDown === true) setScrollDirection("down");
    else if (isScrolling === true && isScrollingUp === true) setScrollDirection("up");
  }, [isScrollingUp, isScrollingDown, isScrolling]);

  const className = scrollDirection === "down" ? " hide" : "";

  return (
    <StyledNavigation className={"show" + className}>
      <Container className="navigation-container">
        {isMobile && (
          <IconButton onClick={handleDrawerToggle}>
            <MenuIcon className="menu-icon" />
          </IconButton>
        )}
        {!isMobile && (
          <>
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

            <a href="#projects">
              <Box className="menu-link">
                <Typography variant="subtitle1" className="section-nr">
                  02.
                </Typography>
                <Typography variant="subtitle1" className="section">
                  Projects
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

            <a href="#contact">
              <Box className="menu-link">
                <Typography variant="subtitle1" className="section-nr">
                  04.
                </Typography>
                <Typography variant="subtitle1" className="section">
                  Contact
                </Typography>
              </Box>
            </a>
          </>
        )}
        <StyledDrawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          anchor="right"
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: 280 },
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "flex-end", padding: "10px" }}>
            <IconButton onClick={handleDrawerToggle}>
              <CloseIcon className="close-icon" />
            </IconButton>
          </Box>
          <SidebarNav />
        </StyledDrawer>
      </Container>
    </StyledNavigation>
  );
};

export default Navigation;
