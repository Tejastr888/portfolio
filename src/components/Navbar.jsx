import { useState, useEffect } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaMoon,
  FaSun,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { useTheme } from "../utils/ThemeContext";
import { PERSONAL_INFO } from "../data/variables"

const Navbar = () => {
  const { darkMode, setDarkMode } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "About", "Projects", "Contact"];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? darkMode
              ? "bg-black/90 border-b border-gray-800"
              : "bg-white/90 border-b border-gray-200"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Left side - Name/Logo */}
            <div
              className={`text-xl font-medium ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              {PERSONAL_INFO.name}
            </div>

            {/* Center - Navigation Links */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`${
                    darkMode
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  } transition-colors duration-300`}
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Right side - Actions */}
            <div className="flex items-center space-x-4">
              {/* Social Links */}
              <div className="hidden md:flex items-center space-x-4">
                <a
                  href={PERSONAL_INFO.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${
                    darkMode
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  } transition-colors duration-300`}
                >
                  <SiLeetcode className="text-xl" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${
                    darkMode
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  } transition-colors duration-300`}
                >
                  <FaLinkedin className="text-xl" />
                </a>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${
                    darkMode
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  } transition-colors duration-300`}
                >
                  <FaGithub className="text-xl" />
                </a>
              </div>

              {/* Theme Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-full transition-colors duration-300 ${
                  darkMode
                    ? "bg-gray-800 text-yellow-400 hover:bg-gray-700"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
                aria-label="Toggle theme"
              >
                {darkMode ? (
                  <FaSun className="w-5 h-5" />
                ) : (
                  <FaMoon className="w-5 h-5" />
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-lg"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <FaTimes
                    className={`w-6 h-6 ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  />
                ) : (
                  <FaBars
                    className={`w-6 h-6 ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  />
                )}
              </button>

              {/* Contact Button - Desktop */}
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className={`hidden md:inline-flex items-center px-4 py-2 rounded-lg transition-colors duration-300 ${
                  darkMode
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-blue-500 hover:bg-blue-600 text-white"
                }`}
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 transform transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div
          className={`fixed inset-0 bg-black opacity-50`}
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
        <div
          className={`fixed inset-y-0 left-0 w-64 ${
            darkMode ? "bg-gray-900" : "bg-white"
          } transform transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-6 space-y-6">
            {/* Mobile Navigation Links */}
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-2 text-lg ${
                  darkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                } transition-colors duration-300`}
              >
                {item}
              </a>
            ))}

            {/* Mobile Social Links */}
            <div className="flex space-x-4 pt-4">
              <a
                href={PERSONAL_INFO.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  darkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                } transition-colors duration-300`}
              >
                <SiLeetcode className="text-xl" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  darkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                } transition-colors duration-300`}
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  darkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                } transition-colors duration-300`}
              >
                <FaGithub className="text-xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
