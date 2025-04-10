import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt, FaArrowUp } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { useTheme } from "../utils/ThemeContext";
import { scrollToSection } from "../utils/scrollHelper";
import useInView from "../utils/useInView";

const Footer = () => {
  const { darkMode } = useTheme();
  const [sectionRef, isInView] = useInView({ threshold: 0.1 });
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' }
  ];

  const handleNavClick = (e, id) => {
    e.preventDefault();
    scrollToSection(id);
  };

  return (
    <footer 
      ref={sectionRef}
      id="contact" 
      className={`${
        darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'
      } transition-colors duration-300`}
    >
      <div className="container mx-auto px-6 py-16">
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transform transition-all duration-700 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Tejas</h3>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Full Stack Engineer & Cloud Computing Professional
            </p>
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-blue-500" />
              <span className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                India
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleNavClick(e, link.id)}
                    className={`${
                      darkMode 
                        ? 'text-gray-300 hover:text-white' 
                        : 'text-gray-600 hover:text-gray-900'
                    } transition-colors duration-300`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Contact</h3>
            <div className="space-y-2">
              <a
                href="mailto:tejastr888@gmail.com"
                className={`flex items-center space-x-2 ${
                  darkMode 
                    ? 'text-gray-300 hover:text-blue-400' 
                    : 'text-gray-600 hover:text-blue-600'
                } transition-colors duration-300`}
              >
                <FaEnvelope />
                <span>tejastr888@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://leetcode.com/u/tejasacharya078/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  darkMode 
                    ? 'text-gray-300 hover:text-yellow-400' 
                    : 'text-gray-600 hover:text-yellow-500'
                } transition-colors duration-300 text-2xl`}
                aria-label="LeetCode"
              >
                <SiLeetcode />
              </a>
              <a
                href="https://www.linkedin.com/in/tejastr888/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  darkMode 
                    ? 'text-gray-300 hover:text-blue-400' 
                    : 'text-gray-600 hover:text-blue-600'
                } transition-colors duration-300 text-2xl`}
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/Tejastr888"
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  darkMode 
                    ? 'text-gray-300 hover:text-gray-100' 
                    : 'text-gray-600 hover:text-gray-900'
                } transition-colors duration-300 text-2xl`}
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        {/* Back to Top & Copyright */}
        <div className={`mt-12 pt-8 border-t ${
          darkMode ? 'border-gray-800' : 'border-gray-200'
        } flex flex-col items-center space-y-4`}>
          <button
            onClick={(e) => handleNavClick(e, 'home')}
            className={`p-2 rounded-full ${
              darkMode 
                ? 'bg-gray-800 hover:bg-gray-700 text-gray-300' 
                : 'bg-gray-200 hover:bg-gray-300 text-gray-600'
            } transition-all duration-300 hover:scale-110`}
            aria-label="Back to top"
          >
            <FaArrowUp className="w-5 h-5" />
          </button>
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            &copy; {currentYear} Tejas. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
