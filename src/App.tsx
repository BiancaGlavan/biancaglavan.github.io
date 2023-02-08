
import { ThemeProvider } from "@mui/material/styles";
import AboutMe from "./components/AboutMe";
import Greetings from "./components/Greetings";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import portofolioTheme from "./theme/portofolioTheme";

function App() {
  return (
    <ThemeProvider theme={portofolioTheme}>
      {/* <CssBaseline /> */}
      <div className="App">
        <Navigation />
        <Greetings />
        <AboutMe />
        <Projects />
      </div>
    </ThemeProvider>
  );
}

export default App;
