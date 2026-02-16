import { motion } from "framer-motion";

const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const response = await fetch("https://formspree.io/f/xpwwknqj", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    });

    if (response.ok) {
      alert("Message sent successfully!");
      e.target.reset();
    } else {
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <section
      id="contact"
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
            Contact
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            Let&apos;s talk.
          </h2>
          {/* about what you&apos;re building */}
          {/* <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300/90 sm:text-base">
            Whether it&apos;s a new product, an internal tool, or making an existing experience
            feel sharper, I&apos;m happy to dive into the details.
          </p> */}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: [0.22, 0.9, 0.3, 1] }}
          className="max-w-3xl"
        >
          <div className="card-border-animated rounded-3xl p-[1px]">
            <div className="relative rounded-[1.4rem] bg-slate-950/90 px-6 py-6 shadow-[0_20px_70px_rgba(15,23,42,0.9)] sm:px-7 sm:py-7">
              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
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
                      className="rounded-lg border border-slate-700/80 bg-slate-900/70 px-3 py-3 text-sm text-white placeholder:text-slate-500 focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400"
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
                      className="rounded-lg border border-slate-700/80 bg-slate-900/70 px-3 py-3 text-sm text-white placeholder:text-slate-500 focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400"
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
                    rows={4}
                    className="resize-none rounded-lg border border-slate-700/80 bg-slate-900/70 px-3 py-3 text-sm text-white placeholder:text-slate-500 focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400"
                    required
                  />
                </div>
                <div className="mt-2 flex items-center justify-between gap-4 text-xs text-slate-400">
                  <p>Replies usually within 1–2 days.</p>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-full bg-sky-400 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-950 shadow-[0_18px_45px_rgba(56,189,248,0.35)] transition hover:bg-sky-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;











// const Contact = () => {
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData(e.target);
//     const response = await fetch("https://formspree.io/f/xpwwknqj", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//       },
//       body: formData,
//     });

//     if (response.ok) {
//       alert("Message sent successfully!");
//       e.target.reset();
//     } else {
//       alert("Failed to send message. Please try again.");
//     }
//   };

//   return (
//     <section id="contact" className="bg-gray-800 text-white py-10">
//       {/* Outer container with reduced width */}
//       <div className="max-w-5xl mx-auto p-6 rounded-lg bg-gray-900">
//         <h2 className="text-4xl font-bold mb-6 text-center">Contact Me</h2>
//         <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             className="p-4 rounded bg-gray-700 text-white"
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Your Email"
//             className="p-4 rounded bg-gray-700 text-white"
//             required
//           />
//           <textarea
//             name="message"
//             placeholder="Your Message"
//             rows="4"
//             className="p-4 rounded bg-gray-700 text-white"
//             required
//           ></textarea>
//           <button
//             type="submit"
//             className="p-4 bg-blue-500 rounded text-white hover:bg-blue-600"
//           >
//             Send Message
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Contact;
