import React from "react";
import { FaLinkedin, FaGithub, FaMapMarkerAlt } from "react-icons/fa";
import profileImage from "../assets/profileImage.png";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-900 via-black to-gray-900 text-center text-white">
      <h1 className="text-4xl font-bold mb-2 animate-fadeInDown">
      Hi 👋, I'm  <span className="text-red-300">Tejas</span>
      </h1>
      <p className="text-lg text-gray-200 mt-2 animate-fadeInUp">
        Full Stack Engineer
      </p>
      <p className="text-sm text-gray-400 mt-1 flex items-center justify-center animate-fadeInUp delay-1">
        Based in India <FaMapMarkerAlt className="ml-2 text-red-500" />
      </p>

      <div className="mt-6">
        <img
          src={profileImage}
          alt="Profile"
          className="w-40 h-40 rounded-full object-cover border-4 border-gray-400 shadow-xl transition-transform transform hover:scale-110 duration-300"
        />
      </div>

      <div className="mt-6 flex space-x-8 animate-fadeInUp delay-2">
        <a
          href="https://www.linkedin.com/in/tejastr888/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-300 text-3xl transition-transform transform hover:scale-125 duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Tejastr888"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-200 hover:text-gray-500 text-3xl transition-transform transform hover:scale-125 duration-300"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default Home;
