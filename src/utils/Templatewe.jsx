import { useTheme } from "./ThemeContext";
import PropTypes from "prop-types";

const Templatewe = ({ data, activeTab, isInView }) => {
  const { darkMode } = useTheme();

  return (
    <div className="space-y-8">
      {data.map((item, index) => (
        <div
          key={index}
          className={`p-8 border-b last:border-b-0 ${
            darkMode
              ? "border-gray-800"
              : "border-gray-200"
          } transition-all duration-500 transform ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ transitionDelay: `${index * 200}ms` }}
        >
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
            <div>
              <h3 className="text-xl font-medium mb-2">
                {activeTab === "work" ? item.company : item.institution}
              </h3>
              <p className="text-lg opacity-80 mb-2">
                {activeTab === "work" ? item.role : item.degree}
              </p>
            </div>
            <span
              className={`inline-block text-sm tracking-wide ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              {item.duration}
            </span>
          </div>

          <ul className="space-y-3 text-sm opacity-80">
            {(item.details || []).map((desc, descIndex) => (
              <li
                key={descIndex}
                className={`flex items-start leading-relaxed ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                } opacity-0 animate-fadeIn`}
                style={{
                  animationDelay: `${index * 200 + descIndex * 100}ms`,
                  animationFillMode: "forwards",
                }}
              >
                <span className="mr-2 mt-1.5 text-blue-500">•</span>
                {desc}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

Templatewe.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      company: PropTypes.string,
      institution: PropTypes.string,
      role: PropTypes.string,
      degree: PropTypes.string,
      duration: PropTypes.string.isRequired,
      details: PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
  activeTab: PropTypes.oneOf(["work", "education"]).isRequired,
  isInView: PropTypes.bool,
};

export default Templatewe;
