import { useState } from "react";
import data from "../data/data.js";
import Tabs from "../utils/Tabs.jsx";
import Templatewe from "../utils/Templatewe.jsx";
import { useTheme } from "../utils/ThemeContext";
import useInView from "../utils/useInView.jsx";

const Experience = () => {
  const [activeTab, setActiveTab] = useState("work");
  const { darkMode } = useTheme();
  const [sectionRef, isInView] = useInView({ threshold: 0.1 });

  return (
    <div
      ref={sectionRef}
      className={`py-24 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      } transition-colors duration-300`}
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <div
          className={`transform transition-all duration-700 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-3xl font-medium text-center mb-12">
            Experience
          </h2>

          <Tabs activeTab={activeTab} onTabChange={setActiveTab} />

          <div
            className={`mt-12 p-8 border ${
              darkMode ? "border-gray-800" : "border-gray-200"
            }`}
          >
            {/* Pass only the relevant array (work or education) */}
            <Templatewe
              data={data[activeTab]}
              activeTab={activeTab}
              isInView={isInView}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
