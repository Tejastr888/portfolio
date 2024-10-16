import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-6 md:px-16 lg:px-24">
        {/* Contact Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-xl font-semibold">Contact Me</h2>
            <p className="text-gray-400">
              I'd love to hear from you! Reach out at:
            </p>
            <a
              href="mailto:tejastr888@gmail.com"
              className="text-blue-500 hover:underline"
            >
              tejastr888@gmail.com
            </a>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="https://leetcode.com/u/tejasacharya078/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300 text-2xl"
            >
              <SiLeetcode />
            </a>
            <a
              href="https://www.linkedin.com/in/tejastr888/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300 text-2xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Tejastr888"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300 text-2xl"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="mt-8 text-center text-gray-500">
          <p>&copy; 2024 Tejas. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
