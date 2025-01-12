import React from 'react';

const Skills = () => {
  const skills = [
    {
      category: 'Frontend Development',
      items: [
        { name: 'HTML', level: 'Experienced' },
        { name: 'CSS', level: 'Experienced' },
        { name: 'JavaScript', level: 'Intermediate' },
        { name: 'React', level: 'Intermediate' },
        { name: 'Tailwind CSS', level: 'Intermediate' },
      ],
    },
    {
      category: 'Backend Development',
      items: [
        { name: 'Node.js', level: 'Intermediate' },
        { name: 'Express.js', level: 'Intermediate' },
        { name: 'PostgreSQL', level: 'Basic' },
        { name: 'Git', level: 'Intermediate' },
        { name: 'REST APIs', level: 'Intermediate' },
      ],
    },
  ];

  return (
    <section id="skills" className="p-10 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-8">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skillCategory, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">{skillCategory.category}</h3>
            <ul>
              {skillCategory.items.map((skill, i) => (
                <li
                  key={i}
                  className="flex justify-between py-2 border-b border-gray-700"
                >
                  <span>{skill.name}</span>
                  <span className="text-sm text-gray-400">{skill.level}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
