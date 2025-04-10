import { FaLinkedin, FaGithub, FaCode, FaServer, FaCloud } from "react-icons/fa";
import { useTheme } from "../utils/ThemeContext";
import profileImage from "../assets/profileImage.png";

const Home = () => {
  const { darkMode } = useTheme();

  const skills = [
    { name: "Full Stack Development", icon: FaCode },
    { name: "Backend Engineering", icon: FaServer },
    { name: "Cloud Computing", icon: FaCloud },
  ];

  return (
    <div className={`min-h-screen flex items-center justify-center ${
      darkMode 
        ? 'bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-r from-blue-50 via-white to-blue-50'
    } transition-colors duration-300`}>
      <div className="container mx-auto px-6 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 text-center md:text-left">
            <h1 className={`text-4xl md:text-6xl font-bold ${
              darkMode ? 'text-white' : 'text-gray-900'
            } animate-fadeInDown`}>
              Hi 👋, I&apos;m <span className="text-blue-500">Tejas</span>
            </h1>
            
            {/* Animated Skills List */}
            <div className="space-y-4">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div 
                    key={index}
                    className={`flex items-center justify-center md:justify-start space-x-2 ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    } animate-fadeInUp`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <Icon className="text-blue-500" />
                    <span>{skill.name}</span>
                  </div>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start space-x-6 animate-fadeInUp" style={{ animationDelay: '600ms' }}>
              <a
                href="https://www.linkedin.com/in/tejastr888/"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-3xl transition-transform hover:scale-110 ${
                  darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'
                }`}
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/Tejastr888"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-3xl transition-transform hover:scale-110 ${
                  darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-700 hover:text-gray-600'
                }`}
              >
                <FaGithub />
              </a>
            </div>

            {/* CTA Button */}
            <div className="animate-fadeInUp" style={{ animationDelay: '800ms' }}>
              <a
                href="#projects"
                className={`inline-block px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 ${
                  darkMode
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-blue-500 hover:bg-blue-600 text-white'
                }`}
              >
                View My Work
              </a>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="flex justify-center md:justify-end">
            <div className={`relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden ${
              darkMode ? 'ring-4 ring-blue-500/50' : 'ring-4 ring-blue-300/50'
            } shadow-2xl transition-transform transform hover:scale-105 animate-fadeInUp`}>
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 ${
                darkMode ? 'bg-blue-500/10' : 'bg-blue-300/10'
              } transition-colors duration-300`}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
