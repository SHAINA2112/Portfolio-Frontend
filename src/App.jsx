import { useLenis } from "./hooks/useLenis";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Services from "./sections/Services";
import Projects from "./sections/Projects";
import Journey from "./sections/Journey";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";
function App() {
  useLenis();
  return (
    <>
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-cyan focus:px-4 focus:py-2 focus:text-bg-primary"
      >
        Skip to content
      </a>
      <div className="noise-overlay" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Journey />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
export default App;
