import Stats from "./Stats";
import Experience from "./Experience.jsx";
import { useTheme } from "../utils/ThemeContext";
import { PERSONAL_INFO } from "../data/variables";

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
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <Stats />
      <Experience />

      <div className="py-20 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8 text-center lg:text-left">
              <h2 className="text-4xl sm:text-5xl font-medium mb-8">About</h2>
              <div className="space-y-6 text-base leading-relaxed">
                <p>
                  Hello! I am a Software Development Engineer with 1+ years of
                  experience in Roku platform development using BrightScript and
                  full-stack web development with modern technologies.
                </p>
                <p>
                  At 4necotech, I’ve architected MERN applications serving
                  8,000+ users and built interactive 3D design tools with
                  Three.js. I work across games, cloud, and web to deliver
                  scalable solutions.
                </p>
                <p>
                  As an AWS Certified Cloud Practitioner, I combine cloud
                  expertise with data-driven development to improve performance
                  and engagement.
                </p>
                <p>
                  I’m passionate about solving complex problems and creating
                  impactful solutions. Let’s connect and build something great
                  together!
                </p>
              </div>

              {/* Skills */}
              <div className="mt-12">
                <h3 className="text-2xl font-medium mb-6">Technical Skills</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {Object.entries(skillCategories).map(([category, skills]) => (
                    <div
                      key={category}
                      className="p-4 border border-gray-700 rounded hover:border-white transition-colors"
                    >
                      <h4 className="font-semibold mb-4">{category}</h4>
                      <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                        {skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 text-sm border border-gray-700 rounded hover:border-white transition-all"
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

            {/* Resume */}
            <div className="lg:col-span-1 flex justify-center lg:block">
              <div className="sticky top-12 w-full max-w-md border border-gray-700 bg-black p-6 rounded">
                <h3 className="text-xl font-medium mb-4 text-center">Resume</h3>
                <iframe
                  src={PERSONAL_INFO.resumeUrl}
                  title={`${PERSONAL_INFO.name} Resume`}
                  className="w-full h-64 sm:h-80 border border-gray-700 rounded"
                  allow="autoplay"
                />
                <a
                  href={PERSONAL_INFO.resumeDownloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 block text-center py-2 border border-white rounded text-white hover:bg-white hover:text-black transition-colors"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
