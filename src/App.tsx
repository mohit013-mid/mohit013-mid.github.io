import { LazyMotion, domAnimation } from "framer-motion";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { useTheme } from "./hooks/useTheme";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Education } from "./sections/Education";
import { Experience } from "./sections/Experience";
import { Hero } from "./sections/Hero";
import { Learning } from "./sections/Learning";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";

export default function App() {
  const { theme, toggle } = useTheme();
  return (
    <LazyMotion features={domAnimation} strict>
      <a href="#main" className="sr-only z-50 rounded-md bg-accent px-4 py-2 text-accent-fg focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
        Skip to content
      </a>
      <Navbar theme={theme} onToggleTheme={toggle} />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Learning />
        <Contact />
      </main>
      <Footer />
    </LazyMotion>
  );
}
