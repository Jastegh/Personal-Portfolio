import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Scene from './components/Scene';
import Skills from './components/Skills';
import Footer from './components/Footer';
import ProjectsCarousel from "./components/ProjectsCarousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WorkExperience from "./components/WorkExperience";


export default function App() {
  return (
    <div>
      <Navbar />
      <header className="relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white h-screen flex flex-col justify-center items-center">
  {/* Text Content */}
  <div className="text-center">
    {/* <h1 className="text-6xl font-bold mb-6">Hi, I'm Jastegh</h1>
    <p className="text-xl mb-10">Crafting innovative solutions and building impactful projects.</p> */}


    <h1 className="fade-in text-6xl font-bold text-center text-white mb-6">
      Hi, I'm Jastegh
    </h1>
    <p className="fade-in text-xl mb-10">
      Crafting innovative solutions and building impactful projects.
    </p>

  </div>

  {/* 3D Model
  <div className="w-full flex justify-center mb-10">
    <Scene />
  </div> */}

  {/* Buttons */}
  <div className="flex space-x-4">
    <a
      href="#projects"
      className="px-6 py-3 bg-white text-blue-600 rounded-lg shadow hover:bg-gray-200"
    >
      View My Work
    </a>
    <a
      href="#contact"
      className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600"
    >
      Let's Collaborate
    </a>
  </div>
  <div className="wave"></div>
</header>

      <About />
      {/* <Skills /> */}
      <ProjectsCarousel />
      <WorkExperience />
      <Contact />
      <Footer />

    </div>
  );
}
