import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import socialdistribution from '/src/assets/socialdistribution.png'
import dragonshell from '/src/assets/dragonshell.png'
import bytesnake from '/src/assets/bytesnake.png'
import qrdasher from '/src/assets/qrdasher.png'


const projects = [
    
      {
        title: ' Social Distribution ',
        description: '  A scalable, decentralized social networking, enabling cross-node post sharing, secure user interactions, and real-time content aggregation. Leveraged an advanced inbox model to distribute posts across nodes with flexible privacy settings (public, unlisted, friends-only), creating a connected network of independent nodes',
        tech: ['React', 'Node.js', 'Stripe', 'CSS'],
        link: 'https://github.com/cmput-404-transparent/social-distribution',
        liveLink: 'https://jastegh-socialdistribution-c7853f320baf.herokuapp.com/login',
        image: socialdistribution,
      },
      {
        title: ' Adaptive Agents with Streaming Deep RL ',
        description: '  In this project, I worked on enhanced Streaming Deep Reinforcement Learning (RL) by integrating Real-Time Recurrent Learning (RTRL) to tackle the challenge of partial observability. We implemented RTRL in Python and combined it with a streaming RL framework to enable agents to dynamically encode and utilize historical information in real time, without relying on replay buffers. Our work involved testing the integrated model in simulated environments like Atari games, where it demonstrated improved performance, adaptability, and computational efficiency. This project highlights the practical potential of streaming RL for real-world applications in robotics, healthcare, and beyond.',
        tech: ['Python', 'Stable-Baselines3', 'PyTorch', 'NumPy'],
        link: 'https://github.com/CMPUT-469-iRL/iRL',
        image: '/src/assets/rl.webp',
      },
      {
        title: ' Dragonshell (UNIX Shell)',
        description: ' A UNIX-style command-line shell in C, featuring core OS functions like process control, signal handling, and inter-process communication. Added support for built-in commands (cd, pwd, exit), background execution, input/output redirection, and piping. Utilized system calls (fork, execve, pipe) for efficient and reliable command execution.',
        tech: ['React', 'Tailwind', 'Vue', 'HTML5'],
        link: 'https://github.com/Jastegh/Dragonshell',
        image: dragonshell, 
      },
      {
        title: ' ByteSnake ',
        description: ' A functional Snake game in RISC-V Assembly, featuring efficient game logic with real-time snake movement, collision detection, and randomized apple generation via a Linear Congruential Generator. Utilized memory-mapped I/O for direct keyboard and display control, leveraging timer interrupts for precise, responsive gameplay.',
        tech: ['React', 'Node.js', 'Stripe', 'CSS'],
        link: 'https://github.com/Jastegh/ByteSnake',
        image: bytesnake,
      },
      {
        title: '  QR Dasher ',
        description: ' An Android app for event check-ins using QR codes, geolocation-based attendance verification, featuring profile creation, and event organization. Included real-time notifications and an interactive leaderboard to enhance user experience.',
        tech: ['React', 'Node.js', 'Stripe', 'CSS'],
        link: 'https://github.com/CMPUT301W24T22/QR-Dasher',
        image: qrdasher,
      },
];

const ProjectFragment = ({ project }) => (
    <div className="flex flex-col md:flex-row items-stretch justify-between gap-6 p-6 bg-gray-800 rounded-lg shadow-md">
  {/* Image Section */}
  <div className="flex justify-center items-center w-full md:w-2/5 bg-gray-900 rounded-md">
    <img
      src={project.image}
      alt={project.title}
      className="rounded-md shadow-lg w-auto max-w-[90%] max-h-[350px]" // Adjusted image size
    />
  </div>

  {/* Description Section */}
  <div className="flex flex-col justify-center w-full md:w-3/5 bg-gray-900 p-6 rounded-md">
    <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3> {/* Increased font size */}
    <p className="text-gray-300 mb-4 text-base leading-relaxed">{project.description}</p> {/* Larger font */}
    <div className="flex flex-wrap gap-3 mb-4">
      {project.tech.map((tech, i) => (
        <span
          key={i}
          className="px-3 py-1 text-sm bg-gray-700 rounded-full text-gray-200"
        >
          {tech}
        </span>
      ))}
    </div>
    <a
      href={project.link}
      className="text-blue-400 hover:text-blue-300 font-medium text-sm"
      target="_blank"
      rel="noopener noreferrer"
    >
      View Project →
    </a>
  </div>
</div>

  
);

const ProjectsCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    // <section id="projects" className="px-20 py-16 bg-gray-900 text-white">
    <section id="projects" className="p-10 bg-gradient-to-b from-black to-gray-800 text-white">

      <h2 className="text-5xl font-bold text-center mb-12 text-purple-100">Projects</h2>
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div key={index} className="p-6">
            <ProjectFragment project={project} />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default ProjectsCarousel;
