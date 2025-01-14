import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="container mx-auto flex flex-col items-center space-y-4 text-center">
      <div className="border-t border-gray-600 w-3/4 mx-auto my-6"></div>
        {/* Links with Icons */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/Jastegh"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white flex items-center space-x-2"
          >
            <FaGithub size={20} />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/jastegh/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white flex items-center space-x-2"
          >
            <FaLinkedin size={20} />
            <span>LinkedIn</span>
          </a>
          <a
            href="mailto:jasteghsingh04@gmail.com"
            className="hover:text-white flex items-center space-x-2"
          >
            <FaEnvelope size={20} />
            <span>Email</span>
          </a>
        </div>
        {/* Text */}
        <p className="text-sm">© 2025 Jastegh Singh. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
