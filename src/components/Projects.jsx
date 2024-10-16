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

// import React, { useEffect, useState } from "react";
// import { FaGithub, FaLink } from "react-icons/fa";

// const Projects = () => {
//   const [repos, setRepos] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     // Fetch repositories from GitHub API
//     const fetchRepos = async () => {
//       try {
//         const response = await fetch(
//           "https://api.github.com/users/Tejastr888/repos"
//         );
//         const data = await response.json();
//         setRepos(data);
//       } catch (error) {
//         console.error("Error fetching GitHub repos:", error);
//       }
//     };

//     fetchRepos();
//   }, []);

//   useEffect(() => {
//     // Automatically slide to the next repo every 3 seconds
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === repos.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 4000); // Change project every 3 seconds

//     return () => clearInterval(interval); // Cleanup on unmount
//   }, [repos.length]);

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? repos.length - 1 : prevIndex - 1
//     );
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === repos.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   return (
//     <div className="py-16 px-8 bg-gray-950 relative text-white">
//       <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>

//       {/* Carousel Container */}
//       <div className="relative w-full max-w-5xl mx-auto overflow-hidden">
//         <div
//           className="flex transition-transform duration-500 ease-in-out"
//           style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//         >
//           {repos.map((repo, index) => (
//             <div
//               key={repo.id}
//               className="w-full flex-shrink-0 p-8 bg-gray-800 rounded-lg shadow-lg"
//             >
//               <h3 className="text-2xl font-semibold mb-4">{repo.name}</h3>
//               <p className="text-gray-300 text-base mb-6">
//                 {repo.description
//                   ? repo.description
//                   : "No description available."}
//               </p>
//               <div className="flex items-center justify-between mt-4">
//                 <a
//                   href={repo.html_url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-400 hover:text-blue-300 flex items-center"
//                 >
//                   <FaGithub className="mr-2" /> GitHub Repo
//                 </a>
//                 {repo.homepage && (
//                   <a
//                     href={repo.homepage}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-green-400 hover:text-green-300 flex items-center"
//                   >
//                     <FaLink className="mr-2" /> Live Demo
//                   </a>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Left Arrow */}
//         <button
//           className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full hover:bg-gray-600"
//           onClick={prevSlide}
//         >
//           &#10094;
//         </button>

//         {/* Right Arrow */}
//         <button
//           className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full hover:bg-gray-600"
//           onClick={nextSlide}
//         >
//           &#10095;
//         </button>

//         {/* Dots */}
//         <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
//           {repos.map((_, index) => (
//             <div
//               key={index}
//               className={`w-4 h-4 rounded-full ${
//                 currentIndex === index ? "bg-white" : "bg-gray-500"
//               }`}
//             ></div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;
