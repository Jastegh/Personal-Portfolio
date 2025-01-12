// import { motion } from 'framer-motion';

// const About = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }} // Start off invisible and slightly below
//       animate={{ opacity: 1, y: 0 }}  // Fade in and move to its final position
//       transition={{ duration: 0.8 }}  // Animation duration in seconds
//       className="p-10 text-center bg-gray-100"
//     >
//       <h2 className="text-5xl font-bold mb-4">About Me</h2>
//       <p className="text-lg">
//       I’m a curious and adaptable developer who enjoys working on diverse projects. From building tools and applications to solving technical challenges, I approach my work with focus and practicality.
    
//       I value continuous learning and enjoy tackling new problems that expand my understanding and skills. My goal is to contribute to meaningful projects and work environments where I can grow while making a positive impact.
//       </p>
//     </motion.div>
//   );
// };

// export default About;




import React from 'react';
import avatarImage from '/src/assets/avatar.png'
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaPython, FaJava, FaFigma } from 'react-icons/fa';
import { SiTailwindcss, SiPostgresql, SiCplusplus, SiMysql, SiMongodb } from 'react-icons/si';

const About = () => {
  const skills = [
    { name: 'Python', icon: <FaPython className="text-blue-400 text-3xl" /> },
    { name: 'Java', icon: <FaJava className="text-red-500 text-3xl" /> },
    { name: 'C++', icon: <SiCplusplus className="text-blue-500 text-3xl" /> },
    { name: 'SQL', icon: <SiMysql className="text-blue-700 text-3xl" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-500 text-3xl" /> },
    { name: 'HTML', icon: <FaHtml5 className="text-orange-500 text-3xl" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-blue-500 text-3xl" /> },
    { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-400 text-3xl" /> },
    { name: 'React', icon: <FaReact className="text-blue-400 text-3xl" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-500 text-3xl" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400 text-3xl" /> },
    { name: 'Git', icon: <FaGitAlt className="text-red-500 text-3xl" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-600 text-3xl" /> },
    { name: 'Figma', icon: <FaFigma className="text-blue-500 text-3xl" /> },
  ];

  return (
    <section id="about" className="p-10 bg-gradient-to-b from-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 px-4">
        {/* About Me Card */}
        <div className="p-6 bg-gray-800 rounded-lg shadow-md max-w-lg mx-auto">
          <h2 className="text-3xl font-bold mb-4">Hi, I’m Jastegh Singh</h2>
          <img
            src={avatarImage}
            alt="Avatar"
            className="mx-auto mb-4  border-4 border-gray-600 shadow-lg"
            style={{ width: '12.5rem', height: '12.5rem' }}
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

        {/* Skills Card */}
        <div className="p-14 bg-gray-800 rounded-lg shadow-md max-w-lg mx-auto">
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <div className="grid grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-2 transform transition-transform duration-300 hover:scale-110"
              >
                {skill.icon}
                <span className="text-lg">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


