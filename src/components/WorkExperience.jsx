import React from "react";

const WorkExperience = () => {
  return (
    // <section id="work-experience" className="p-10 bg-gray-900 text-white">
    <section id="work-experience" className="p-10 bg-gradient-to-b from-gray-800 to-black text-white">

      <h2 className="text-5xl font-bold text-center mb-12 text-purple-100">My Work Experience</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section - Placeholder for 3D Model or Image */}
        <div className="flex justify-center items-center">
          {/* Add an image or leave this for a future enhancement */}
          {/* <img
            src="https://via.placeholder.com/300" // Replace with your image path
            alt="3D Model or Placeholder"
            className="rounded-lg shadow-lg max-h-[400px] object-cover"
          /> */}
        </div>

        {/* Right Section - Work Experience */}
        <div className="flex flex-col gap-6">
          {/* Experience 1 */}
          <div className="flex items-start bg-gray-800 p-6 rounded-lg shadow-md">
            {/* Icon or Logo */}
            <img
              src="/src/assets/knoklife_logo.png" 
              alt="Company Logo"
              className="w-12 h-12 rounded-full mr-4 object-cover"
            />
            <div>
              <h3 className="text-xl font-bold">Company Name</h3>
              <p className="text-sm text-gray-400">
                Software Developer — December 2024 - Present
              </p>
              <p className="text-gray-300 mt-4">Description</p>
            </div>
          </div>

          {/* Experience 2 */}
          <div className="flex items-start bg-gray-800 p-6 rounded-lg shadow-md">
            {/* Icon or Logo */}
            <img
              src="/src/assets/knoklife_logo.png" // Replace with actual logo
              alt="Knok-TELUS Logo"
              className="w-12 h-12 rounded-full mr-4 object-cover"
            />
            <div>
              <h3 className="text-xl font-bold">Knok-TELUS</h3>
              <p className="text-sm text-gray-400">
                Sales Manager — June 2022 - September 2024
              </p>
              <ul className="list-disc text-gray-300 pl-5 mt-4">
                <li>
                  Achieved over $500,000 in revenue through effective sales
                  strategies, consistently meeting and exceeding targets.
                </li>
                <li>
                  Co-managed a team of 12 sales representatives, providing
                  training and in-depth product knowledge to enhance team
                  performance and drive overall sales growth.
                </li>
                <li>
                  Sold a full range of Telus products, with a primary focus on
                  security alarm systems, by directly engaging and building
                  relationships with customers to understand and meet their
                  needs.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
