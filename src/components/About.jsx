import React from "react";
import Stats from "./Stats";
import resume from "../assets/pdf/resume.pdf";
import Experience from "./Experience.jsx";


const About = () => {
  return (
    <>
      <Stats />
      <Experience/>
      <div className="bg-white py-16">
        <div className="container mx-auto px-6 lg:px-20 flex flex-col md:flex-row items-center">
          {/* Left side content */}
          <div className="md:w-2/3 text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-3xl font-semibold text-gray-800">ABOUT ME</h2>
            <p className="text-lg text-gray-600 mt-4">
              Hello! I am a Multidisciplinary Technologist with a strong
              foundation in software engineering, game development, and data
              science. Currently building my expertise across several fields
              including full-stack development, cloud computing, and AI-driven
              technologies.
              <br />
              I am very keen programming and software development. Right now I am able to build full stack applications using Java, react, spring boot, and postgresql ...etc.
              additionally have also been using tools like docker, Intellijidea IDE for development of applications and API Endpoints. I want do more of this.
            </p>
            <p className="text-lg text-gray-600 mt-4">
              I enjoy tackling new challenges and contributing my skills to
              innovative projects. Let’s connect and discuss how I can
              contribute to your next big project!
            </p>
          </div>

          {/* Right side with Resume view */}
          <div className="md:w-1/3">
            <iframe
              src={resume}
              title="Tejas Resume"
              className="w-full h-96 border-2 border-gray-300 shadow-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
