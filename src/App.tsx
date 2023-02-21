
import { CssBaseline } from "@mui/material";
import { styled, ThemeProvider } from "@mui/material/styles";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Greetings from "./components/Greetings";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import portofolioTheme from "./theme/portofolioTheme";

const StyledApp = styled('div')`
  background: ${(props) => props.theme.palette.background.default};
  background-image: url("./images/background1cropfilter.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

function App() {
  return (
    <ThemeProvider theme={portofolioTheme}>
      <CssBaseline />
      <StyledApp className="App">
        <Navigation />
        <Greetings />
        <AboutMe />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
