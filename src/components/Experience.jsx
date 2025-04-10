import React, { useState } from "react";
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
            className={`py-16 ${
                darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
            } transition-colors duration-300`}
        >
            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
                <div className={`transform transition-all duration-700 ${
                    isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}>
                    <h2 className="text-3xl font-bold text-center mb-8">Professional Journey</h2>
                    <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
                    <div className={`mt-8 p-6 rounded-lg ${
                        darkMode ? 'bg-gray-800' : 'bg-gray-50'
                    } shadow-lg`}>
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