import { motion, useReducedMotion } from "framer-motion";
import {
  FaCss3Alt,
  FaDatabase,
  FaFigma,
  FaGitAlt,
  FaHtml5,
  FaJava,
  FaJsSquare,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import {
  SiAmazonwebservices,
  SiCplusplus,
  SiDatadog,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
} from "react-icons/si";

const reveal = (prefersReducedMotion, delay = 0) => ({
  initial: { opacity: 0, y: prefersReducedMotion ? 0 : 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.22 },
  transition: {
    delay,
    duration: prefersReducedMotion ? 0.01 : 0.65,
    ease: [0.22, 0.9, 0.3, 1],
  },
});

const skills = [
  {
    name: "AWS",
    icon: <SiAmazonwebservices className="text-3xl text-orange-400" />,
  },
  { name: "Python", icon: <FaPython className="text-3xl text-blue-400" /> },
  { name: "Java", icon: <FaJava className="text-3xl text-red-400" /> },
  { name: "C++", icon: <SiCplusplus className="text-3xl text-blue-500" /> },
  { name: "SQL", icon: <FaDatabase className="text-3xl text-blue-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-3xl text-green-500" /> },
  { name: "HTML", icon: <FaHtml5 className="text-3xl text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-3xl text-blue-500" /> },
  {
    name: "JavaScript",
    icon: <FaJsSquare className="text-3xl text-yellow-400" />,
  },
  { name: "React", icon: <FaReact className="text-3xl text-sky-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-3xl text-green-500" /> },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-3xl text-teal-400" />,
  },
  { name: "Datadog", icon: <SiDatadog className="text-3xl text-purple-400" /> },
  { name: "Git", icon: <FaGitAlt className="text-3xl text-red-400" /> },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="text-3xl text-blue-500" />,
  },
  { name: "Figma", icon: <FaFigma className="text-3xl text-pink-400" /> },
];

const About = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="section-surface-about border-t border-white/10 py-16 text-white sm:py-20 lg:py-28"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 md:px-10 lg:px-16">
        <motion.div {...reveal(prefersReducedMotion)} className="max-w-3xl">
          <p className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-sky-300">
            About
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight tracking-[-0.035em] text-slate-50 sm:text-4xl lg:text-5xl">
            About me.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            I enjoy understanding how software works end to end, then making it clearer, more
            dependable, and easier to use.
          </p>
        </motion.div>

        <motion.div
          {...reveal(prefersReducedMotion, 0.05)}
          className="grid gap-6 border-y border-white/[0.08] py-8 text-[0.98rem] leading-7 text-slate-300 sm:py-10 sm:text-base sm:leading-8 md:grid-cols-2 md:gap-10"
        >
          <p>
            I&apos;m a software developer whose experience spans cloud operations, full-stack
            development, automation, systems programming, and applied machine-learning research.
            I&apos;m comfortable moving between investigating how a system behaves and building the
            software around it.
          </p>
          <p>
            I&apos;m drawn to practical problems where I can reduce ambiguity and leave something
            better than I found it—whether that means debugging an issue, removing repetitive work
            with a script, or taking a product from an early idea to a reliable implementation.
          </p>
        </motion.div>

        <motion.article
          {...reveal(prefersReducedMotion, 0.08)}
          className="rounded-[1.75rem] border border-white/[0.08] bg-[#08111e] p-5 sm:p-7 lg:p-8"
        >
          <p className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-sky-300">
            Stack
          </p>
          <h3 className="mt-2 text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            Skills &amp; tools
          </h3>

          <ul
            className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8"
            aria-label="Skills and tools"
          >
            {skills.map((skill) => (
              <motion.li
                key={skill.name}
                whileHover={prefersReducedMotion ? undefined : { y: -5, scale: 1.04 }}
                transition={{ type: "spring", stiffness: 320, damping: 18 }}
                className="group flex min-h-24 flex-col items-center justify-center gap-2 rounded-2xl border border-white/[0.07] bg-[#050c17] px-3 py-4 text-center shadow-[0_10px_24px_rgba(0,0,0,0.18)] transition-colors duration-300 hover:border-sky-300/25 hover:bg-[#0b1728]"
              >
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:scale-110"
                >
                  {skill.icon}
                </span>
                <span className="text-xs font-medium text-slate-200">{skill.name}</span>
              </motion.li>
            ))}
          </ul>
        </motion.article>
      </div>
    </section>
  );
};

export default About;
