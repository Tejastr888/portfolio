import { useTheme } from "./ThemeContext";
import PropTypes from 'prop-types';

const Tabs = ({ activeTab, onTabChange }) => {
    const { darkMode } = useTheme();
    
    return (
        <div className="flex justify-center space-x-4">
            <button
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === "work"
                        ? darkMode
                            ? 'bg-blue-600 text-white'
                            : 'bg-blue-500 text-white'
                        : darkMode
                            ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                onClick={() => onTabChange("work")}
            >
                Work Experience
            </button>
            <button
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === "education"
                        ? darkMode
                            ? 'bg-blue-600 text-white'
                            : 'bg-blue-500 text-white'
                        : darkMode
                            ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                onClick={() => onTabChange("education")}
            >
                Education
            </button>
        </div>
    );
};

Tabs.propTypes = {
    activeTab: PropTypes.oneOf(['work', 'education']).isRequired,
    onTabChange: PropTypes.func.isRequired
};

export default Tabs;
