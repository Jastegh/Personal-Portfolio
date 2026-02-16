import React, { useEffect, useState } from "react";

const links = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#work-experience", label: "Work" },
  { href: "#certificates", label: "Certificates" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Optional: close mobile menu when user clicks outside / presses ESC
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Soft top fade so it blends into the hero */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/55 to-transparent" />

      {/* Glass bar */}
      <div
        className={[
          "relative transition-all backdrop-blur-xl",
          scrolled
            ? "border-b border-white/10 bg-slate-950/80 shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
            : "border-b border-white/5 bg-slate-950/35",
        ].join(" ")}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5 md:px-10 lg:px-16">
          {/* Brand */}
          <a
            href="#top"
            className="flex items-center gap-2 text-xs font-medium text-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded-md"
          >
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-sky-400/90 text-[0.75rem] font-semibold text-slate-950 shadow-[0_0_18px_rgba(56,189,248,0.65)]">
              JS
            </span>
            <span className="hidden flex-col leading-tight sm:inline-flex">
              <span className="text-[0.7rem] uppercase tracking-[0.2em] text-slate-400">
                Portfolio
              </span>
              <span className="text-sm font-semibold text-slate-100">Jastegh Singh</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden items-center gap-2 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative rounded-full px-3 py-2 text-[0.7rem] font-medium tracking-[0.18em] uppercase text-slate-200/80 transition
                           hover:bg-white/5 hover:text-sky-200
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-3 bottom-1 h-px origin-center scale-x-0 bg-white/30 transition-transform duration-200 group-hover:scale-x-100"
                />
              </a>
            ))}
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-slate-950/70 p-2 text-slate-100 shadow-sm transition
                       hover:bg-slate-900/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 md:hidden"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {menuOpen ? (
                <path
                  d="M6 18L18 6M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              ) : (
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="border-t border-white/10 bg-slate-950/92 px-6 pb-4 pt-2 shadow-lg md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-xl px-3 py-2 text-slate-200/90 transition hover:bg-white/5 hover:text-sky-200
                             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
