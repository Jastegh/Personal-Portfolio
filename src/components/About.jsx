
import React from "react";
import { motion } from "framer-motion";
import avatarImage from "/src/assets/avatar.png";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaPython,
  FaJava,
  FaFigma,
} from "react-icons/fa";
import { SiTailwindcss, SiPostgresql, SiCplusplus, SiMysql, SiMongodb } from "react-icons/si";

const About = () => {
  const skills = [
    { name: "Python", icon: <FaPython className="text-blue-400 text-3xl" /> },
    { name: "Java", icon: <FaJava className="text-red-500 text-3xl" /> },
    { name: "C++", icon: <SiCplusplus className="text-blue-500 text-3xl" /> },
    { name: "SQL", icon: <SiMysql className="text-blue-700 text-3xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-3xl" /> },
    { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-3xl" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-3xl" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400 text-3xl" /> },
    { name: "React", icon: <FaReact className="text-blue-400 text-3xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-3xl" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400 text-3xl" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-500 text-3xl" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600 text-3xl" /> },
    { name: "Figma", icon: <FaFigma className="text-blue-500 text-3xl" /> },
  ];

  return (
    <section
      id="about"
      className="border-t border-white/10 bg-gradient-to-b from-slate-950 via-slate-950 to-black/90 py-16 text-white sm:py-20 lg:py-24"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 0.9, 0.3, 1] }}
          className="max-w-2xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-300">
            About
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            Hi, I&apos;m Jastegh Singh.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-200/90 sm:text-base">
            I&apos;m a curious and adaptable developer who enjoys working on diverse projects.
            From building tools and applications to solving technical challenges, I approach my
            work with focus and practicality. I value continuous learning and enjoy tackling new
            problems that expand my understanding and skills. With a strong passion for coding,
            I aim to create impactful solutions and contribute to meaningful projects.
          </p>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)]">
          {/* About card */}
          {/* <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 0.9, 0.3, 1] }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.95)] backdrop-blur-xl sm:p-7 lg:p-8"
          >
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-sky-400/10 via-fuchsia-400/10 to-indigo-400/10 opacity-80 mix-blend-soft-light" />
            <div className="relative flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
              <div className="shrink-0">
                <div className="relative inline-block">
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-sky-400 via-fuchsia-400 to-indigo-400 opacity-80 blur-md" />
                  <img
                    src={avatarImage}
                    alt="Portrait of Jastegh Singh"
                    className="relative h-40 w-40 rounded-full border border-white/20 object-cover shadow-[0_18px_50px_rgba(15,23,42,0.9)] sm:h-44 sm:w-44"
                  />
                </div>
              </div>
              <div className="space-y-3">
                {/* <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-300">
                  Developer snapshot
                </p> */}
                {/* <p className="text-sm leading-relaxed text-slate-200/90 sm:text-[0.95rem]">
                  I enjoy taking ideas from rough sketches to reliable, well-structured solutions
                  that feel good to use. I&apos;m comfortable moving between frontend polish and
                  backend details, and I care about building things that last.
                </p>
                <p className="text-xs text-slate-400">
                  Outside of coding, I keep learning—experimenting with new tools, patterns, and
                  ways to make complex experiences feel simple.
                </p>
              </div>
            </div>
          </motion.div> */} 



          <div className="p-6 bg-gray-800 rounded-lg shadow-md max-w-lg mx-auto">
          <img
            src={avatarImage}
            alt="Avatar"
            className="mx-auto mb-4  border-4 border-gray-600 shadow-lg"
            style={{ width: '14.5rem', height: '14.5rem' }}
          />
          <p className="text-lg leading-relaxed">
            I’m a curious and adaptable developer who enjoys working on diverse projects. 
            From building tools and applications to solving technical challenges, 
            I approach my work with focus and practicality. 
            I value continuous learning and enjoy tackling new problems that expand 
            my understanding and skills. With a strong passion for coding, 
            I aim to create impactful solutions and contribute to meaningful projects.
          </p>
        </div>

          {/* Skills card */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 0.9, 0.3, 1] }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.95)] backdrop-blur-xl sm:p-7 lg:p-8"
          >
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_0%_0%,rgba(56,189,248,0.4),transparent_55%),radial-gradient(circle_at_100%_0%,rgba(244,114,182,0.35),transparent_55%)] opacity-70 mix-blend-soft-light" />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-300">
                Stack
              </p>
              <h3 className="mt-2 text-lg font-semibold text-slate-50 sm:text-xl">
                Tools I&apos;m comfortable shipping with
              </h3>
              <div className="mt-6 grid grid-cols-3 gap-4 sm:grid-cols-4">
                {skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ y: -4, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 320, damping: 18 }}
                    className="group flex flex-col items-center gap-1 rounded-2xl border border-white/5 bg-slate-950/40 px-3 py-3 text-center text-xs text-slate-100 shadow-[0_12px_30px_rgba(15,23,42,0.9)]"
                  >
                    <div className="transition-transform duration-300 group-hover:scale-110">
                      {skill.icon}
                    </div>
                    <span className="mt-1 text-[0.7rem] font-medium text-slate-200/90">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;