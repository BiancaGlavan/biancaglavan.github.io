import { createTheme } from "@mui/material/styles";

const portofolioTheme = createTheme({
  palette: {
    background: {
      default: "#212529",
      paper: "#212529",
    },
    primary: {
        main: "#e9a667",
    },
    secondary: {
        main: "rgba(0, 0, 0, 0.08)",
    },
    text :{
      primary: "#fff",
      secondary: "#cccccc",
  },
  },
  typography: {
    fontFamily: "Poppins",
  },
});

export default portofolioTheme;
