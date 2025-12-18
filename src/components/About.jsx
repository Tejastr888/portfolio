import Stats from "./Stats";
import Experience from "./Experience.jsx";
import { useTheme } from "../utils/ThemeContext";
import { PERSONAL_INFO } from "../data/variables";

const About = () => {
  const { darkMode } = useTheme();

  const skills = [
    { title: "Full Stack Development" },
    { title: "Backend Engineering" },
    { title: "Cloud Computing" },
    { title: "API Development" },
    { title: "Database Design" },
    { title: "Mobile Development" },
  ];

  return (
    <section
      id="about"
      className={`py-40 transition-colors duration-300 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <Stats />
      <Experience />

      <div className="w-full max-w-4xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="mb-20">
          <h2 className="text-5xl sm:text-6xl font-light tracking-tight mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg opacity-70 leading-relaxed max-w-2xl">
            I&apos;m a software engineer passionate about building scalable
            applications and solving complex problems through code.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          {/* Main Content */}
          <div className="space-y-6 text-base leading-relaxed opacity-85">
            <p>
              With experience at 4necotech, I&apos;ve architected MERN
              applications serving 8,000+ users and built interactive design
              tools using Three.js.
            </p>
            <p>
              As an AWS Certified Cloud Practitioner, I combine technical
              expertise with cloud computing knowledge to build efficient,
              scalable solutions.
            </p>
            <p>
              I enjoy exploring new technologies and contributing to open-source
              projects. Currently, I&apos;m interested in advanced cloud
              architectures and AI integration.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="space-y-8">
            {[
              { label: "Experience", value: "3+ Years" },
              { label: "Projects", value: "15+" },
              { label: "Languages", value: "8+" },
              { label: "Status", value: "Open to Work" },
            ].map((stat, i) => (
              <div
                key={i}
                className="group cursor-default"
                style={{
                  animation: `slideInRight 0.6s ease-out ${
                    i * 100 + 200
                  }ms forwards`,
                  opacity: 0,
                }}
              >
                <div className="opacity-60 text-sm tracking-wide uppercase mb-2">
                  {stat.label}
                </div>
                <div className="text-2xl font-light tracking-tight group-hover:opacity-75 transition-opacity">
                  {stat.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div>
          <h3 className="text-2xl font-light tracking-tight mb-8">
            Skills & Expertise
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((skill, i) => (
              <div
                key={i}
                className={`border px-6 py-4 transition-all duration-300 hover:scale-105 group cursor-default ${
                  darkMode
                    ? "border-gray-800/50 hover:border-gray-700 hover:bg-gray-900/30"
                    : "border-gray-200/50 hover:border-gray-300 hover:bg-gray-50/50"
                }`}
                style={{
                  animation: `slideInLeft 0.6s ease-out ${
                    i * 80 + 400
                  }ms forwards`,
                  opacity: 0,
                }}
              >
                <div className="text-center text-sm font-light tracking-wide group-hover:opacity-80 transition-opacity">
                  {skill.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <a
            href={PERSONAL_INFO.resumeDownloadUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-block px-8 py-3 border-2 font-light tracking-wide transition-all duration-300 hover:scale-105 animate-fadeInUp ${
              darkMode
                ? "border-white text-white hover:bg-white hover:text-black"
                : "border-black text-black hover:bg-black hover:text-white"
            }`}
            style={{ animationDelay: "800ms" }}
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
