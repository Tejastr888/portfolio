import {
  FaLinkedin,
  FaGithub,
  FaCode,
  FaServer,
  FaCloud,
  FaGamepad,
  FaMobile,
  FaDatabase,
  FaCogs,
  FaChartBar,
  FaTools,
  FaBrain,
} from "react-icons/fa";
import { useTheme } from "../utils/ThemeContext";
import { PERSONAL_INFO } from "../data/variables";
import profileImage from "../assets/profileImage.png";

const Home = () => {
  const { darkMode } = useTheme();

  const iconMap = {
    FaCode,
    FaServer,
    FaCloud,
    FaGamepad,
    FaMobile,
    FaDatabase,
    FaCogs,
    FaChartBar,
    FaTools,
    FaBrain,
  };

  return (
    <div
      className={`min-h-screen flex flex-col justify-center ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      } transition-colors duration-300`}
    >
      <div className="container mx-auto px-4 py-16 sm:px-6">
        {/* Main Hero Section: Centered Responsive Two-Column Layout */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Text Content */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-medium mb-6 animate-fadeInDown">
              Hi 👋, I&apos;m {PERSONAL_INFO.name}
            </h1>

            <p
              className="text-lg sm:text-xl md:text-2xl max-w-[65ch] font-light leading-relaxed mb-8 animate-fadeInUp"
              style={{ animationDelay: "200ms" }}
            >
              Software Development Engineer crafting digital experiences through
              full-stack development, cloud solutions, and innovative
              technologies.
            </p>

            {/* Social Links with Icons */}
            <div
              className="flex justify-center lg:justify-start space-x-6 mb-8 animate-fadeInUp"
              style={{ animationDelay: "400ms" }}
            >
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl transition-colors hover:text-blue-500"
              >
                <FaLinkedin />
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl transition-colors hover:text-gray-500"
              >
                <FaGithub />
              </a>
            </div>

            {/* CTA Button */}
            <div
              className="animate-fadeInUp"
              style={{ animationDelay: "600ms" }}
            >
              <a
                href="#projects"
                className={`inline-flex items-center justify-center px-8 py-3 rounded-md font-semibold transition-all transform hover:scale-105 ${
                  darkMode
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-blue-500 hover:bg-blue-600 text-white"
                }`}
              >
                View My Work
              </a>
            </div>
          </div>

          {/* Right Column: Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fadeInUp">
            <div
              className={`relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl transition-all duration-300 transform hover:scale-105 ${
                darkMode ? "ring-4 ring-blue-500/50" : "ring-4 ring-blue-300/50"
              }`}
            >
              <img
                src={profileImage}
                alt={`${PERSONAL_INFO.name} - Software Developer`}
                className="w-full h-full object-cover"
              />
              <div
                className={`absolute inset-0 ${
                  darkMode ? "bg-black/20" : "bg-white/10"
                }`}
              ></div>
            </div>
          </div>
        </div>

        {/* Animated Skills Grid (below main hero) */}
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-6 mt-24">
          {PERSONAL_INFO.skills.slice(0, 8).map((skill, index) => {
            const Icon = iconMap[skill.icon];
            return (
              <div
                key={index}
                className={`flex flex-col items-center justify-center text-center p-4 rounded-lg transition-all duration-300 animate-fadeInUp ${
                  darkMode
                    ? "bg-gray-900/50 hover:bg-gray-800/70"
                    : "bg-gray-100/50 hover:bg-gray-200/70"
                }`}
                style={{ animationDelay: `${index * 100 + 800}ms` }}
              >
                {Icon && <Icon className="text-4xl mb-3 text-blue-500" />}
                <span className="text-sm tracking-wide">{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
