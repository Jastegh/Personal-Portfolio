import React from "react";
import ibm from "/src/assets/ibmlogo.png";
import knok from "/src/assets/knoklife_logo.png";
import UofA from "/src/assets/UofA.png";
import fluenty from "/src/assets/fluenty.png";
import { motion } from "framer-motion";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const WorkExperience = () => {
  const experiences = [
    {
      title: "Software Developer",
      company: "IBM",
      date: "September 2025 – Present",
      description: (
        <ul className="mt-3 list-disc pl-5 text-sm leading-relaxed text-slate-200">
          {/* <li>Add a short summary of your IBM role here.</li>
          <li>Highlight 1–2 key projects, technologies, or impacts.</li>
          <li>Focus on measurable outcomes or responsibilities.</li> */}
        </ul>
      ),
      logo: ibm,
    },
    {
      title: "Software Developer",
      company: "Fluenty",
      date: "January 2025 – April 2025",
      description: (
        <ul className="mt-3 list-disc pl-5 text-base leading-relaxed text-slate-200">
          <li>
            Led the development of a web-based learning platform, managing a cross-functional team
            of developers and educators to enhance English learning for over 20,000 students.
          </li>
          <li>
            Implemented AI-based recommendation algorithms for personalized learning, real-time
            progress tracking, and optimized backend performance (Django, Supabase, WebSockets),
            improving student engagement by 40%.
          </li>
          <li>
            As a Product Owner, managed task delegation and sprint planning across a team of 8
            developers, overcoming challenges to improve sprint efficiency and cross-team
            collaboration.
          </li>
        </ul>
      ),
      logo: fluenty,
    },
    {
      title: "Machine Learning Engineer",
      company: "UofA CS",
      date: "Jan 2025 – Apr 2025",
      description: (
        <ul className="mt-3 list-disc pl-5 text-base leading-relaxed text-slate-200">
          <li>
            Developed streaming and batch RL agents using Stream-Q(λ), evaluating them in partially
            observable T-maze environments; eLSTM-RTRL agents achieved up to 40% faster convergence
            than BPTT in long-horizon tasks.
          </li>
          <li>
            Implemented and benchmarked RTRL-based eLSTM and RTU architectures on sequence
            prediction (Copy Task), achieving &gt;95% accuracy with eLSTM, demonstrating improved
            memory retention over RTUs.
          </li>
          <li>
            Applied Real-Time Recurrent Learning (RTRL) for fully online gradient updates, enabling
            RL agents to learn in partially observable environments without replay buffers,
            improving learning efficiency in POMDP settings.
          </li>
        </ul>
      ),
      logo: UofA,
    },
    {
      title: "Sales Manager",
      company: "Knok-TELUS",
      date: "Jun 2022 – Sep 2024",
      description: (
        <ul className="mt-3 list-disc pl-5 text-base leading-relaxed text-slate-200">
          <li>
            Achieved over $500,000 in revenue through effective sales strategies, consistently
            meeting and exceeding targets.
          </li>
          <li>
            Co-managed a team of 12 sales representatives, providing training and in-depth product
            knowledge to enhance team performance and drive overall sales growth.
          </li>
          <li>
            Sold a full range of Telus products, with a primary focus on security alarm systems, by
            directly engaging and building relationships with customers to understand and meet
            their needs.
          </li>
        </ul>
      ),
      logo: knok,
    },
  ];

  return (
    <section
      id="work-experience"
      className="bg-gradient-to-b from-black via-slate-950 to-black py-16 text-white sm:py-20 lg:py-24"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 0.9, 0.3, 1] }}
          className="max-w-2xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-300">Experience</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            Work experience so far.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300/90 sm:text-base">
            A mix of engineering, research, and customer-facing work across different contexts.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: [0.22, 0.9, 0.3, 1] }}
          className="card-border-animated rounded-3xl p-[1px]"
        >
          <div className="rounded-[1.4rem] bg-slate-950/90 px-4 py-8 shadow-[0_24px_80px_rgba(15,23,42,1)] sm:px-8 sm:py-10">
            <VerticalTimeline animate={false} lineColor="rgba(148,163,184,0.35)">
              {experiences.map((exp, index) => (
                <VerticalTimelineElement
                  key={exp.company + index}
                  contentStyle={{
                    background: "rgba(15,23,42,0.95)",
                    color: "#e5e7eb",
                    borderRadius: "1.2rem",
                    border: "1px solid rgba(148,163,184,0.35)",
                    boxShadow: "0 16px 60px rgba(15,23,42,0.9)",
                  }}
                  contentArrowStyle={{ borderRight: "7px solid rgba(15,23,42,0.95)" }}
                  date={exp.date}
                  icon={
                    <div className="flex h-full w-full items-center justify-center">
                      {exp.logo ? (
                        <img
                          src={exp.logo}
                          alt={exp.company}
                          className="h-10 w-10 rounded-full object-contain"
                        />
                      ) : (
                        <span className="text-[0.6rem] font-semibold text-slate-100">
                          {exp.company}
                        </span>
                      )}
                    </div>
                  }
                  iconStyle={{
                    background: "rgba(15,23,42,1)",
                    boxShadow: "0 0 0 4px rgba(15,23,42,1), 0 0 0 6px rgba(56,189,248,0.5)",
                  }}
                >
                  <h3 className="text-lg font-semibold text-slate-50 sm:text-xl">
                    {exp.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-slate-300">{exp.company}</p>
                  {exp.description}
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkExperience;







// const WorkExperience = () => {
//   return (
//     // <section id="work-experience" className="p-10 bg-gray-900 text-white">
//     <section id="work-experience" className="p-10 bg-gradient-to-b from-gray-800 to-black text-white">

//       <h2 className="text-5xl font-bold text-center mb-12 text-purple-100">My Work Experience</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Left Section - Placeholder for 3D Model or Image */}
//         <div className="flex justify-center items-center">
//           {/* Add an image or leave this for a future enhancement */}
//           {/* <img
//             src="https://via.placeholder.com/300" // Replace with your image path
//             alt="3D Model or Placeholder"
//             className="rounded-lg shadow-lg max-h-[400px] object-cover"
//           /> */}
//         </div>

//         {/* Right Section - Work Experience */}
//         <div className="flex flex-col gap-6">

//           {/* Experience 1 */}
//           <div className="flex items-start bg-gray-800 p-6 rounded-lg shadow-md">
//             {/* Icon or Logo */}

//             <img
//             src={fluenty}
//             alt="Fluenty Logo"
//             className="w-12 h-12 rounded-full mr-4 object-cover"
//             />
//             <div>
//               <h3 className="text-xl font-bold">Fluenty</h3>
//               <p className="text-sm text-gray-400">
//                 Software Developer — Janauary 2024 - Present
//               </p>
//               <p className="text-gray-300 mt-4">Led the development of a web-based platform for Fluenty, enabling Brazilian students to connect with native Canadian English speakers. My work included designing and implementing key features such as session scheduling with Zoom/Google Meet integration, gamified learning tools, and progress tracking with detailed analytics. I also integrated AI-driven personalized feedback to optimize learning outcomes. The project emphasized usability, security, and scalability, ensuring a seamless experience for school administrators, instructors, and students across desktop and mobile platforms.</p>
//             </div>
//           </div>


//           {/* Experience 2 */}
//           <div className="flex items-start bg-gray-800 p-6 rounded-lg shadow-md">
//             {/* Icon or Logo */}
//             <img
//             src={knok}
//             alt="Knok"
//             className="w-12 h-12 rounded-full mr-4 object-cover"
//             />
//             <div>
//               <h3 className="text-xl font-bold">Knok-TELUS</h3>
//               <p className="text-sm text-gray-400">
//                 Sales Manager — June 2022 - September 2024
//               </p>
//               <ul className="list-disc text-gray-300 pl-5 mt-4">
//                 <li>
//                   Achieved over $500,000 in revenue through effective sales
//                   strategies, consistently meeting and exceeding targets.
//                 </li>
//                 <li>
//                   Co-managed a team of 12 sales representatives, providing
//                   training and in-depth product knowledge to enhance team
//                   performance and drive overall sales growth.
//                 </li>
//                 <li>
//                   Sold a full range of Telus products, with a primary focus on
//                   security alarm systems, by directly engaging and building
//                   relationships with customers to understand and meet their
//                   needs.
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WorkExperience;
