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
      <Header />
      <main>
        <AboutMe />
        <Projects />
        <Skills />
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
