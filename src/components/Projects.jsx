
  
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: ' Social Distribution ',
      description: '  A scalable, decentralized social networking, enabling cross-node post sharing, secure user interactions, and real-time content aggregation. Leveraged an advanced inbox model to distribute posts across nodes with flexible privacy settings (public, unlisted, friends-only), creating a connected network of independent nodes',
      tech: ['React', 'Node.js', 'Stripe', 'CSS'],
      link: 'https://github.com/cmput-404-transparent/social-distribution',
      liveLink: 'https://jastegh-socialdistribution-c7853f320baf.herokuapp.com/login',
      image: '/src/assets/socialdistribution.webp',
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
      image: '/src/assets/dragonshell.webp', 
    },
   
    {
      title: ' ByteSnake ',
      description: ' A functional Snake game in RISC-V Assembly, featuring efficient game logic with real-time snake movement, collision detection, and randomized apple generation via a Linear Congruential Generator. Utilized memory-mapped I/O for direct keyboard and display control, leveraging timer interrupts for precise, responsive gameplay.',
      tech: ['React', 'Node.js', 'Stripe', 'CSS'],
      link: 'https://github.com/Jastegh/ByteSnake',
      image: '/src/assets/bytesnake.webp',
    },
    {
      title: '  QR Dasher ',
      description: ' An Android app for event check-ins using QR codes, geolocation-based attendance verification, featuring profile creation, and event organization. Included real-time notifications and an interactive leaderboard to enhance user experience.',
      tech: ['React', 'Node.js', 'Stripe', 'CSS'],
      link: 'https://github.com/CMPUT301W24T22/QR-Dasher',
      image: '/src/assets/qrdasher.webp',
    },
    
  ];

  return (
    <section id="projects" className="p-10 bg-gradient-to-r from-gray-900 to-black text-white">
  <h2 className="text-5xl font-bold text-center mb-12">Projects</h2>
  <div className="space-y-8">
    {projects.map((project, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        className="flex flex-col md:flex-row items-center bg-gray-800 rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto"
      >
        {/* Project Image */}
        <div className="w-full md:w-5/12 h-48">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Project Details */}
        <div className="p-6 w-full md:w-7/12">
          <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
          <p className="text-gray-400 mb-3">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 text-sm bg-gray-700 rounded-full text-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex space-x-4">
            <a
              href={project.link}
              className="text-blue-400 hover:text-blue-300 font-semibold"
            >
              View Project →
            </a>
            {project.liveLink && (
              <a
                href={project.liveLink}
                className="text-green-400 hover:text-green-300 font-semibold"
              >
                Live Site →
              </a>
            )}
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</section>



  );
};

export default Projects;
