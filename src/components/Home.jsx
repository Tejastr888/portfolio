import React from "react";
import { FaLinkedin, FaGithub, FaMapMarkerAlt } from "react-icons/fa";
import profileImage from "../assets/profileImage.png";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-900 via-black to-gray-900 text-center text-white">
      {/* Animated Title */}
      <h1 className="text-4xl font-bold mb-2 animate-fadeInDown">
        MY NAME IS <span className="text-red-300">TEJAS</span>
      </h1>
      <p className="text-lg text-gray-200 mt-2 animate-fadeInUp">
        MULTIDISCIPLINARY ENGINEER
      </p>
      <p className="text-sm text-gray-400 mt-1 flex items-center justify-center animate-fadeInUp delay-1">
        Based in Bangalore <FaMapMarkerAlt className="ml-2 text-red-500" />
      </p>

      {/* Profile Image with Hover Effect */}
      <div className="mt-6">
        <img
          src={profileImage}
          alt="Profile"
          className="w-40 h-40 rounded-full object-cover border-4 border-gray-400 shadow-xl transition-transform transform hover:scale-110 duration-300"
        />
      </div>

      {/* Social Links with Hover Effect */}
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
