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
    // Section now has padding to create space from the navbar and footer
    <section
      id="home"
      className={`transition-colors duration-300 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      } py-24 sm:py-32`}
    >
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main Hero Section with reduced gap */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            {/* Reduced heading size and margin */}
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 animate-fadeInDown">
              Hi 👋, I'm {PERSONAL_INFO.name}
            </h1>

            {/* Reduced paragraph size and margin */}
            <p
              className="text-base sm:text-lg max-w-[60ch] font-light leading-relaxed mb-6 animate-fadeInUp"
              style={{ animationDelay: "200ms" }}
            >
              Software Development Engineer crafting digital experiences through
              full-stack development, cloud solutions, and innovative
              technologies.
            </p>

            {/* Reduced icon size and margin */}
            <div
              className="flex justify-center lg:justify-start space-x-5 mb-6 animate-fadeInUp"
              style={{ animationDelay: "400ms" }}
            >
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl transition-transform hover:scale-110 hover:text-blue-500"
              >
                <FaLinkedin />
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl transition-transform hover:scale-110 hover:text-gray-500"
              >
                <FaGithub />
              </a>
            </div>

            {/* Reduced button size */}
            <div
              className="animate-fadeInUp"
              style={{ animationDelay: "600ms" }}
            >
              <a
                href="#projects"
                className={`inline-flex items-center justify-center px-6 py-2 rounded-md font-semibold text-sm transition-all transform hover:scale-105 ${
                  darkMode
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-blue-500 hover:bg-blue-600 text-white"
                }`}
              >
                View My Work
              </a>
            </div>
          </div>

          {/* Right Column: Profile Image (Further Reduced Size) */}
          <div className="flex justify-center lg:justify-end animate-fadeInUp">
            <div
              className={`relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-xl transition-all duration-300 transform hover:scale-105 ${
                darkMode ? "ring-2 ring-blue-500/50" : "ring-2 ring-blue-300/50"
              }`}
            >
              <img
                src={profileImage}
                alt={`${PERSONAL_INFO.name} - Software Developer`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Compacted Skills Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-4 sm:grid-cols-8 gap-4 mt-28">
          {PERSONAL_INFO.skills.slice(0, 8).map((skill, index) => {
            const Icon = iconMap[skill.icon];
            return (
              <div
                key={index}
                className={`flex flex-col items-center justify-center text-center p-3 rounded-lg transition-all duration-300 animate-fadeInUp ${
                  darkMode
                    ? "bg-gray-900/50 hover:bg-gray-800/70"
                    : "bg-gray-100/50 hover:bg-gray-200/70"
                }`}
                style={{ animationDelay: `${index * 100 + 800}ms` }}
              >
                {/* Reduced icon and font size */}
                {Icon && <Icon className="text-3xl mb-2 text-blue-500" />}
                <span className="text-xs tracking-wide">{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Home;
