import { Box, Divider, IconButton, Tooltip, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import SectionName from "./SectionName";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const StyledContact = styled("div")`
  margin-left: 200px;
  margin-right: 200px;

  padding-bottom: 150px;

  ${(props) => props.theme.breakpoints.down("sm")} {
    padding-bottom: 100px;
  }

  ${(props) => props.theme.breakpoints.down("lg")} {
    margin-left: 100px;
    margin-right: 100px;
  }

  ${(props) => props.theme.breakpoints.down("md")} {
    margin-left: 20px;
    margin-right: 20px;
  }

  .text,
  .email {
    color: ${(props) => props.theme.palette.text.secondary};

    ${(props) => props.theme.breakpoints.down("sm")} {
      font-size: 16px;
    }
  }

  .text {
    margin-top: 40px;
  }

  .contact-info {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 20px;

    .icon {
      color: ${(props) => props.theme.palette.text.primary};

      &:hover {
        color: ${(props) => props.theme.palette.primary.main};
      }
    }

    @media screen and (max-width: 350px) {
      flex-direction: column;
    }
  }

  .divider {
    background: ${(props) => props.theme.palette.grey[600]};
  }
`;

const Contact = () => {
  return (
    <StyledContact className="Contact" id="contact">
      <SectionName ordering="04." title="Get In Touch" />
      <Typography className="text" variant="body1">
        For job offers and related discussions, please contact me on linkedin or on my email address.
      </Typography>

      <Box className="contact-info">
        <Tooltip title="LinkedIn" placement="top">
          <a href="#" target="_blank">
            <IconButton className="icon">
              <LinkedInIcon />
            </IconButton>
          </a>
        </Tooltip>
        <Divider className="divider" orientation="vertical" flexItem />
        <Typography className="email" variant="body1">
          bianca.glavan@yahoo.ro
        </Typography>
      </Box>
    </StyledContact>
  );
};

export default Contact;
