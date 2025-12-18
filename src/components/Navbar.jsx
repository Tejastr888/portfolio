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
import { PERSONAL_INFO } from "../data/variables";

const Navbar = () => {
  const { darkMode, setDarkMode } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Detect active section
      const sections = ["home", "about", "projects", "contact"];
      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
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
              ? "bg-black/95 border-b border-gray-800/50"
              : "bg-white/95 border-b border-gray-200/50"
            : "bg-transparent"
        }`}
      >
        <div className="w-full px-6 sm:px-8 py-4">
          <div className="max-w-4xl mx-auto flex justify-between items-center">
            {/* Logo */}
            <div
              className={`font-light text-lg tracking-wide ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              {PERSONAL_INFO.name}
            </div>

            {/* Center Navigation - Desktop */}
            <div className="hidden md:flex space-x-10">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`text-sm font-light tracking-wide transition-all duration-300 border-b-2 pb-1 ${
                    activeSection === item.toLowerCase()
                      ? "text-cyan-500 border-cyan-500"
                      : darkMode
                      ? "text-gray-300 border-transparent hover:border-gray-600 hover:text-cyan-400"
                      : "text-gray-600 border-transparent hover:border-gray-300 hover:text-cyan-600"
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-4 sm:space-x-6">
              {/* Social Links - Always Visible */}
              <div className="flex items-center space-x-4 sm:space-x-5">
                <a
                  href={PERSONAL_INFO.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-lg opacity-70 hover:opacity-100 transition-all duration-300 hover:-translate-y-1 ${
                    darkMode
                      ? "text-orange-400 hover:text-orange-300"
                      : "text-orange-600 hover:text-orange-700"
                  }`}
                  title="LeetCode"
                >
                  <SiLeetcode />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-lg opacity-70 hover:opacity-100 transition-all duration-300 hover:-translate-y-1 ${
                    darkMode
                      ? "text-blue-400 hover:text-blue-300"
                      : "text-blue-600 hover:text-blue-700"
                  }`}
                  title="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-lg opacity-70 hover:opacity-100 transition-all duration-300 hover:-translate-y-1 ${
                    darkMode
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-700 hover:text-black"
                  }`}
                  title="GitHub"
                >
                  <FaGithub />
                </a>
              </div>

              {/* Theme Toggle - Always Visible */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-full text-xl transition-all duration-300 hover:scale-110 ${
                  darkMode
                    ? "text-yellow-300 hover:text-yellow-200"
                    : "text-blue-600 hover:text-blue-700"
                }`}
                aria-label="Toggle theme"
                type="button"
              >
                {darkMode ? <FaSun /> : <FaMoon />}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`md:hidden p-2 rounded-full text-lg transition-all duration-300 ${
                  darkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                aria-label="Toggle mobile menu"
                type="button"
              >
                {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 pointer-events-none ${
          isMobileMenuOpen ? "pointer-events-auto" : ""
        }`}
      >
        <div
          className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        <div
          className={`fixed inset-y-0 left-0 w-64 transition-transform duration-300 transform ${
            darkMode ? "bg-black" : "bg-white"
          } ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="p-8 space-y-8 pt-20">
            {/* Mobile Navigation */}
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block text-lg font-light tracking-wide transition-opacity duration-300 hover:opacity-60 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {item}
              </a>
            ))}

            {/* Mobile Social */}
            <div className="flex space-x-6 pt-6">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl opacity-70 hover:opacity-100 transition-all duration-300"
              >
                <FaLinkedin />
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl opacity-70 hover:opacity-100 transition-all duration-300"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
