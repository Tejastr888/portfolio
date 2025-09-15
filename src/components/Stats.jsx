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
    <div className={`py-24 ${darkMode ? 'bg-black' : 'bg-white'} transition-colors duration-300`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto">
          <div className="text-center mb-20">
            <h2 className={`text-3xl font-medium tracking-tight ${darkMode ? 'text-white' : 'text-black'}`}>
              Stats
            </h2>
            <p className={`mt-4 text-sm tracking-wider uppercase ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Development Journey in Numbers
            </p>
          </div>
          
          <dl className="grid grid-cols-1 gap-12 sm:grid-cols-3">
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
