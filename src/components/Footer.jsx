import { PERSONAL_INFO } from "../data/variables";
import { FaEnvelope, FaMapMarkerAlt, FaArrowUp } from "react-icons/fa";
import { useTheme } from "../utils/ThemeContext";
import { scrollToSection } from "../utils/scrollHelper";
import useInView from "../utils/useInView";
import { SiLeetcode } from "react-icons/si";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export const FOOTER_DATA = {
  quickLinks: [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
  ],
  contact: {
    email: PERSONAL_INFO.email,
    location: PERSONAL_INFO.location,
  },
  social: [
    { name: "LeetCode", url: PERSONAL_INFO.leetcode, icon: "SiLeetcode" },
    { name: "LinkedIn", url: PERSONAL_INFO.linkedin, icon: "FaLinkedin" },
    { name: "GitHub", url: PERSONAL_INFO.github, icon: "FaGithub" },
  ],
};



const iconMap = {
  SiLeetcode,
  FaLinkedin,
  FaGithub,
};

const Footer = () => {
  const { darkMode } = useTheme();
  const [ref, inView] = useInView({ threshold: 0.1 });
  const year = new Date().getFullYear();

  const onNav = (e, id) => {
    e.preventDefault();
    scrollToSection(id);
  };

  return (
    <footer
      ref={ref}
      className={`py-20 border-t transition-colors duration-300 ${
        darkMode ? "bg-black text-white border-gray-800" : "bg-white text-black border-gray-200"
      }`}
    >
      <div className="container mx-auto px-6 py-16">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transform transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">{PERSONAL_INFO.name}</h3>
            <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
              Full Stack Engineer & Cloud Professional
            </p>
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-blue-500" />
              <span className={darkMode ? "text-gray-300" : "text-gray-600"}>
                {FOOTER_DATA.contact.location}
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {FOOTER_DATA.quickLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => onNav(e, link.id)}
                    className={`transition-colors duration-300 ${
                      darkMode
                        ? "text-gray-300 hover:text-white"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Contact</h3>
            <a
              href={`mailto:${FOOTER_DATA.contact.email}`}
              className={`flex items-center space-x-2 transition-colors duration-300 ${
                darkMode
                  ? "text-gray-300 hover:text-blue-400"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              <FaEnvelope />
              <span>{FOOTER_DATA.contact.email}</span>
            </a>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Connect</h3>
            <div className="flex space-x-4">
              {FOOTER_DATA.social.map((s) => {
                const Icon = iconMap[s.icon];
                return (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-2xl transition-colors duration-300 ${
                      darkMode
                        ? "text-gray-300 hover:text-white"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                    aria-label={s.name}
                  >
                    {Icon && <Icon />}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className={`mt-12 pt-8 border-t flex flex-col items-center space-y-4 ${
            darkMode ? "border-gray-800" : "border-gray-200"
          }`}
        >
          <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
            &copy; {year} {PERSONAL_INFO.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
