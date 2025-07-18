import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCode,
  FaHeart,
  FaLaptopCode,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        {/* Top Section with Name and Social Links */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Monali Bawane
            </h2>
            <p className="text-gray-300 mt-2 flex items-center">
              <FaLaptopCode className="mr-2" />
              Web Developer passionate about creating beautiful experiences
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/monubawane2861"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition duration-300 transform hover:scale-110"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/monali-bawane-99bb892a7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition duration-300 transform hover:scale-110"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="mailto:monubawane21@gmail.com"
              className="text-gray-400 hover:text-blue-400 transition duration-300 transform hover:scale-110"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>

        {/* Middle Section with Bio and Contact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-t border-b border-gray-700">
          {/* About Section */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <FaHeart className="mr-2 text-red-400" /> About Me
            </h3>
            <p className="text-gray-400 leading-relaxed">
              I create responsive, user-friendly websites with a focus on clean
              code and modern design principles. Every pixel matters!
            </p>
          </div>

          {/* Quick Links */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <FaCode className="mr-2 text-green-400" /> Skills
            </h3>
            <ul className="text-gray-400">
              <li className="mb-2">React & Next.js</li>
              <li className="mb-2">Tailwind CSS</li>
              <li className="mb-2">JavaScript / TypeScript</li>
              <li className="mb-2">Responsive Design</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <FaEnvelope className="mr-2 text-yellow-400" /> Contact
            </h3>
            <p className="text-gray-400 flex items-center mb-2">
              <FaEnvelope className="mr-2" /> monubawane21@gmail.com
            </p>
            <p className="text-gray-400 flex items-center">
              <FaMapMarkerAlt className="mr-2" /> Maharashtra, India
            </p>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Monali Bawane. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Made with <span className="text-red-400">❤</span> and React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
