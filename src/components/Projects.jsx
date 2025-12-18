import { useEffect, useState } from "react";
import { FaGithub, FaLink, FaCodeBranch, FaStar } from "react-icons/fa";
import { useTheme } from "../utils/ThemeContext";
import useInView from "../utils/useInView";
import PropTypes from "prop-types";

const ProjectSkeleton = ({ darkMode }) => (
  <div
    className={`border p-6 animate-pulse ${
      darkMode ? "border-gray-800 bg-black" : "border-gray-200 bg-white"
    }`}
  >
    <div className="flex justify-between mb-4">
      <div
        className={`h-6 w-2/3 ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}
      />
      <div className="flex space-x-4">
        <div
          className={`h-4 w-8 ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}
        />
        <div
          className={`h-4 w-8 ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}
        />
      </div>
    </div>
    <div
      className={`h-4 w-full mb-3 rounded ${
        darkMode ? "bg-gray-700" : "bg-gray-200"
      }`}
    />
    <div
      className={`h-4 w-3/4 mb-3 rounded ${
        darkMode ? "bg-gray-700" : "bg-gray-200"
      }`}
    />
    <div
      className={`h-6 w-1/4 mb-3 rounded ${
        darkMode ? "bg-gray-700" : "bg-gray-200"
      }`}
    />
    <div className="flex justify-between mt-4 pt-4 border-t">
      <div
        className={`h-4 w-20 rounded ${
          darkMode ? "bg-gray-700" : "bg-gray-200"
        }`}
      />
      <div
        className={`h-4 w-20 rounded ${
          darkMode ? "bg-gray-700" : "bg-gray-200"
        }`}
      />
    </div>
  </div>
);

ProjectSkeleton.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};

const Projects = () => {
  const { darkMode } = useTheme();
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [sectionRef, isInView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    async function fetchRepos() {
      try {
        setIsLoading(true);
        const res = await fetch(
          "https://api.github.com/users/Tejastr888/repos"
        );
        if (!res.ok) throw new Error("Network response was not ok");
        const data = await res.json();
        const sorted = data
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
        setRepos(sorted);
      } catch {
        setError("Unable to load projects. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    }
    fetchRepos();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className={`py-40 transition-colors duration-300 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="w-full max-w-4xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2
            className={`text-5xl sm:text-6xl font-light tracking-tight mb-4 transform transition-all duration-700 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Featured Projects
          </h2>
          <p
            className={`text-lg opacity-60 transform transition-all duration-700 ${
              isInView ? "opacity-60 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            Explore my latest work and contributions
          </p>
        </div>

        {error && (
          <div
            className={`mb-8 px-6 py-4 border ${
              darkMode
                ? "border-red-500/30 bg-red-500/5 text-red-400"
                : "border-red-300 bg-red-50 text-red-600"
            }`}
          >
            {error}
          </div>
        )}

        {/* Featured Live Project */}
        <div
          className={`mb-12 p-8 border-2 transition-all duration-500 group ${
            darkMode
              ? "border-gray-700 bg-gray-900/50 hover:border-gray-600"
              : "border-gray-300 bg-gray-50/50 hover:border-gray-400"
          } ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{
            animation: isInView ? "slideInLeft 0.6s ease-out forwards" : "none",
          }}
        >
          <div className="flex items-start justify-between mb-4 gap-4">
            <div>
              <h3 className="text-2xl font-light tracking-wide mb-2 group-hover:opacity-80 transition-opacity">
                Club Management Dashboard
              </h3>
              <span
                className={`inline-block px-3 py-1 text-xs font-light tracking-wide border mb-4 ${
                  darkMode
                    ? "border-cyan-500/30 text-cyan-400 bg-cyan-500/5"
                    : "border-cyan-400 text-cyan-600 bg-cyan-50"
                }`}
              >
                Featured • Live Project
              </span>
            </div>
          </div>

          <p
            className={`mb-6 text-sm leading-relaxed opacity-85 max-w-2xl ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            A comprehensive club management platform with real-time analytics,
            member management, and event tracking. Built with React, Node.js,
            and PostgreSQL for seamless club administration.
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {["React", "Node.js", "PostgreSQL", "Real-time Analytics"].map(
              (tech, i) => (
                <span
                  key={i}
                  className={`px-3 py-1 text-xs font-light tracking-wide border transition-all ${
                    darkMode
                      ? "border-cyan-500/50 text-cyan-300 hover:border-cyan-400 hover:bg-cyan-500/10"
                      : "border-cyan-400 text-cyan-600 hover:border-cyan-500 hover:bg-cyan-50"
                  }`}
                >
                  {tech}
                </span>
              )
            )}
          </div>

          <a
            href="https://frontend-three-tan-61.vercel.app/dashboard/club"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center px-6 py-3 border-2 transition-all duration-300 hover:scale-105 font-light tracking-wide ${
              darkMode
                ? "border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black"
                : "border-cyan-500 text-cyan-600 hover:bg-cyan-500 hover:text-white"
            }`}
          >
            <FaLink className="mr-2" />
            Launch Live Project
          </a>
        </div>

        {/* Projects Grid */}
        <div className="space-y-6">
          {isLoading
            ? Array.from({ length: 6 }).map((_, idx) => (
                <div
                  key={idx}
                  className={`border ${
                    darkMode ? "border-gray-800/50" : "border-gray-200/50"
                  } p-6 animate-pulse`}
                />
              ))
            : repos.slice(0, 6).map((repo, idx) => (
                <div
                  key={repo.id}
                  className={`border p-6 transition-all duration-500 hover:border-opacity-100 group cursor-pointer ${
                    darkMode
                      ? "border-gray-800/50 hover:border-gray-700 hover:bg-gray-900/30"
                      : "border-gray-200/50 hover:border-gray-300 hover:bg-gray-50/50"
                  } ${
                    isInView
                      ? "opacity-100 translate-y-0 translate-x-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{
                    transitionDelay: `${idx * 100}ms`,
                    animation: isInView
                      ? `slideInLeft 0.6s ease-out ${idx * 100}ms forwards`
                      : "none",
                  }}
                >
                  {/* Project Header */}
                  <div className="flex justify-between items-start mb-3 gap-4">
                    <h3 className="text-xl font-light tracking-wide group-hover:opacity-80 transition-opacity">
                      {repo.name}
                    </h3>
                    <div className="flex space-x-4 text-sm opacity-70 group-hover:opacity-100 transition-opacity">
                      <span className="flex items-center whitespace-nowrap">
                        <FaStar className="mr-2" />
                        {repo.stargazers_count}
                      </span>
                      <span className="flex items-center whitespace-nowrap">
                        <FaCodeBranch className="mr-2" />
                        {repo.forks_count}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  {repo.description && (
                    <p
                      className={`mb-4 text-sm leading-relaxed opacity-75 ${
                        darkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {repo.description}
                    </p>
                  )}

                  {/* Language Tag */}
                  {repo.language && (
                    <div className="mb-4">
                      <span
                        className={`inline-block px-3 py-1 text-xs font-light tracking-wide border ${
                          darkMode
                            ? "border-gray-700 text-gray-300"
                            : "border-gray-300 text-gray-600"
                        }`}
                      >
                        {repo.language}
                      </span>
                    </div>
                  )}

                  {/* Links */}
                  <div className="flex justify-between items-center pt-4 border-t border-gray-700/30 mt-4">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center opacity-70 hover:opacity-100 transition-opacity text-sm font-light tracking-wide"
                    >
                      <FaGithub className="mr-2" />
                      Code
                    </a>
                    {repo.homepage && (
                      <a
                        href={repo.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center opacity-70 hover:opacity-100 transition-opacity text-sm font-light tracking-wide"
                      >
                        <FaLink className="mr-2" />
                        Live
                      </a>
                    )}
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
