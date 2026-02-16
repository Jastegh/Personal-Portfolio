import React from "react";
import { motion } from "framer-motion";

const Certificates = () => {
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
      className="bg-gradient-to-b from-black via-slate-950 to-black py-16 text-white sm:py-20 lg:py-24"
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
            Certifications
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            Skills & credentials.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300/90 sm:text-base">
            A quick snapshot of cloud and technical certifications.
          </p>
        </motion.div>

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

