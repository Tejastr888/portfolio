import React from "react";
import Stats from "./Stats";
import resume from "../assets/pdf/resume.pdf";
import Experience from "./Experience.jsx";
import { useTheme } from "../utils/ThemeContext";

const About = () => {
  const { darkMode } = useTheme();
  
  const skills = {
    frontend: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"],
    backend: ["Node.js", "Python", "Java", "RESTful APIs", "PostgreSQL"],
    cloud: ["AWS EC2", "S3", "Lambda", "CloudFormation", "IAM"],
    tools: ["Git", "Docker", "VS Code", "IntelliJ IDEA", "Postman"]
  };

  return (
    <>
      <Stats />
      <Experience/>
      <div className={`py-16 ${darkMode ? 'bg-surface-dark text-text-dark' : 'bg-white text-text-light'} transition-colors duration-300`}>
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">About Me</h2>
                <p className="text-lg mb-4">
                  Hello! I am a Multidisciplinary Technologist with a strong
                  foundation in software engineering, game development, and cloud computing.
                  Currently building my expertise across several fields including full-stack
                  development, cloud architecture, and AI-driven technologies.
                </p>
                <p className="text-lg mb-4">
                  As an AWS Certified Cloud Practitioner, I combine my technical expertise
                  with cloud computing knowledge to build scalable and efficient solutions.
                  My experience spans from developing high-performance games to implementing
                  cloud-native applications.
                </p>
                <p className="text-lg">
                  I'm passionate about solving complex problems and creating innovative
                  solutions that make a real impact. Let's connect and discuss how I can
                  contribute to your next challenging project!
                </p>
              </div>

              {/* Skills Section */}
              <div className="mt-8">
                <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Object.entries(skills).map(([category, skillList]) => (
                    <div key={category} className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                      <h4 className="text-lg font-semibold capitalize mb-3">{category}</h4>
                      <div className="flex flex-wrap gap-2">
                        {skillList.map((skill) => (
                          <span
                            key={skill}
                            className={`px-3 py-1 rounded-full text-sm ${
                              darkMode
                                ? 'bg-gray-700 text-gray-200'
                                : 'bg-gray-200 text-gray-800'
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

            {/* Resume Section */}
            <div className="lg:col-span-1">
              <div className={`sticky top-24 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} p-6 rounded-lg shadow-lg`}>
                <h3 className="text-2xl font-semibold mb-4">Resume</h3>
                <iframe
                  src={resume}
                  title="Tejas Resume"
                  className="w-full h-[600px] border-2 border-gray-300 rounded-lg shadow-sm"
                />
                <a
                  href={resume}
                  download
                  className={`mt-4 block text-center py-2 px-4 rounded-lg ${
                    darkMode
                      ? 'bg-primary-dark hover:bg-blue-600'
                      : 'bg-primary-light hover:bg-blue-500'
                  } text-white transition-colors duration-300`}
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
