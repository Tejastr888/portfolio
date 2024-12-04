import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 bg-black text-white px-6 md:px-16 lg:px-24 shadow-lg">
      <div className="container py-4 flex justify-between items-center">
        {/* Email Button */}
        <div>
          <a
            href="mailto:tejastr888@gmail.com"
            className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-lg"
          >
            Email Me
          </a>
        </div>
        {/* Social Links */}
        <div className="space-x-4 flex items-center">
          <a
            href="https://leetcode.com/u/tejasacharya078/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded flex items-center justify-center"
          >
            <SiLeetcode className="text-xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/tejastr888/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-700 hover:bg-blue-600 text-white p-2 rounded flex items-center justify-center"
          >
            <FaLinkedin className="text-xl" />
          </a>
          
          <a
            href="https://github.com/Tejastr888"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 hover:bg-gray-800 text-white p-2 rounded flex items-center justify-center"
          >
            <FaGithub className="text-xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
