import React, { useEffect, useState } from "react";
import { useTheme } from "../utils/ThemeContext";
import { FaCode, FaGithub, FaCertificate } from "react-icons/fa";

const Stats = () => {
  const { darkMode } = useTheme();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const stats = [
    {
      id: 1,
      title: "Leetcode Problems",
      value: "150+",
      icon: FaCode,
      color: "text-green-500"
    },
    {
      id: 2,
      title: "Github Projects",
      value: "25+",
      icon: FaGithub,
      color: "text-blue-500"
    },
    {
      id: 3,
      title: "Tech Certifications",
      value: "5+",
      icon: FaCertificate,
      color: "text-yellow-500"
    }
  ];

  return (
    <div className={`py-24 sm:py-32 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center mb-16">
            <h2 className={`text-3xl font-bold tracking-tight ${darkMode ? 'text-white' : 'text-gray-900'} sm:text-4xl`}>
              Achievements & Milestones
            </h2>
            <p className={`mt-4 text-lg leading-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Key metrics from my journey in software development
            </p>
          </div>
          
          <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.id}
                  className={`relative ${
                    darkMode ? 'bg-gray-800' : 'bg-white'
                  } overflow-hidden rounded-2xl px-6 py-10 shadow-lg transform transition-all duration-500 ease-in-out ${
                    animate ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                  style={{ transitionDelay: `${stat.id * 200}ms` }}
                >
                  <dt className={`flex items-center text-base font-semibold leading-7 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    <Icon className={`h-6 w-6 ${stat.color} mr-3`} />
                    {stat.title}
                  </dt>
                  <dd className={`mt-2 text-4xl font-bold tracking-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {stat.value}
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Stats;
