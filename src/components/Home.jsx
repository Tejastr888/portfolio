import React from "react";
import { FaLinkedin, FaGithub, FaMapMarkerAlt } from "react-icons/fa";
import profileImage from "../assets/profileImage.png";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-center">
      <h1 className="text-3xl font-semibold">MY NAME IS TEJAS</h1>
      <p className="text-lg text-gray-500 mt-2">MULTIDISCIPLINARY ENGINEER</p>
      <p className="text-sm text-gray-400 mt-1 flex items-center justify-center">
        Based in Bangalore <FaMapMarkerAlt className="ml-2 text-red-500" />
      </p>
      <div className="mt-6">
        <img
          src={profileImage}
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover border-4 border-gray-300"
        />
      </div>

      <div className="mt-6 flex space-x-6">
        <a
          href="https://www.linkedin.com/in/tejastr888/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 text-3xl"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Tejastr888"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-gray-600 text-3xl"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default Home;
