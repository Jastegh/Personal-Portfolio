import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const contactLinks = [
  {
    label: "Email",
    detail: "jasteghsingh04@gmail.com",
    href: "mailto:jasteghsingh04@gmail.com",
    icon: FaEnvelope,
  },
  {
    label: "GitHub",
    detail: "github.com/Jastegh",
    href: "https://github.com/Jastegh",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    detail: "linkedin.com/in/jastegh",
    href: "https://www.linkedin.com/in/jastegh/",
    icon: FaLinkedin,
  },
];

const Contact = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const response = await fetch("https://formspree.io/f/xpwwknqj", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    });

    if (response.ok) {
      alert("Message sent successfully!");
      event.target.reset();
    } else {
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="section-surface-contact border-t border-white/[0.05] py-14 text-white sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 0.9, 0.3, 1] }}
          className="card-border-animated rounded-3xl p-[1px]"
        >
          <div className="grid overflow-hidden rounded-[1.4rem] bg-slate-950/90 shadow-[0_24px_70px_rgba(2,6,23,0.45)] lg:grid-cols-[0.8fr_1.2fr]">
            <div className="relative overflow-hidden border-b border-white/10 px-6 py-8 sm:px-8 lg:border-b-0 lg:border-r lg:px-9 lg:py-10">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_5%_0%,rgba(56,189,248,0.13),transparent_56%)]" />
              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-300">
                  Contact
                </p>
                <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
                  Let&apos;s talk.
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-slate-300">
                  Email me directly or use the form.
                </p>

                <div className="mt-8 flex flex-col gap-3">
                  {contactLinks.map(({ label, detail, href, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group flex items-center gap-3 rounded-xl border border-white/[0.08] bg-slate-950/50 px-4 py-3.5 transition hover:border-sky-300/30 hover:bg-slate-900/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-sky-300/15 bg-sky-400/10 text-sky-300 transition group-hover:bg-sky-400/15">
                        <Icon aria-hidden="true" className="h-4 w-4" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs font-medium text-slate-400">{label}</span>
                        <span className="block truncate text-sm text-slate-100">{detail}</span>
                      </span>
                    </a>
                  ))}
                </div>

                <p className="mt-7 text-xs text-slate-400">Replies usually within 1–2 days.</p>
              </div>
            </div>

            <form className="flex flex-col gap-5 px-6 py-8 sm:px-8 lg:px-10 lg:py-10" onSubmit={handleSubmit}>
              <h3 className="text-lg font-semibold text-slate-100">Send a message</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-2 text-sm">
                  <label htmlFor="name" className="text-xs font-medium text-slate-200">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className="rounded-lg border border-slate-700/80 bg-slate-900/70 px-3 py-3.5 text-sm text-white placeholder:text-slate-500 focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2 text-sm">
                  <label htmlFor="email" className="text-xs font-medium text-slate-200">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    className="rounded-lg border border-slate-700/80 bg-slate-900/70 px-3 py-3.5 text-sm text-white placeholder:text-slate-500 focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 text-sm">
                <label htmlFor="message" className="text-xs font-medium text-slate-200">
                  Project or message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me a bit about what you have in mind."
                  rows={6}
                  className="resize-none rounded-lg border border-slate-700/80 bg-slate-900/70 px-3 py-3.5 text-sm text-white placeholder:text-slate-500 focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400"
                  required
                />
              </div>
              <div className="mt-auto flex justify-end pt-1">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-sky-400 px-7 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-950 shadow-[0_18px_45px_rgba(56,189,248,0.28)] transition hover:bg-sky-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
