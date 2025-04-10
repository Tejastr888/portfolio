import { useEffect, useState } from "react";
import { FaGithub, FaLink, FaCodeBranch, FaStar } from "react-icons/fa";
import { useTheme } from "../utils/ThemeContext";
import useInView from "../utils/useInView";
import PropTypes from 'prop-types';

const ProjectSkeleton = ({ darkMode }) => (
  <div className={`${
    darkMode ? 'bg-gray-800' : 'bg-white'
  } rounded-lg shadow-lg p-6 animate-pulse`}>
    <div className="flex justify-between items-start mb-4">
      <div className={`h-6 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded w-2/3`}></div>
      <div className="flex items-center space-x-3">
        <div className={`h-4 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded w-8`}></div>
        <div className={`h-4 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded w-8`}></div>
      </div>
    </div>
    <div className={`h-4 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded w-full mb-4`}></div>
    <div className={`h-4 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded w-3/4 mb-4`}></div>
    <div className={`h-6 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded w-1/4 mb-4`}></div>
    <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-700">
      <div className={`h-4 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded w-20`}></div>
      <div className={`h-4 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded w-20`}></div>
    </div>
  </div>
);

ProjectSkeleton.propTypes = {
  darkMode: PropTypes.bool.isRequired
};

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { darkMode } = useTheme();
  const [sectionRef, isInView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await fetch(
          "https://api.github.com/users/Tejastr888/repos"
        );
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }
        const data = await response.json();
        const sortedData = data.sort((a, b) => {
          if (b.stargazers_count !== a.stargazers_count) {
            return b.stargazers_count - a.stargazers_count;
          }
          return new Date(b.updated_at) - new Date(a.updated_at);
        });
        setRepos(sortedData);
      } catch (error) {
        console.error("Error fetching GitHub repos:", error);
        setError('Failed to load projects. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <div 
      ref={sectionRef}
      id="projects"
      className={`py-16 px-4 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} transition-colors duration-300`}
    >
      <div className="container mx-auto">
        <div className={`text-center mb-12 transform transition-all duration-700 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Explore my latest work and contributions
          </p>
        </div>

        {error && (
          <div className={`text-center p-6 rounded-lg ${
            darkMode ? 'bg-red-900/20 text-red-200' : 'bg-red-100 text-red-600'
          }`}>
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            Array(6).fill().map((_, index) => (
              <div 
                key={index}
                className={`transform transition-all duration-500 ${
                  isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <ProjectSkeleton darkMode={darkMode} />
              </div>
            ))
          ) : (
            repos.map((repo, index) => (
              <div
                key={repo.id}
                className={`${
                  darkMode 
                    ? 'bg-gray-800 hover:bg-gray-700' 
                    : 'bg-white hover:bg-gray-50'
                } rounded-lg shadow-lg p-6 transition-all duration-500 transform hover:-translate-y-1 ${
                  isInView 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{repo.name}</h3>
                  <div className="flex items-center space-x-3">
                    <span className="flex items-center text-sm">
                      <FaStar className={`mr-1 ${darkMode ? 'text-yellow-400' : 'text-yellow-500'}`} />
                      {repo.stargazers_count}
                    </span>
                    <span className="flex items-center text-sm">
                      <FaCodeBranch className="mr-1 text-gray-500" />
                      {repo.forks_count}
                    </span>
                  </div>
                </div>

                {repo.description && (
                  <p className={`text-sm mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {repo.description}
                  </p>
                )}

                {repo.language && (
                  <div className="mb-4">
                    <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                      darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'
                    }`}>
                      {repo.language}
                    </span>
                  </div>
                )}

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-700">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center ${
                      darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'
                    }`}
                  >
                    <FaGithub className="mr-2" />
                    View Code
                  </a>

                  {repo.homepage && (
                    <a
                      href={repo.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center ${
                        darkMode ? 'text-green-400 hover:text-green-300' : 'text-green-600 hover:text-green-500'
                      }`}
                    >
                      <FaLink className="mr-2" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
