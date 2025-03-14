import React from "react";
import knok from '/src/assets/knoklife_logo.png'
import dataglacier from '/src/assets/data_glacier.png'
import UofA from '/src/assets/UofA.png'
import fluenty from '/src/assets/fluenty.png'
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
      company: "Fluenty",
      date: "January 2024 - Present",
      description: (
        <ul className="list-disc text-gray-300 pl-5 mt-4">
          <li>
          Led the development of a web-based platform for Fluenty, managing a cross-functional team of developers and
          educators to enhance English education for 20,000+ students.
          </li>
          <li>
          My work included designing and implementing key features such as session scheduling with Google Meet integration, AI-based recommendation algorithms for personalized learning, gamified learning tools, real-time progress tracking, and
          optimizing backend performance (Django, Supabse, WebSockets), improving student engagement by 40%
          </li>
          <li>
          As a Product Owner, managed task delegation and team alignment, overcoming challenges to improve sprint
          efficiency and cross-team collaboration.
          </li>
        </ul>
      ),
      logo: fluenty,
    },

    {
      title: "Machine Learning Engineer",
      company: "UofA CS",
      date: "Jan 2024 - April 2025",
      description: (
        <ul className="list-disc text-gray-300 pl-5 mt-4">
          <li>
          Developed a real-time reinforcement learning (RL) system for decision-making in partially observable environments,
          optimizing reward functions and adaptability using eLSTM and RTUs.
          </li>
          <li>
          Designed and implemented Streaming Deep RL architectures in Python, and PyTorch achieving a 30%
          improvement in reward optimization on benchmark POMDP tasks.
          </li>
          <li>
          Applied Real-Time Recurrent Learning (RTRL) to train deep RL models efficiently in streaming settings,
          eliminating the need for replay buffers.
          </li>
        </ul>
      ),
      logo: UofA,
    },

    {
      title: "Sales Manager",
      company: "Knok-TELUS",
      date: "June 2022 - September 2024",
      description: (
        <ul className="list-disc text-gray-300 pl-5 mt-4">
          <li>
            Achieved over $500,000 in revenue through effective sales strategies, consistently meeting and exceeding targets.
          </li>
          <li>
            Co-managed a team of 12 sales representatives, providing training and in-depth product knowledge to enhance team performance and drive overall sales growth.
          </li>
          <li>
            Sold a full range of Telus products, with a primary focus on security alarm systems, by directly engaging and building relationships with customers to understand and meet their needs.
          </li>
        </ul>
      ),
      logo: knok,
    },
  ];

  return (
    <section id="work-experience" className="p-10 bg-gradient-to-b from-gray-800 to-black text-white">
      <h2 className="text-5xl font-bold text-center mb-12 text-purple-100">My Work Experience</h2>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <VerticalTimeline>
          {experiences.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              contentStyle={{ background: "#2d3748", color: "#fff" }}  // #1d1836
              contentArrowStyle={{ borderRight: "7px solid  #232631" }}
              date={exp.date}
              icon={
                <div className="flex justify-center items-center w-full h-full">
                  <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain rounded-full" />
                </div>
              }
            >
              <h3 className="text-white text-[24px] font-bold">{exp.title}</h3>
              <p className="text-secondary text-[16px] font-semibold">{exp.company}</p>
              <p className="text-gray-300 mt-4">{exp.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </motion.div>
      
      {/* <div className="mt-8 flex justify-center">
        <a
          href="https://linkedin.com/in/jastegh"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
        >
          View More on LinkedIn
        </a>
      </div> */}

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
