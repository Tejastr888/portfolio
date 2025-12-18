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
    <section
      id="home"
      className={`transition-colors duration-300 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      } py-32 sm:py-40 min-h-screen flex items-center`}
    >
      <div className="w-full max-w-4xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col items-center justify-center text-center space-y-12">
          {/* Hero Content */}
          <div className="space-y-6 animate-fadeInDown">
            <h1 className="text-6xl sm:text-7xl font-light tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-xl sm:text-2xl font-light opacity-70 max-w-2xl">
              Software Development Engineer crafting digital experiences
            </p>
            <p className="text-lg opacity-60 max-w-xl">
              Full-stack development • Cloud solutions •{" "}
              <span className="text-cyan-400 font-medium">
                Innovative technologies
              </span>
            </p>
          </div>

          {/* Social Links */}
          <div
            className="flex justify-center space-x-8 animate-fadeInUp"
            style={{ animationDelay: "200ms" }}
          >
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl transition-all duration-300 hover:scale-125 hover:-translate-y-1 opacity-80 hover:opacity-100"
            >
              <FaLinkedin />
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl transition-all duration-300 hover:scale-125 hover:-translate-y-1 opacity-80 hover:opacity-100"
            >
              <FaGithub />
            </a>
          </div>

          {/* CTA Button */}
          <div className="animate-fadeInUp" style={{ animationDelay: "400ms" }}>
            <a
              href="#projects"
              className={`inline-block px-8 py-3 border-2 font-light tracking-wide transition-all duration-300 hover:scale-105 ${
                darkMode
                  ? "border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black"
                  : "border-cyan-500 text-cyan-600 hover:bg-cyan-500 hover:text-white"
              }`}
            >
              View Work
            </a>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={() => {
              document
                .getElementById("projects")
                .scrollIntoView({ behavior: "smooth" });
            }}
            className="pt-8 animate-float cursor-pointer hover:opacity-100 transition-opacity"
          >
            <div
              className={`text-sm opacity-50 hover:opacity-80 transition-opacity ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              ↓ Scroll to explore
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
