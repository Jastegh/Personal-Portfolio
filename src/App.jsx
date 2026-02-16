import { useRef, useEffect } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectsCarousel from './components/ProjectsCarousel';
import WorkExperience from './components/WorkExperience';
import Certificates from './components/Certificates';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from 'framer-motion';

const heroTitle = "Hi, I'm Jastegh";
const heroSubtitle = 'Crafting reliable, thoughtful experiences for the web.';

const heroEase = [0.22, 0.9, 0.3, 1];
const heroDuration = 0.7;

function SignatureVisual({ prefersReducedMotion }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let frameId;
    let width = (canvas.width = canvas.offsetWidth * window.devicePixelRatio);
    let height = (canvas.height = canvas.offsetHeight * window.devicePixelRatio);

    const particleCount = 95;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      r: 1 + Math.random() * 2,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // background glow
      const gradient = ctx.createRadialGradient(
        width * 0.2,
        height * 0.1,
        0,
        width * 0.2,
        height * 0.1,
        width * 0.8,
      );
      gradient.addColorStop(0, 'rgba(56,189,248,0.5)');
      gradient.addColorStop(1, 'rgba(15,23,42,0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // particles
      ctx.fillStyle = 'rgba(226,232,240,0.9)';
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });

      // soft connections
      ctx.strokeStyle = 'rgba(148,163,184,0.35)';
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i += 1) {
        for (let j = i + 1; j < particles.length; j += 1) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distSq = dx * dx + dy * dy;
          const maxDist = width * 0.12;
          if (distSq < maxDist * maxDist) {
            const alpha = 1 - distSq / (maxDist * maxDist);
            ctx.globalAlpha = alpha * 0.7;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;

      frameId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      height = canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) {
    return (
      <div className="h-full w-full bg-[radial-gradient(circle_at_15%_0%,rgba(56,189,248,0.45),transparent_55%),radial-gradient(circle_at_85%_100%,rgba(56,189,248,0.35),transparent_55%)]" />
    );
  }

  return <canvas ref={canvasRef} className="h-full w-full" />;
}

function MagneticButton({ href, children, variant = 'primary' }) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 24, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 300, damping: 24, mass: 0.4 });

  const handleMouseMove = (event) => {
    if (prefersReducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = event.clientX - (rect.left + rect.width / 2);
    const relY = event.clientY - (rect.top + rect.height / 2);
    const strength = 0.35;

    x.set(relX * strength);
    y.set(relY * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const baseClasses =
    'relative inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-medium tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 focus-visible:ring-sky-400 transition-colors';

  const variantClasses =
    variant === 'primary'
      ? 'bg-sky-400 text-slate-950 shadow-[0_18px_45px_rgba(56,189,248,0.35)] hover:bg-sky-300'
      : 'border border-slate-300/30 bg-slate-900/60 text-slate-50 hover:bg-slate-800/80';

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={prefersReducedMotion ? undefined : { x: springX, y: springY }}
      whileHover={prefersReducedMotion ? { scale: 1.02 } : { scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      className={`group ${baseClasses} ${variantClasses}`}
    >
      <span className="relative z-10">{children}</span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-full bg-sky-300/50 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100"
      />
    </motion.a>
  );
}

function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const lightX = useSpring(mouseX, { stiffness: 120, damping: 22, mass: 0.6 });
  const lightY = useSpring(mouseY, { stiffness: 120, damping: 22, mass: 0.6 });

  const spotlightGradient = useMotionTemplate`radial-gradient(circle at ${lightX * 100}% ${lightY * 100}%, rgba(56, 189, 248, 0.6), transparent 55%)`;

  const handleMouseMove = (event) => {
    if (prefersReducedMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const titleContainerVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: heroDuration,
        ease: heroEase,
        staggerChildren: prefersReducedMotion ? 0 : 0.03,
      },
    },
  };

  const charVariants = {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: heroDuration,
        ease: heroEase,
      },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.25,
        duration: heroDuration,
        ease: heroEase,
      },
    },
  };

  const ctaVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
        duration: heroDuration,
        ease: heroEase,
      },
    },
  };

  const visualVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: 0.4,
        duration: heroDuration,
        ease: heroEase,
      },
    },
  };

  return (
    <header
      id="top"
      className="hero-shell relative min-h-screen bg-slate-950 text-white"
      onMouseMove={handleMouseMove}
    >
      {/* Layered background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="hero-mesh" />
        <div className="hero-grid" />
        <div className="hero-noise" />
      </div>

      {/* Mouse-follow spotlight */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 mix-blend-screen opacity-70"
        style={prefersReducedMotion ? { opacity: 0 } : { backgroundImage: spotlightGradient }}
      />

      {/* Signature visual as full-section background */}
      <motion.div
        aria-hidden="true"
        initial="hidden"
        animate="visible"
        variants={visualVariants}
        className="pointer-events-none absolute inset-0 opacity-75"
      >
        <SignatureVisual prefersReducedMotion={prefersReducedMotion} />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col">
        <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-6 pt-24 pb-16 md:px-10 lg:px-16 lg:pt-32">
          <div className="space-y-8 md:space-y-9">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={titleContainerVariants}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/70 px-4 py-1 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-slate-200/90 backdrop-blur-md"
            >
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.8)]" />
              <span className="align-middle">Creative developer & builder</span>
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={titleContainerVariants}
              className="text-balance text-4xl font-semibold leading-tight tracking-tight text-slate-50 sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              {heroTitle.split('').map((char, index) => (
                <motion.span
                  key={index}
                  variants={charVariants}
                  className="inline-block bg-gradient-to-br from-sky-300 via-sky-50 to-sky-400 bg-clip-text text-transparent will-change-transform"
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={subtitleVariants}
              className="max-w-xl text-balance text-sm text-slate-200/90 sm:text-base md:text-lg"
            >
              {heroSubtitle}
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={ctaVariants}
              className="flex flex-wrap items-center gap-4"
            >
              <MagneticButton href="#projects" variant="primary">
                View my work
              </MagneticButton>
              <MagneticButton href="#contact" variant="ghost">
                Let&apos;s collaborate
              </MagneticButton>
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <About />
      <ProjectsCarousel />
      <WorkExperience />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
}
