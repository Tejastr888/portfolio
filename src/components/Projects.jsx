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
        className={`h-6 w-2/3 ${
          darkMode ? "bg-gray-800" : "bg-gray-100"
        }`}
      />
      <div className="flex space-x-4">
        <div
          className={`h-4 w-8 ${
            darkMode ? "bg-gray-800" : "bg-gray-100"
          }`}
        />
        <div
          className={`h-4 w-8 ${
            darkMode ? "bg-gray-800" : "bg-gray-100"
          }`}
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
      className={`py-24 transition-colors duration-300 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="container mx-auto text-center mb-12">
        <h2
          className={`text-4xl font-bold mb-4 transform transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Featured Projects
        </h2>
        <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
          Explore my latest work and contributions
        </p>
      </div>

      {error && (
        <div
          className={`max-w-md mx-auto mb-8 px-6 py-4 rounded-lg ${
            darkMode ? "bg-red-900/20 text-red-200" : "bg-red-100 text-red-600"
          }`}
        >
          {error}
        </div>
      )}

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {isLoading
          ? Array.from({ length: 6 }).map((_, idx) => (
              <div
                key={idx}
                className={`transform transition-all duration-500 ${
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <ProjectSkeleton darkMode={darkMode} />
              </div>
            ))
          : repos.map((repo, idx) => (
              <div
                key={repo.id}
                className={`p-6 border transition-all duration-300 hover:border-opacity-70 ${
                  darkMode
                    ? "bg-black border-gray-800"
                    : "bg-white border-gray-200"
                } ${
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{repo.name}</h3>
                  <div className="flex space-x-3 text-sm">
                    <span className="flex items-center">
                      <FaStar
                        className={`mr-1 ${
                          darkMode ? "text-yellow-400" : "text-yellow-500"
                        }`}
                      />
                      {repo.stargazers_count}
                    </span>
                    <span className="flex items-center">
                      <FaCodeBranch className="mr-1 text-gray-500" />
                      {repo.forks_count}
                    </span>
                  </div>
                </div>

                {repo.description && (
                  <p
                    className={`mb-4 text-sm ${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {repo.description}
                  </p>
                )}

                {repo.language && (
                  <span
                    className={`inline-block mb-4 px-2 py-1 text-xs rounded ${
                      darkMode
                        ? "bg-gray-700 text-gray-300"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    {repo.language}
                  </span>
                )}

                <div className="flex justify-between items-center border-t pt-4">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={
                      darkMode
                        ? "text-blue-400 hover:text-blue-300"
                        : "text-blue-600 hover:text-blue-500"
                    }
                  >
                    <FaGithub className="inline-block mr-1" />
                    View Code
                  </a>
                  {repo.homepage && (
                    <a
                      href={repo.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={
                        darkMode
                          ? "text-green-400 hover:text-green-300"
                          : "text-green-600 hover:text-green-500"
                      }
                    >
                      <FaLink className="inline-block mr-1" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
      </div>
    </section>
  );
};

export default Projects;
