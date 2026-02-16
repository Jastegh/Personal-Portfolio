
  
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
    // {
    //   title: ' Adaptive Agents with Streaming Deep RL ',
    //   description: '  In this project, I worked on enhanced Streaming Deep Reinforcement Learning (RL) by integrating Real-Time Recurrent Learning (RTRL) to tackle the challenge of partial observability. We implemented RTRL in Python and combined it with a streaming RL framework to enable agents to dynamically encode and utilize historical information in real time, without relying on replay buffers. Our work involved testing the integrated model in simulated environments like Atari games, where it demonstrated improved performance, adaptability, and computational efficiency. This project highlights the practical potential of streaming RL for real-world applications in robotics, healthcare, and beyond.',
    //   tech: ['Python', 'Stable-Baselines3', 'PyTorch', 'NumPy'],
    //   link: 'https://github.com/CMPUT-469-iRL/iRL',
    //   image: '/src/assets/rl.webp',
    // },
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
    <section
      id="projects"
      className="bg-gradient-to-b from-slate-950 via-slate-950 to-black py-16 text-white sm:py-20 lg:py-24"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 0.9, 0.3, 1] }}
          className="max-w-2xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-300">
            Projects
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            Selected work I&apos;m proud of.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300/90 sm:text-base">
            Real projects that shipped, broke, and got refined. Each one taught me something about
            reliability, UX, and working with constraints.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                ease: [0.22, 0.9, 0.3, 1],
                delay: index * 0.08,
              }}
              className="flex flex-col gap-5 md:flex-row md:items-stretch"
            >
              <div className="relative w-full overflow-hidden rounded-3xl bg-slate-900/70 md:w-5/12">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-56 w-full object-cover md:h-full"
                />
              </div>

              <div className="relative w-full md:w-7/12">
                <div className="card-border-animated p-[1px] rounded-3xl">
                  <div className="relative flex h-full flex-col justify-between rounded-[1.4rem] bg-slate-950/90 px-6 py-6 shadow-[0_20px_70px_rgba(15,23,42,0.9)] sm:px-7 sm:py-7">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-50 sm:text-2xl">
                        {project.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-slate-300/90 sm:text-[0.95rem]">
                        {project.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full bg-slate-900/80 px-3 py-1 text-xs font-medium text-slate-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-5 flex flex-wrap items-center gap-4 text-xs font-medium uppercase tracking-[0.18em]">
                      <a
                        href={project.link}
                        className="inline-flex items-center gap-2 text-sky-300 hover:text-sky-200"
                      >
                        <span>Code</span>
                        <span aria-hidden="true">↗</span>
                      </a>
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          className="inline-flex items-center gap-2 text-slate-300 hover:text-slate-100"
                        >
                          <span>Live</span>
                          <span aria-hidden="true">●</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
