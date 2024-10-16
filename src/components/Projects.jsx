import React, { useEffect, useState } from "react";
import { FaGithub, FaLink } from "react-icons/fa";

const Projects = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    // Fetch repositories from GitHub API
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/Tejastr888/repos"
        );
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.error("Error fetching GitHub repos:", error);
      }
    };

    fetchRepos();
  }, []);

  return (
    <div className="py-12 px-4 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {repos.map((repo) => (
          <div
            key={repo.id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">{repo.name}</h3>
            <p className="text-gray-600 text-sm mb-4">
              {repo.description
                ? repo.description
                : "No description available."}
            </p>
            <div className="flex items-center justify-between mt-4">
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-500 flex items-center"
              >
                <FaGithub className="mr-2" /> GitHub Repo
              </a>
              {repo.homepage && (
                <a
                  href={repo.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-500 flex items-center"
                >
                  <FaLink className="mr-2" /> Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
