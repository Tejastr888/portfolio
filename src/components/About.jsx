import {
  FaCode,
  FaReact,
  FaDatabase,
  FaCloud,
  FaTools,
  FaDownload,
} from "react-icons/fa";
import Stats from "./Stats";
import Experience from "./Experience.jsx";
import { useTheme } from "../utils/ThemeContext";
import { PERSONAL_INFO } from "../data/variables";

// A mapping of skill categories to their corresponding icons for easy rendering.
const categoryIcons = {
  "Programming Languages": <FaCode className="mr-3 text-xl text-cyan-400" />,
  "Web Technologies": <FaReact className="mr-3 text-xl text-cyan-400" />,
  Databases: <FaDatabase className="mr-3 text-xl text-cyan-400" />,
  "Cloud & DevOps": <FaCloud className="mr-3 text-xl text-cyan-400" />,
  Tools: <FaTools className="mr-3 text-xl text-cyan-400" />,
};

const About = () => {
  const { darkMode } = useTheme();

  const skillCategories = {
    "Programming Languages": PERSONAL_INFO.technicalSkills.programmingLanguages,
    "Web Technologies": PERSONAL_INFO.technicalSkills.webTechnologies,
    Databases: PERSONAL_INFO.technicalSkills.databases,
    "Cloud & DevOps": PERSONAL_INFO.technicalSkills.cloudDevOps,
    Tools: PERSONAL_INFO.technicalSkills.tools,
  };

  return (
    <section
      id="about"
      className={`transition-colors duration-300 ${
        darkMode ? "bg-black text-white" : "bg-gray-50 text-black"
      }`}
    >
      {/* Assuming Stats and Experience are pre-styled components */}
      <Stats />
      <Experience />

      <div className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Left Column: Main Content & Skills */}
            <div className="lg:col-span-2 space-y-12">
              {/* About Me Section */}
              <div className="text-center lg:text-left">
                <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                  About Me
                </h2>
                <div className="space-y-5 text-base sm:text-lg leading-relaxed text-gray-300">
                  <p>
                    Hello! I&apos;m a Software Development Engineer with over a year
                    of experience in Roku platform development with BrightScript
                    and building full-stack web solutions.
                  </p>
                  <p>
                    I have a track record of architecting MERN applications for
                    8,000+ users and creating interactive 3D design tools using
                    Three.js. As an AWS Certified Cloud Practitioner, I leverage
                    cloud technology to build scalable, high-performance
                    applications.
                  </p>
                  <p>
                    I thrive on solving complex problems and creating software
                    that makes a real impact. Let&apos;s connect and build something
                    amazing together!
                  </p>
                </div>
              </div>

              {/* Skills Section */}
              <div>
                <h3 className="text-3xl font-bold mb-8 text-center lg:text-left">
                  Technical Skills
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {Object.entries(skillCategories).map(([category, skills]) => (
                    <div
                      key={category}
                      className={`p-6 rounded-lg shadow-md transition-all duration-300 ${
                        darkMode
                          ? "bg-gray-900 border border-gray-700 hover:border-cyan-400 hover:shadow-cyan-400/20"
                          : "bg-white border border-gray-200 hover:border-blue-500 hover:shadow-blue-500/20"
                      }`}
                    >
                      <h4 className="font-semibold text-lg mb-4 flex items-center">
                        {categoryIcons[category]}
                        {category}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {skills.map((skill) => (
                          <span
                            key={skill}
                            className={`px-3 py-1 text-sm rounded-full transition-colors ${
                              darkMode
                                ? "bg-gray-800 text-gray-300"
                                : "bg-gray-200 text-gray-700"
                            }`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Resume */}
            <div className="lg:col-span-1 flex justify-center lg:block">
              <div className="sticky top-24 w-full max-w-sm">
                <div
                  className={`p-6 rounded-lg shadow-lg ${
                    darkMode
                      ? "bg-gray-900 border border-gray-700"
                      : "bg-white border border-gray-200"
                  }`}
                >
                  <h3 className="text-2xl font-bold mb-5 text-center">
                    Resume
                  </h3>
                  <div className="w-full h-80 sm:h-96 rounded-md overflow-hidden border border-gray-600">
                    <iframe
                      src={PERSONAL_INFO.resumeUrl}
                      title={`${PERSONAL_INFO.name} Resume`}
                      className="w-full h-full"
                    />
                  </div>
                  <a
                    href={PERSONAL_INFO.resumeDownloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-6 w-full flex items-center justify-center text-center py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                      darkMode
                        ? "bg-cyan-500 text-black hover:bg-cyan-400"
                        : "bg-blue-600 text-white hover:bg-blue-500"
                    }`}
                  >
                    <FaDownload className="mr-2" />
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
