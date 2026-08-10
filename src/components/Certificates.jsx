import React from "react";
import { motion } from "framer-motion";

const Certificates = () => {
  const achievement = {
    title: "3rd Place — Cursor Hackathon",
    project: "Buffer",
    description:
      "a cash-flow forecasting tool that helps irregular-income workers anticipate financial shortfalls.",
    date: "July 2026",
    format: "Solo project",
    field: "Approximately 60 entries",
    repository: "https://github.com/Jastegh/Buffer",
  };

  const certificates = [
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "Jan 2026",
    },
    {
      name: "Prediction and Control with Function Approximation",
      issuer: "Amii (Alberta Machine Intelligence Institute)",
      date: "Dec 2023",
    },
    {
      name: "Sample-based Learning Methods",
      issuer: "Amii (Alberta Machine Intelligence Institute)",
      date: "Nov 2023",
    },
    {
      name: "Fundamentals of Reinforcement Learning",
      issuer: "Amii (Alberta Machine Intelligence Institute)",
      date: "Oct 2023",
    },
  ];

  return (
    <section
      id="certificates"
      className="section-surface-credentials border-t border-white/[0.05] py-16 text-white sm:py-20 lg:py-24"
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
            Recognition & certifications
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            Achievements & credentials.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300/90 sm:text-base">
            Competition recognition alongside cloud and technical certifications.
          </p>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.08, duration: 0.6, ease: [0.22, 0.9, 0.3, 1] }}
          className="relative overflow-hidden rounded-2xl border border-sky-300/25 bg-[radial-gradient(circle_at_0%_0%,rgba(56,189,248,0.2),transparent_48%),linear-gradient(135deg,rgba(15,23,42,0.95),rgba(15,23,42,0.72))] p-5 shadow-[0_20px_60px_rgba(15,23,42,0.9)] sm:p-6"
        >
          <div className="pointer-events-none absolute -right-14 -top-20 h-48 w-48 rounded-full border border-sky-300/10" />
          <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-300">
                Featured recognition
              </p>
              <h3 className="mt-2 text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
                {achievement.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                Built <span className="font-semibold text-slate-100">{achievement.project}</span>,{" "}
                {achievement.description}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-2">
                {[achievement.date, achievement.format, achievement.field].map((detail) => (
                  <span
                    key={detail}
                    className="rounded-full border border-white/10 bg-slate-950/50 px-3 py-1.5 text-xs font-medium text-slate-300"
                  >
                    {detail}
                  </span>
                ))}
                <a
                  href={achievement.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-sky-300/30 bg-sky-400/10 px-3 py-1.5 text-xs font-semibold text-sky-200 transition hover:border-sky-300/50 hover:bg-sky-400/15 hover:text-sky-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                >
                  Repository <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>

            <div
              aria-hidden="true"
              className="flex h-16 w-16 shrink-0 flex-col items-center justify-center self-start rounded-full border border-sky-300/30 bg-sky-400/10 text-sky-200 shadow-[0_0_35px_rgba(56,189,248,0.12)] sm:self-auto"
            >
              <span className="text-2xl font-semibold leading-none">3rd</span>
              <span className="mt-1 text-[0.5rem] font-semibold uppercase tracking-[0.2em]">
                Place
              </span>
            </div>
          </div>
        </motion.article>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 0.9, 0.3, 1] }}
          className="grid gap-6 sm:grid-cols-2"
        >
          {certificates.map((cert) => (
            <div
              key={cert.name}
              className="flex flex-col justify-between rounded-2xl border border-white/10 bg-slate-900/70 p-5 shadow-[0_18px_60px_rgba(15,23,42,0.9)] backdrop-blur-xl"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
                  {cert.issuer}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-slate-50">{cert.name}</h3>
              </div>
              <p className="mt-4 text-xs text-slate-400">{cert.date}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
