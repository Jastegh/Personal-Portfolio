import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import socialdistribution from "/src/assets/socialdistribution.png";
import dragonshell from "/src/assets/dragonshell.png";
import bytesnake from "/src/assets/bytesnake.png";
import qrdasher from "/src/assets/qrdasher.png";
import rl from "/src/assets/rl.webp";

const projects = [
  {
    title: " Social Distribution ",
    description:
      "  A scalable, decentralized social networking, enabling cross-node post sharing, secure user interactions, and real-time content aggregation. Leveraged an advanced inbox model to distribute posts across nodes with flexible privacy settings (public, unlisted, friends-only), creating a connected network of independent nodes",
    tech: ["React", "Python", "CSS", "Django"],
    link: "https://github.com/cmput-404-transparent/social-distribution",
    liveLink: "https://jastegh-socialdistribution-c7853f320baf.herokuapp.com/login",
    image: socialdistribution,
  },
  {
    title: " Dragonshell (UNIX Shell)",
    description:
      " A UNIX-style command-line shell in C, featuring core OS functions like process control, signal handling, and inter-process communication. Added support for built-in commands (cd, pwd, exit), background execution, input/output redirection, and piping. Utilized system calls (fork, execve, pipe) for efficient and reliable command execution.",
    tech: ["C"],
    link: "https://github.com/Jastegh/Dragonshell",
    image: dragonshell,
  },
  {
    title: " ByteSnake ",
    description:
      " A functional Snake game in RISC-V Assembly, featuring efficient game logic with real-time snake movement, collision detection, and randomized apple generation via a Linear Congruential Generator. Utilized memory-mapped I/O for direct keyboard and display control, leveraging timer interrupts for precise, responsive gameplay.",
    tech: ["RISC-V", "Assembly"],
    link: "https://github.com/Jastegh/ByteSnake",
    image: bytesnake,
  },
  {
    title: "  QR Dasher ",
    description:
      " An Android app for event check-ins using QR codes, geolocation-based attendance verification, featuring profile creation, and event organization. Included real-time notifications and an interactive leaderboard to enhance user experience.",
    tech: ["Java", "Firebase", "Android Studio", "JavaScript", "CSS"],
    link: "https://github.com/CMPUT301W24T22/QR-Dasher",
    image: qrdasher,
  },
];

const ProjectFragment = ({ project }) => (
  <div className="flex flex-col gap-6 rounded-3xl bg-slate-950/80 p-4 shadow-[0_20px_60px_rgba(15,23,42,0.9)] sm:p-6 md:flex-row md:items-center">
    <div className="flex w-full items-center justify-center md:w-2/5">
      <img
        src={project.image}
        alt={project.title}
        className="w-auto max-h-[320px] max-w-[90%] rounded-2xl object-contain"
      />
    </div>
    <div className="w-full md:w-3/5">
      <h3 className="text-xl font-semibold text-slate-50 sm:text-2xl">{project.title}</h3>
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
      <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-medium uppercase tracking-[0.18em]">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sky-300 hover:text-sky-200"
        >
          <span>Code</span>
          <span aria-hidden="true">↗</span>
        </a>
        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-slate-300 hover:text-slate-100"
          >
            <span>Live</span>
            <span aria-hidden="true">●</span>
          </a>
        )}
      </div>
    </div>
  </div>
);

const ProjectsCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4200,
    pauseOnHover: true,
  };

  return (
    <section
      id="projects-carousel"
      className="bg-gradient-to-b from-black via-slate-950 to-black py-16 text-white sm:py-20 lg:py-24"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 md:px-10 lg:px-16">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-300">
            Projects
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            A look at few of my builds.
          </h2>
        </div>
        <div className="card-border-animated rounded-3xl p-[1px]">
          <div className="rounded-[1.4rem] bg-slate-950/90 p-4 sm:p-6">
            <Slider {...settings}>
              {projects.map((project) => (
                <div key={project.title} className="px-1 py-2">
                  <ProjectFragment project={project} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsCarousel;
