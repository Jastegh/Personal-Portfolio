import Slider from "react-slick";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import buffer from "/src/assets/buffer-dashboard.jpg";
import socialdistribution from "/src/assets/socialdistribution-realistic.png";
import dragonshell from "/src/assets/dragonshell-realistic.png";
import bytesnake from "/src/assets/bytesnake-realistic.png";
import qrdasher from "/src/assets/qrdasher.png";

const projects = [
  {
    title: "Buffer",
    description:
      "A cash-flow safety dashboard for people with daily, shift-based, or irregular income. It joins six datasets into a seven-day forecast showing safe days, when and why a shortfall may occur, and ranked actions with calculated impact.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/Jastegh/Buffer",
    image: buffer,
    imageWidth: 1100,
    imageHeight: 1100,
    priority: true,
  },
  {
    title: "Social Distribution",
    description:
      "  A scalable, decentralized social networking, enabling cross-node post sharing, secure user interactions, and real-time content aggregation. Leveraged an advanced inbox model to distribute posts across nodes with flexible privacy settings (public, unlisted, friends-only), creating a connected network of independent nodes",
    tech: ["React", "Python", "CSS", "Django"],
    link: "https://github.com/cmput-404-transparent/social-distribution",
    liveLink: "https://jastegh-socialdistribution-c7853f320baf.herokuapp.com/login",
    image: socialdistribution,
    imageWidth: 1254,
    imageHeight: 1254,
  },
  {
    title: "Dragonshell (UNIX Shell)",
    description:
      " A UNIX-style command-line shell in C, featuring core OS functions like process control, signal handling, and inter-process communication. Added support for built-in commands (cd, pwd, exit), background execution, input/output redirection, and piping. Utilized system calls (fork, execve, pipe) for efficient and reliable command execution.",
    tech: ["C"],
    link: "https://github.com/Jastegh/Dragonshell",
    image: dragonshell,
    imageWidth: 1254,
    imageHeight: 1254,
  },
  {
    title: "ByteSnake",
    description:
      " A functional Snake game in RISC-V Assembly, featuring efficient game logic with real-time snake movement, collision detection, and randomized apple generation via a Linear Congruential Generator. Utilized memory-mapped I/O for direct keyboard and display control, leveraging timer interrupts for precise, responsive gameplay.",
    tech: ["RISC-V", "Assembly"],
    link: "https://github.com/Jastegh/ByteSnake",
    image: bytesnake,
    imageWidth: 1254,
    imageHeight: 1254,
    imageClassName: "scale-[1.16]",
  },
  {
    title: "QR Dasher",
    description:
      " An Android app for event check-ins using QR codes, geolocation-based attendance verification, featuring profile creation, and event organization. Included real-time notifications and an interactive leaderboard to enhance user experience.",
    tech: ["Java", "Firebase", "Android Studio", "JavaScript", "CSS"],
    link: "https://github.com/CMPUT301W24T22/QR-Dasher",
    image: qrdasher,
    imageWidth: 1024,
    imageHeight: 1024,
  },
];

const ProjectFragment = ({ project }) => (
  <div className="flex flex-col gap-6 rounded-3xl bg-slate-950/80 p-4 shadow-[0_20px_60px_rgba(15,23,42,0.9)] sm:p-6 md:flex-row md:items-center">
    <div className="flex w-full items-center justify-center md:w-2/5">
      <div className="aspect-square w-full max-w-[320px] overflow-hidden rounded-2xl">
        <img
          src={project.image}
          alt={project.title}
          width={project.imageWidth}
          height={project.imageHeight}
          loading={project.priority ? "eager" : "lazy"}
          fetchPriority={project.priority ? "high" : "auto"}
          decoding="async"
          className={`h-full w-full object-contain ${project.imageClassName ?? ""}`}
        />
      </div>
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

const CarouselArrow = ({ direction, onClick }) => {
  const isPrevious = direction === "previous";
  const Icon = isPrevious ? HiChevronLeft : HiChevronRight;

  return (
    <button
      type="button"
      aria-label={isPrevious ? "Previous project" : "Next project"}
      onClick={onClick}
      className={`absolute top-1/2 z-20 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-sky-300/30 bg-slate-900/95 text-sky-100 shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur transition duration-200 hover:scale-105 hover:border-sky-300/60 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:h-12 sm:w-12 ${
        isPrevious ? "left-2 sm:-left-6" : "right-2 sm:-right-6"
      }`}
    >
      <Icon className="h-6 w-6" aria-hidden="true" />
    </button>
  );
};

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
    prevArrow: <CarouselArrow direction="previous" />,
    nextArrow: <CarouselArrow direction="next" />,
  };

  return (
    <section
      id="projects"
      className="section-surface-projects border-t border-white/[0.05] py-16 text-white sm:py-20 lg:py-24"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 md:px-10 lg:px-16">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-300">
            Projects
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            A few things I&apos;ve built.
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
