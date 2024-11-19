import ThemeToggle from './components/ThemeToggle';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Interests from './components/Interests';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <ThemeToggle />
      <Header />
      <main>
        <AboutMe />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Interests />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
