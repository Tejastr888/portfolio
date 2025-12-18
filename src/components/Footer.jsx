import { PERSONAL_INFO } from "../data/variables";
import { FaArrowUp } from "react-icons/fa";
import { useTheme } from "../utils/ThemeContext";
import { SiLeetcode } from "react-icons/si";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  const { darkMode } = useTheme();
  const year = new Date().getFullYear();

  const socialLinks = [
    { name: "LeetCode", url: PERSONAL_INFO.leetcode, icon: SiLeetcode },
    { name: "LinkedIn", url: PERSONAL_INFO.linkedin, icon: FaLinkedin },
    { name: "GitHub", url: PERSONAL_INFO.github, icon: FaGithub },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className={`py-16 border-t transition-colors duration-300 ${
        darkMode ? "bg-black text-white border-gray-800/50" : "bg-white text-black border-gray-200/50"
      }`}
    >
      <div className="w-full max-w-4xl mx-auto px-6 sm:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-light tracking-wide mb-2">
              {PERSONAL_INFO.name}
            </h3>
            <p className={`text-sm opacity-60 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              Full Stack Engineer & Cloud Professional
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-light tracking-widest uppercase mb-4 opacity-70">
              Navigation
            </h4>
            <div className="space-y-2">
              {["Home", "About", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`block text-sm opacity-60 hover:opacity-100 transition-opacity ${
                    darkMode ? "hover:text-cyan-400" : "hover:text-cyan-600"
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-sm font-light tracking-widest uppercase mb-4 opacity-70">
              Connect
            </h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-lg opacity-60 hover:opacity-100 transition-all duration-300 hover:scale-110 ${
                      darkMode ? "hover:text-cyan-400" : "hover:text-cyan-600"
                    }`}
                    title={link.name}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className={`my-8 ${darkMode ? "bg-gray-800/30" : "bg-gray-200/30"}`} style={{ height: "1px" }} />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <p className={`text-xs opacity-50 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
            &copy; {year} {PERSONAL_INFO.name}. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className={`mt-4 sm:mt-0 p-2 rounded-full transition-all duration-300 hover:scale-110 ${
              darkMode
                ? "text-cyan-400 hover:bg-cyan-400/10"
                : "text-cyan-600 hover:bg-cyan-600/10"
            }`}
            aria-label="Back to top"
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
