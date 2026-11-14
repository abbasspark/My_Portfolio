import About from "./components/About";
import CareerGuide from "./components/CareerGuide";
import CaseStudy from "./components/CaseStudy";
import Contact from "./components/Contact";
import Credentials from "./components/Credentials";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import {useTheme} from "./hooks/useTheme";
import {useSite} from "./i18n";

export default function App() {
  const {theme, toggleTheme} = useTheme();
  const {site} = useSite();

  return (
    <>
      <a className="skip-link" href="#main">
        {site.ui.skipToContent}
      </a>
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main id="main">
        <Hero />
        <About />
        <CareerGuide />
        <CaseStudy />
        <Skills />
        <Projects />
        <Credentials />
      </main>
      <Contact />
    </>
  );
}
